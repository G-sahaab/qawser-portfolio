import React from "react";
import { motion } from "framer-motion";

export default function QawserPortfolio() {
  const sectionStyle = {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.15)",
    backdropFilter: "blur(12px)",
  };

  const handleFlashClick = () => {
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = "100vw";
    flash.style.height = "100vh";
    flash.style.background = "radial-gradient(circle, #00ffffaa 0%, transparent 80%)";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = 9999;
    flash.style.animation = "flashFade 0.5s ease-out";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif", color: "white" }}>
      {/* Neon Name */}
      <motion.h1
        onClick={handleFlashClick}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #00ffff, #ff00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 20px #00ffff, 0 0 30px #ff00ff, 0 0 50px #ff00ff",
          cursor: "pointer",
        }}
      >
        Qawser Qayoom
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ fontSize: "18px", marginBottom: "40px", color: "#ccc" }}
      >
        Business Developer | Marketing & Sales | AI Tools | BBA Graduate
      </motion.p>

      {/* Sections */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>About Me</h2>
        <p>
          I’m a BBA graduate from PTU with experience in business development,
          sales, and marketing. I'm passionate about streamlining operations
          using AI and automation tools to boost retail performance.
        </p>
      </motion.section>

      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Skills</h2>
        <ul>
          <li>Business Development & Strategy</li>
          <li>Sales and Marketing Campaigns</li>
          <li>AI Tools – ChatGPT, Canva AI, Notion AI</li>
          <li>CRM, Excel, PowerPoint</li>
        </ul>
      </motion.section>

      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Projects</h2>
        <p><strong>SmartRetail-Kit</strong> – Built AI-based tools for automating sales, reports, and reminders.</p>
        <p><strong>Marketing Campaign for Mir Electronics</strong> – Increased footfall and conversion through automation and dashboards.</p>
      </motion.section>

      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Achievements</h2>
        <ul>
          <li>Star Performer – Bajaj Allianz</li>
          <li>State-Level Kabaddi Player</li>
          <li>Event Organizer – AGC Amritsar</li>
        </ul>
      </motion.section>

      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Contact</h2>
        <p>Email: gyawer575@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/qawser-qayoom-113b521b3" target="_blank" rel="noreferrer" style={{ color: "#00ffff" }}>
            Visit Profile
          </a>
        </p>
        <p>
          <a
            href="/Qawser_Qayoom_Resume.pdf"
            download
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              backgroundColor: "#00ffff",
              color: "#000",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 0 12px #00ffff",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 30px #00ffff")}
            onMouseOut={(e) => (e.target.style.boxShadow = "0 0 12px #00ffff")}
          >
            📄 Download My Resume
          </a>
        </p>
      </motion.section>
    </main>
  );
}
