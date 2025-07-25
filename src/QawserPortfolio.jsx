import React from "react";
import { motion } from "framer-motion";

export default function QawserPortfolio() {
  const sectionStyle = {
    border: "1px solid #00ffff",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "30px",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
    backdropFilter: "blur(8px)",
  };

  const headingStyle = {
    fontSize: "56px",
    background: "linear-gradient(90deg, #00ffff, #ff00ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 15px #00ffff, 0 0 30px #ff00ff",
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif", color: "white" }}>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={headingStyle}
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

      {/* About */}
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I’m a BBA graduate from PTU with experience in business development,
          sales, and marketing. I'm passionate about streamlining operations
          using AI and automation tools to boost retail performance.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <ul>
          <li>Business Development & Strategy</li>
          <li>Sales and Marketing Campaigns</li>
          <li>AI Tools – ChatGPT, Canva AI, Notion AI</li>
          <li>CRM, Excel, PowerPoint</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <p><strong>SmartRetail-Kit</strong> – Built AI-based tools for automating sales, reports, and reminders.</p>
        <p><strong>Marketing Campaign for Mir Electronics</strong> – Increased footfall and conversion through automation and dashboards.</p>
      </motion.section>

      {/* Achievements */}
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Achievements</h2>
        <ul>
          <li>Star Performer – Bajaj Allianz</li>
          <li>State-Level Kabaddi Player</li>
          <li>Event Organizer – AGC Amritsar</li>
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section
        style={sectionStyle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>
        <p>Email: gyawer575@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/qawser-qayoom-113b521b3"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#00ffff" }}
          >
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
