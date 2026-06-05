"use client"

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from "lucide-react"
import { useContactForm } from "@/components/logic/UseContactForm"
import { UseConfig } from "@/components/logic/UseConfig"

export function Contact() {
  const { formData, handleChange, handleSubmit, status, fieldErrors } = useContactForm()
  const { contact } = UseConfig()

  const inputStyle = {
    background: "#111318",
    border: "0.5px solid #2a2d3e",
    borderRadius: "6px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#e2e8f0",
    fontFamily: "'Syne', sans-serif",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
  }

  const errorInputStyle = { ...inputStyle, borderColor: "#ef4444" }
  const handleFocus = (e) => (e.currentTarget.style.borderColor = "#22d3a044")
  const handleBlur = (e) => (e.currentTarget.style.borderColor = fieldErrors[e.currentTarget.name] ? "#ef4444" : "#2a2d3e")

  return (
    <section id="contact" style={{ padding: "80px 28px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label">get in touch</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>

          {/* Left — contact info */}
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#f1f5f9", marginBottom: "12px" }}>
              {contact.heading || "Let's work together"}
            </h3>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.75, marginBottom: "32px" }}>
              {contact.description}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: Mail, value: contact.email },
                { icon: Phone, value: contact.phone },
                { icon: MapPin, value: contact.location },
              ].map(({ icon: Icon, value }, i) =>
                value ? (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "32px", height: "32px", border: "0.5px solid #1e2030",
                      borderRadius: "8px", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "#22d3a0", flexShrink: 0,
                    }}>
                      <Icon size={14} />
                    </div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#94a3b8" }}>
                      {value}
                    </span>
                  </div>
                ) : null
              )}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

            {/* Success message */}
            {status === "success" && (
              <div style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "#0f2e25", border: "0.5px solid #22d3a044",
                borderRadius: "6px", padding: "10px 14px",
                color: "#22d3a0", fontSize: "13px",
              }}>
                <CheckCircle size={15} />
                Message sent! I'll get back to you soon.
              </div>
            )}

            {/* Error message */}
            {status === "error" && !Object.keys(fieldErrors).length && (
              <div style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "#2d1515", border: "0.5px solid #ef444444",
                borderRadius: "6px", padding: "10px 14px",
                color: "#ef4444", fontSize: "13px",
              }}>
                <AlertCircle size={15} />
                Something went wrong. Please try again.
              </div>
            )}

            {/* Name */}
            <div>
              <input
                style={fieldErrors.name ? errorInputStyle : inputStyle}
                placeholder="your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              {fieldErrors.name && (
                <span style={{ fontSize: "11px", color: "#ef4444", marginTop: "4px", display: "block" }}>
                  {fieldErrors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                style={fieldErrors.email ? errorInputStyle : inputStyle}
                type="email"
                placeholder="your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              {fieldErrors.email && (
                <span style={{ fontSize: "11px", color: "#ef4444", marginTop: "4px", display: "block" }}>
                  {fieldErrors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                style={{ ...(fieldErrors.message ? errorInputStyle : inputStyle), resize: "none", height: "120px" }}
                placeholder="your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                rows={5}
                required
              />
              {fieldErrors.message && (
                <span style={{ fontSize: "11px", color: "#ef4444", marginTop: "4px", display: "block" }}>
                  {fieldErrors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                background: status === "loading" ? "#1a6b50" : "#22d3a0",
                color: "#0d0d0f",
                fontFamily: "'Syne', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                border: "none",
                padding: "10px 24px",
                borderRadius: "6px",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                alignSelf: "flex-start",
                transition: "opacity 0.2s",
              }}
            >
              {status === "loading" ? (
                <>
                  <Loader size={14} style={{ animation: "spin 1s linear infinite" }} />
                  sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  send message
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}