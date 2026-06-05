"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { UseConfig } from "@/components/logic/UseConfig"

export function Hero() {
  const { home, profile, contact } = UseConfig()

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        // borderBottom: "0.5px solid #1e2030",
        padding: "80px 28px 60px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative" }}>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {[
            { icon: Github, href: profile.github || "https://github.com" },
            { icon: Linkedin, href: profile.linkedin || "https://linkedin.com" },
            { icon: Mail, href: `mailto:${contact.email || "your.email@example.com"}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "38px",
                height: "38px",
                border: "0.5px solid #1e2030",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#475569",
                transition: "color 0.2s, border-color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#22d3a0"
                e.currentTarget.style.borderColor = "#22d3a033"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#475569"
                e.currentTarget.style.borderColor = "#1e2030"
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div
          style={{
            display: "inline-block",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#22d3a0",
            background: "#0f2e25",
            border: "0.5px solid #22d3a044",
            borderRadius: "4px",
            padding: "3px 10px",
            marginBottom: "20px",
            letterSpacing: "0.06em",
          }}
        >
          Busy in tech world
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 10px",
            color: "#f1f5f9",
          }}
        >
          Hi, I&apos;m{" "}
          <span style={{ color: "#22d3a0" }}>{home.name || "Darpan"}</span>
          <span className="cursor-blink" />
        </h1>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "#64748b",
            margin: "0 0 20px",
          }}
        >
          $ {(home.profession || "Full Stack Developer").toLowerCase().replace(/ /g, "_")} --2yrs --bangalore
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#94a3b8",
            lineHeight: 1.75,
            maxWidth: "540px",
            margin: "0 0 32px",
          }}
        >
          {home.description ||
            "Passionate about creating beautiful, functional, and user-centered digital experiences."}
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              background: "#22d3a0",
              color: "#0d0d0f",
              fontFamily: "'Syne', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              border: "none",
              padding: "10px 24px",
              borderRadius: "6px",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            view my work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              background: "transparent",
              color: "#94a3b8",
              fontFamily: "'Syne', sans-serif",
              fontSize: "13px",
              border: "0.5px solid #2a2d3e",
              padding: "10px 24px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#22d3a044"
              e.currentTarget.style.color = "#e2e8f0"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2d3e"
              e.currentTarget.style.color = "#94a3b8"
            }}
          >
            get in touch
          </button>
        </div>
      </div>
    </section>
  )
}