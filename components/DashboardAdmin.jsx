// Example: components/ConfigForm.jsx
"use client";
import { useState } from "react";

export default function DashboardAdmin() {
  const [formData, setFormData] = useState({ foo: "" }); // Adjust fields as needed
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/dashboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) {
      alert("Config updated!");
    } else {
      alert("Failed to update config.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="foo"
        value={formData.foo}
        onChange={handleChange}
        placeholder="Enter value"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Updating..." : "Update Config"}
      </button>
    </form>
  );
}