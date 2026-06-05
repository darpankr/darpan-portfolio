"use client"

import { UseConfig } from "@/components/logic/UseConfig"

export function About() {
  const { about } = UseConfig()

  return (
    <section id="about" style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label">about me</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          <div>
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "12px",
                border: "0.5px solid #1e2030",
                overflow: "hidden",
                position: "relative",
                margin: "0 auto",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.parentElement.style.background = "#111318"
                  e.currentTarget.parentElement.style.display = "flex"
                  e.currentTarget.parentElement.style.alignItems = "center"
                  e.currentTarget.parentElement.style.justifyContent = "center"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#22d3a0",
                }}
              >
                DK
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              {(about.quickFacts || []).map((fact, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 0",
                    borderBottom: "0.5px solid #1e2030",
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22d3a0", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#94a3b8" }}>
                    {fact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: "15px",
                color: "#94a3b8",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              {about.bio}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#94a3b8",
                lineHeight: 1.8,
              }}
            >
              {about.hobbies}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}