"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "SQL", level: 95 },
      { name: "React", level: 85 },
      { name: "FastAPI", level: 85 },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 90 },
      { name: "BigQuery", level: 80 },
      { name: "Hadoop Ecosystem", level: 75 },
      { name: "Data Mining", level: 85 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Azure DevOps", level: 85 },
      { name: "AWS", level: 75 },
      { name: "Redshift", level: 70 },
      { name: "Git / GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 75 },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "NLP (RoBERTa)", level: 80 },
      { name: "Sentiment Analysis", level: 85 },
      { name: "Predictive Modeling", level: 80 },
      { name: "Data Pipelines", level: 90 },
      { name: "Optimization", level: 80 },
    ],
  },
];

const certifications = [
  {
    name: "Microsoft Excel Expert",
    issuer: "Microsoft",
    badge: "MOS",
    url: "https://www.credly.com/badges/f19e9092-0c8a-4aa0-bff2-4e1959d8e83e/public_url",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    badge: "AI-900",
    url: "https://www.credly.com/badges/6304d618-1df2-4e32-becd-b75503d32430/public_url",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "CLF-C02",
    url: "https://www.credly.com/badges/d5a62efe-a2f2-45b6-a739-7947ec574816/public_url",
    color: "from-orange-500 to-amber-600",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent font-mono text-sm mb-3 block">
            04 / Skills & Certs
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            My Technical
            <br />
            <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-card-border"
            >
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-5">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-muted font-mono text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: 0.3 + gi * 0.15 + si * 0.08,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-6">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="group relative p-5 rounded-2xl bg-card border border-card-border card-glow hover:border-accent/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold text-white bg-gradient-to-r ${cert.color} mb-3`}
                >
                  {cert.badge}
                </div>
                <h4 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">
                  {cert.name}
                </h4>
                <p className="text-xs text-muted">{cert.issuer}</p>
                <svg
                  className="absolute top-5 right-5 w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Marquee of technologies */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
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
              "Hadoop",
              "Redshift",
              "Git",
              "NLP",
              "Machine Learning",
              "Data Mining",
              "REST APIs",
              "Formstack",
              "CRM Systems",
              "Scrum",
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
              "Hadoop",
              "Redshift",
              "Git",
              "NLP",
              "Machine Learning",
              "Data Mining",
              "REST APIs",
              "Formstack",
              "CRM Systems",
              "Scrum",
            ].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mx-4 text-2xl md:text-4xl font-bold text-card-border/50 select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
