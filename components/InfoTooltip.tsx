"use client";

import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface InfoTooltipProps {
  content: string;
}

export function InfoTooltip({ content }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300} open={isMobile ? open : undefined}>
        <TooltipTrigger
          asChild
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isMobile) {
              setOpen(!open);
            }
          }}
        >
          <span className="inline-flex" onClick={(e) => e.stopPropagation()}>
            <HelpCircle className="h-4 w-4 ml-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-help" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs" onPointerDownOutside={() => isMobile && setOpen(false)}>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
