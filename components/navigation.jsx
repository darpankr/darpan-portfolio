"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = ["home", "about", "skills", "projects", "contact"]

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(13,13,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        // borderBottom: scrolled ? "0.5px solid #1e2030" : "none",
        transition: "all 0.3s",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "56px" }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#22d3a0",
              letterSpacing: "0.05em",
            }}
          >
            ~/darpan.dev
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden md:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="nav-link">
                {item}
              </button>
            ))}
          </div>

          <button
            style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer" }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div
            style={{
              paddingBottom: "16px",
              borderTop: "0.5px solid #1e2030",
              marginTop: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              paddingTop: "16px",
            }}
          >
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="nav-link" style={{ textAlign: "left" }}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}