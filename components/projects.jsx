"use client"

import { ExternalLink, Github } from "lucide-react"
import { UseConfig } from "@/components/logic/UseConfig"

export function Projects() {
  const { projects } = UseConfig()

  return (
    <section id="projects" style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label">featured projects</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div
                  style={{
                    height: "140px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    marginBottom: "16px",
                    background: "#1a1d28",
                    border: "0.5px solid #1e2030",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              )}

              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "10px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#f1f5f9", margin: 0 }}>
                  {project.title}
                </h3>
                <div style={{ display: "flex", gap: "8px", flexShrink: 0, marginLeft: "8px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#475569", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3a0")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {(project.demo || project.link) && (
                    <a
                      href={project.demo || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#475569", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3a0")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.65, marginBottom: "16px" }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      background: "#0f2e25",
                      color: "#22d3a0",
                      border: "0.5px solid #22d3a033",
                      borderRadius: "4px",
                      padding: "2px 8px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}