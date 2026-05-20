"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1E3A8A20,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          SQA Engineer • SDET • Automation Developer
        </div>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Building Scalable
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Automation Systems
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          Specialized in Selenium, Playwright, Java, and TypeScript automation
          for real-world operational workflows and browser automation systems.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button className="rounded-full bg-blue-600 px-8 py-6 text-base hover:bg-blue-500">
            View Projects
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-white/20 bg-transparent px-8 py-6 text-base text-white hover:bg-white/10"
          >
            Download Resume
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            "Playwright",
            "Selenium",
            "TypeScript",
            "Java",
            "Automation",
            "Testing",
          ].map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
