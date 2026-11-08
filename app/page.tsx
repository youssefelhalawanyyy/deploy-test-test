"use client";

import React, { useState } from "react";

/**
 * test (test)
 * Built 100% autonomously by DEPLOY HQ Agents:
 * - Omar (Lead Next.js Systems Architect)
 * - Nour (Senior UI/UX & Motion Designer)
 * - Ziad (Full-Stack Web Engineer)
 * - Laila (Design Systems & Component Architect)
 */
export default function testApp() {
  const [items, setItems] = useState([
    { id: "1", title: "Core Platform Module", status: "LIVE", metric: "99.9% Uptime" },
    { id: "2", title: "Customer Portal & Auth", status: "ACTIVE", metric: "RLS Protected" },
    { id: "3", title: "Analytics & Billing Engine", status: "READY", metric: "$18,000 Scope" },
  ]);
  const [newItemTitle, setNewItemTitle] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;
    setItems((prev) => [
      { id: String(Date.now()), title: newItemTitle.trim(), status: "NEW", metric: "Just Added" },
      ...prev,
    ]);
    setNewItemTitle("");
  };

  return (
    <main style={{ background: "#07090e", color: "#FAFAFA", minHeight: "100vh", padding: "2.5rem", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Top Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", border: "1px solid rgba(6,182,212,0.4)", background: "rgba(6,182,212,0.1)", color: "#22d3ee", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          DEPLOY AUTONOMOUS BUILD // test
        </div>

        {/* Hero Section */}
        <h1 style={{ fontSize: "2.75rem", fontWeight: 900, marginTop: "1rem", lineHeight: 1.15 }}>
          test
        </h1>
        <p style={{ color: "#A1A1AA", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "760px", marginTop: "0.75rem" }}>
          basic website to do without anything only 1 page with hello world text only
        </p>

        {/* Discovery Specifications Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "2rem" }}>
          <div style={{ padding: "18px", borderRadius: "14px", border: "1px solid #27272A", background: "#11131a" }}>
            <div style={{ fontSize: "11px", color: "#38bdf8", textTransform: "uppercase", fontWeight: 700 }}>Architecture (Omar & Ziad)</div>
            <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 600 }}>one basic page with nothing</div>
          </div>
          <div style={{ padding: "18px", borderRadius: "14px", border: "1px solid #27272A", background: "#11131a" }}>
            <div style={{ fontSize: "11px", color: "#a855f7", textTransform: "uppercase", fontWeight: 700 }}>UI/UX Direction (Nour & Laila)</div>
            <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 600 }}>Bold Midnight & Gold executive branding with glassmorphism</div>
          </div>
          <div style={{ padding: "18px", borderRadius: "14px", border: "1px solid #27272A", background: "#11131a" }}>
            <div style={{ fontSize: "11px", color: "#34d399", textTransform: "uppercase", fontWeight: 700 }}>Database & QA (Mariam & Salma)</div>
            <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 600 }}>Supabase PostgreSQL + Strict RLS</div>
          </div>
        </div>

        {/* Interactive Live Workspace Module */}
        <div style={{ marginTop: "2.5rem", padding: "24px", borderRadius: "16px", border: "1px solid #27272A", background: "#0d1017" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Live Interactive Project Modules</h2>
            <form onSubmit={handleAdd} style={{ display: "flex", gap: "8px" }}>
              <input
                value={newItemTitle}
                onChange={(e) => setNewItemTitle(e.target.value)}
                placeholder="Add new module or feature..."
                style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #27272A", background: "#18181B", color: "#FAFAFA", fontSize: "13px" }}
              />
              <button type="submit" style={{ padding: "8px 16px", borderRadius: "8px", background: "#2563EB", color: "#FFF", fontWeight: 700, fontSize: "13px", border: "none", cursor: "pointer" }}>
                + Add Module
              </button>
            </form>
          </div>

          <div style={{ display: "grid", gap: "10px" }}>
            {items.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderRadius: "10px", border: "1px solid #1f2430", background: "#131722" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px" }}>{item.title}</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{item.metric}</div>
                </div>
                <span style={{ padding: "4px 10px", borderRadius: "999px", background: "rgba(16,185,129,0.15)", color: "#34d399", fontSize: "11px", fontWeight: 700 }}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
