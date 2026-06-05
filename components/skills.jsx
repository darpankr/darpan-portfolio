"use client"

import { UseConfig } from "@/components/logic/UseConfig"

export function Skills() {
  const { skills } = UseConfig()

  return (
    <section id="skills" style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label">skills &amp; technologies</div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "12px",
          }}
        >
          {skills.map((category, index) => (
            <div key={index} className="skill-card">
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "#22d3a0",
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                // {category.title.toLowerCase()}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      background: "#1a1d28",
                      color: "#94a3b8",
                      border: "0.5px solid #2a2d3e",
                      borderRadius: "4px",
                      padding: "3px 8px",
                    }}
                  >
                    {skill}
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