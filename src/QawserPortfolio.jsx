import React from "react";
import { motion } from "framer-motion";

export default function QawserPortfolio() {
  const sectionStyle = {
    border: "1px solid #FFD700",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    boxShadow: "0 0 25px rgba(255, 215, 0, 0.4)",
  };

  const handleFlashClick = () => {
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = "100vw";
    flash.style.height = "100vh";
    flash.style.background = "radial-gradient(circle, #FFD700AA 0%, transparent 80%)";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = 9999;
    flash.style.animation = "flashFade 0.5s ease-out";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
  };

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      {/* Animated Name */}
      <motion.h1
        onClick={handleFlashClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="glow-text typing-text"
      >
        Qawser Qayoom
      </motion.h1>

      {/* Headline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ fontSize: "18px", color: "#ccc", marginBottom: "40px" }}
      >
        Business Developer | AI Tools Specialist | Marketing Strategist | BBA Graduate
      </motion.p>

      {/* About Me */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>About Me</h2>
        <p>
          I’m a BBA graduate from Punjab Technical University with a passion for using technology and strategy to
          grow businesses. I've led marketing campaigns, boosted sales performance, and explored automation using AI tools.
        </p>
        <p>
          My mission is to empower local and global markets by combining strong business sense with digital innovation.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Skills</h2>
        <ul>
          <li>Business Development & Strategic Planning</li>
          <li>Sales Funnel Optimization</li>
          <li>Marketing Campaigns (B2C & B2B)</li>
          <li>AI Tools: ChatGPT, Notion AI, Canva AI</li>
          <li>CRM Management, Excel Dashboards, Reporting</li>
          <li>Team Leadership, Communication, Event Management</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Projects</h2>
        <p><strong>SmartRetail-Kit</strong> – An AI automation system for retail outlets that includes smart reminders, sales tracking, and visual dashboards.</p>
        <p><strong>Marketing Campaign for Mir Electronics</strong> – Increased footfall by 35% and improved conversion rate using AI-enhanced campaign scheduling and visuals.</p>
        <p><strong>Personal Portfolio (This Site)</strong> – Built a futuristic portfolio using React, Framer Motion, and Vercel to showcase my skills and creativity.</p>
      </motion.section>

      {/* Achievements */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Achievements</h2>
        <ul>
          <li>⭐ Star Performer – Bajaj Allianz (Sales + Insurance)</li>
          <li>🥇 Organized 3 Major Campus Events at AGC Amritsar</li>
          <li>🏆 State-Level Kabaddi Player – Jammu & Kashmir</li>
          <li>💼 Rehired at Mir Electronics for IT + Strategy Role (2024)</li>
        </ul>
      </motion.section>

      {/* Contact */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Contact</h2>
        <p>Email: gyawer575@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/qawser-qayoom-113b521b3" target="_blank" rel="noreferrer">
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
              backgroundColor: "#FFD700",
              color: "#000",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 0 20px #FFD700",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 40px #FFD700")}
            onMouseOut={(e) => (e.target.style.boxShadow = "0 0 20px #FFD700")}
          >
            📄 Download My Resume
          </a>
        </p>
      </motion.section>
    </main>
  );
}
