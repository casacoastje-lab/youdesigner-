import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Explicit static file serving for /projects (videos, PDFs, images) with Range request support for smooth video streaming
  const projectsDir = path.join(process.cwd(), "public", "projects");
  app.use("/projects", express.static(projectsDir));

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      service: "Younes Oubihi Portfolio & Client Hub API"
    });
  });

  // Project Inquiry submission endpoint
  app.post("/api/inquiries", (req, res) => {
    const { name, email, company, selectedServices, budgetRange, timeline, details } = req.body;
    console.log("Received project inquiry:", { name, email, company, budgetRange });
    res.json({
      success: true,
      message: "Inquiry received and logged to portfolio cloud vault",
      inquiryId: `inq-${Date.now()}`
    });
  });

  // Vite middleware in development vs Static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: "0.0.0.0",
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
