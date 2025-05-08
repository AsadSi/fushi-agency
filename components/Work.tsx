import React from "react";

function Work() {
  return (
    <div>
      {" "}
      {/* Work Section
      <section id="work" className="py-32 px-8 bg-gray-900 relative overflow-hidden">
        {/* Background elements
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              {t("workTitle")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                {t("workHighlight")}
              </span>
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">{t("workSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px -20px rgba(59, 130, 246, 0.3)",
                }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100/80">{project.description}</p>
                  <motion.button className="mt-4 text-blue-400 flex items-center gap-2 w-fit" whileHover={{ x: 5 }}>
                    View Project <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      */}
    </div>
  );
}

export default Work;
