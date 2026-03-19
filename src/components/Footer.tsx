"use client";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} David Awonaike. Built with Next.js & Tailwind.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/davidawonaike2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/davidawon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:aawonaik@purdue.edu"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
