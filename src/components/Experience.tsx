"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Tarifast",
    via: "Purdue MSBAIM Industry Practicum",
    role: "Consultant / Full Stack Developer & Analyst",
    period: "Jan 2026 - Present",
    location: "West Lafayette, IN",
    description: [
      "Built a production-grade full-stack platform (FastAPI + React/TypeScript) processing real-time shipment telemetry into a 4-component weighted confidence scoring engine for 500+ active shipments.",
      "Delivered complete feature pipeline (30+ Signals), RESTful API (5 Modules), and interactive React dashboard for operational intelligence and governance.",
    ],
    tags: ["FastAPI", "React", "TypeScript", "Python", "REST API"],
    accent: "from-indigo-500 to-purple-500",
  },
  {
    company: "Bridge Builder Strategies",
    role: "Analyst Intern",
    period: "Aug 2024 - May 2025",
    location: "Indianapolis, IN",
    description: [
      "Developed a Python data pipeline using Census API and censusdis to extract ACS 5-year data, applying cosine similarity to identify 500 U.S. cities with comparable growth trends.",
      "Led creation of an Azure DevOps scrum board and repository, strengthening cross-team collaboration and workflow efficiency.",
    ],
    tags: ["Python", "Power BI", "Azure DevOps", "Census API"],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    company: "Iron Bow Technologies",
    role: "Sales Intern",
    period: "Jun 2023 - Aug 2024",
    location: "Herndon, VA",
    description: [
      "Analyzed Zero-Trust, DevSecOps, and AI modernization solution pillars, translating offerings into real client scenarios across public and private sector accounts.",
      "Built a 250-page solutions directory and proposed an AI-powered internal knowledgebase for the CSO team, enhancing technical enablement across business units.",
    ],
    tags: ["Sales Engineering", "AI", "Zero-Trust", "Documentation"],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    company: "IndyGo Foundation",
    role: "Database Management / Analytics Contract",
    period: "Feb 2024 - May 2024",
    location: "Indianapolis, IN",
    description: [
      "Facilitated CRM migration to Raiser's Edge NXT and developed a grant sentiment analysis tool using the RoBERTa NLP model.",
      "Optimized donor directory of 850+ businesses in Formstack, expanding outreach and strengthening donor relations.",
    ],
    tags: ["NLP", "RoBERTa", "CRM", "Formstack", "Data Migration"],
    accent: "from-orange-500 to-amber-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm mb-3 block">
            02 / Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Where I&apos;ve
            <br />
            <span className="gradient-text">Made Impact</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                </div>

                <div className="group p-6 md:p-8 rounded-2xl bg-card border border-card-border card-glow hover:border-accent/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      {exp.via && (
                        <div className="text-xs text-accent/60 font-mono">{exp.via}</div>
                      )}
                      <div className="text-muted text-sm mt-1">{exp.role}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono text-accent/70">{exp.period}</div>
                      <div className="text-xs text-muted">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, j) => (
                      <li
                        key={j}
                        className="text-muted text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/30"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-mono text-muted bg-background rounded-md border border-card-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
