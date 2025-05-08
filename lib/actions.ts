"use server";

import { connectToDatabase, FormSubmission } from "@/lib/db";
import { formSchema } from "@/lib/form";
import { z } from "zod";

export async function submitFormData(formData: z.infer<typeof formSchema>) {
  console.log("Server action called with data:", formData);

  try {
    const validatedData = formSchema.parse(formData);
    console.log("Data validated successfully");

    console.log("Connecting to database...");
    await connectToDatabase();
    console.log("Connected to database");

    const submission = new FormSubmission({
      ...validatedData,
      submittedAt: new Date(),
    });

    console.log("Saving submission...");
    await submission.save();
    console.log("Submission saved successfully");

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);

    if (error instanceof z.ZodError) {
      const fieldErrors = error.flatten().fieldErrors;
      console.error("Validation errors:", fieldErrors);

      return {
        success: false,
        error: "Validation error",
        fieldErrors,
      };
    }

    if (error instanceof Error) {
      console.error("Error message:", error.message);
      return {
        success: false,
        error: error.message || "Failed to submit form. Please try again.",
      };
    }

    return {
      success: false,
      error: "Failed to submit form. Please try again.",
    };
  }
}
