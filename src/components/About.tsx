"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Industries" },
  { value: "3", label: "Certifications" },
  { value: "2", label: "Degrees" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm mb-3 block">01 / About</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            The Intersection of
            <br />
            <span className="gradient-text">Data & Innovation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-3 flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="profile-frame rounded-3xl overflow-hidden w-64 h-80 md:w-64 md:h-80 lg:w-72 lg:h-96">
                <Image
                  src="/david-profile.jpg"
                  alt="David Awonaike"
                  width={288}
                  height={384}
                  className="w-full h-full object-cover object-top rounded-3xl"
                  priority
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
                  ))}
                </div>
              </div>
              {/* Accent line */}
              <div className="absolute -left-4 top-8 w-1 h-20 bg-gradient-to-b from-accent to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 space-y-6 md:pl-2"
          >
            <p className="text-muted text-lg leading-relaxed">
              I&apos;m David Awonaike, a Master&apos;s student in Business Analytics and
              Information Management at{" "}
              <span className="text-foreground font-medium">Purdue University</span>. My
              journey sits at the crossroads of technology, data, and
              entrepreneurship&mdash;where I leverage analytics to build solutions that drive
              real impact.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              From building full-stack platforms processing real-time shipment telemetry to
              developing NLP-powered sentiment analysis tools, I bring a unique blend of
              technical depth and business acumen. As co-owner of{" "}
              <span className="text-foreground font-medium">Kikani Keyboards</span>&mdash;a
              Mira Awards &quot;Student Business of the Year&quot; finalist&mdash;I understand
              both sides of the equation.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              My international experience includes a study abroad exchange in{" "}
              <span className="text-foreground font-medium">Kyoto, Japan</span> at
              Ritsumeikan University, where I deepened my expertise in databases and analytics
              while gaining a global perspective.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {[
                "Python",
                "TypeScript",
                "SQL",
                "React",
                "FastAPI",
                "Tableau",
                "Power BI",
                "Azure",
                "AWS",
                "BigQuery",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-mono text-accent/80 border border-accent/15 rounded-full bg-accent/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats & Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-card-border card-glow text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-card border border-card-border">
              <h3 className="text-sm font-mono text-accent mb-4 uppercase tracking-wider">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-sm">Purdue University</div>
                  <div className="text-xs text-muted">MS Business Analytics & IM</div>
                  <div className="text-xs text-accent/60 font-mono">2025 &ndash; 2026</div>
                </div>
                <div className="border-t border-card-border pt-4">
                  <div className="font-medium text-sm">Butler University</div>
                  <div className="text-xs text-muted">BS Business Technology & Analytics</div>
                  <div className="text-xs text-accent/60 font-mono">2021 &ndash; 2025</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
