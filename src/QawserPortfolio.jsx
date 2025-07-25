import React from "react";
import { motion } from "framer-motion";

export default function QawserPortfolio() {
  const sectionStyle = {
    border: "1px solid #00ffff",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
  };

  const handleFlashClick = () => {
    const flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = 0;
    flash.style.left = 0;
    flash.style.width = "100vw";
    flash.style.height = "100vh";
    flash.style.background = "radial-gradient(circle, #00ffff88 0%, transparent 80%)";
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
        style={{
          display: "inline-block",
          fontSize: "60px",
          fontWeight: "bold",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          color: "#00ffff",
          textShadow: "0 0 6px #00ffff",
          whiteSpace: "nowrap",
          overflow: "hidden",
          animation: "typing 3s steps(22, end) forwards, blink 0.7s step-end infinite",
          borderRight: "2px solid #00ffff",
          cursor: "pointer",
        }}
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
          I am Qawser Qayoom — a driven business developer from Baramulla, J&K, holding a BBA degree from PTU. My journey has been forged through grit, family responsibility, and a desire to uplift people through smart strategies.
        </p>
        <p>
          With real-world experience in insurance, electronics, and automation, I fuse traditional business sense with futuristic tools. I believe in growing businesses by empowering people and using AI to simplify the complex.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Skills</h2>
        <h4>🔧 Technical</h4>
        <ul>
          <li>CRM Platforms, Excel Dashboards, PowerPoint Strategy Decks</li>
          <li>AI Tools: ChatGPT, Notion AI, Canva AI, TallyPrime</li>
        </ul>
        <h4>🎯 Business</h4>
        <ul>
          <li>Sales Funnel Design and Optimization</li>
          <li>Marketing Automation & Campaign Planning</li>
          <li>Financial Reporting & Budget Allocation</li>
        </ul>
        <h4>🧠 Soft Skills</h4>
        <ul>
          <li>Leadership, Team Building, Problem-Solving</li>
          <li>Communication, Event Management, Empathy</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Projects</h2>
        <p><strong>SmartRetail-Kit</strong>: A 3-module AI kit designed to automate billing, reminders, and reporting for local retailers.</p>
        <p><strong>Mir Electronics Campaign</strong>: Boosted footfall using customized flyers, auto-reminders, and WhatsApp broadcast automation.</p>
        <p><strong>Sales CRM Tracker</strong>: Built a lead-tracking spreadsheet + notification flow for internal sales team at Bajaj Allianz.</p>
        <p><strong>Portfolio Website</strong>: Designed and built this futuristic glowing portfolio using React + Framer Motion + Vercel.</p>
      </motion.section>

      {/* Achievements */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Achievements</h2>
        <ul>
          <li>⭐ Star Certificate – Bajaj Allianz (Top Sales Finisher)</li>
          <li>📦 Restructured Inventory Tracker at Mir Electronics</li>
          <li>🥇 State-Level Kabaddi Player – Jammu & Kashmir</li>
          <li>🎤 Organized AGC Tech Events (Host + Planner)</li>
        </ul>
      </motion.section>

      {/* Vision & Values */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Vision & Values</h2>
        <p>
          My long-term vision is to build digital-first, scalable businesses from Kashmir and make them global. I believe that even small businesses deserve automation, branding, and growth tools.
        </p>
        <p>
          Integrity, persistence, and vision drive me. I’m not just looking for a job — I’m looking to create solutions, build systems, and uplift my people.
        </p>
      </motion.section>

      {/* Testimonials */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Testimonials</h2>
        <p><strong>“Qawser has the hunger to grow. He delivered results even with limited tools.”</strong> – Supervisor at Bajaj Allianz</p>
        <p><strong>“His ability to mix technology with marketing is rare in our region.”</strong> – Store Owner, Mir Electronics</p>
        <p><strong>“During AGC events, he was always the one solving problems before others even noticed.”</strong> – College Faculty</p>
      </motion.section>

      {/* Contact */}
      <motion.section style={sectionStyle} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Contact</h2>
        <p>Email: gyawer575@gmail.com</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/qawser-qayoom-113b521b3" target="_blank" rel="noreferrer">View Profile</a>
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
              boxShadow: "0 0 20px #00ffff",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 40px #00ffff")}
            onMouseOut={(e) => (e.target.style.boxShadow = "0 0 20px #00ffff")}
          >
            📄 Download Resume
          </a>
        </p>
      </motion.section>
    </main>
  );
}
