"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Monitor,
  Smartphone,
  X,
  Sparkles,
  Eye,
  Layers,
  LayoutGrid,
  Cpu,
  Image as ImageIcon,
  ShoppingBag,
  ShieldCheck,
  Lock,
  Heart,
  Flame,
  Workflow,
  BarChart3,
  BadgeCheck,
  FileSpreadsheet,
  ExternalLink,
  Download,
  Globe,
} from "lucide-react";

// ============================================================================
// HIGH-PRECISION 60FPS SHADER ENGINE (100% CLEAN & STRUCTURED)
// ============================================================================
function CleanShaderCanvas({ shaderId }: { shaderId: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const latBands = 38;
    const lonBands = 64;
    const gridSphere: { u: number; v: number }[] = [];
    for (let i = 0; i <= latBands; i++) {
      const v = (i / latBands) * Math.PI;
      for (let j = 0; j < lonBands; j++) {
        const u = (j / lonBands) * Math.PI * 2;
        gridSphere.push({ u, v });
      }
    }
    const coreDots = Array.from({ length: 85 }, () => ({
      u: Math.random() * Math.PI * 2,
      v: Math.acos(2 * Math.random() - 1),
      r: Math.random() * 0.28,
      size: 1.8 + Math.random() * 2.4,
    }));
    const outerDust = Array.from({ length: 130 }, () => ({
      u: Math.random() * Math.PI * 2,
      v: Math.acos(2 * Math.random() - 1),
      r: 1.12 + Math.random() * 0.45,
      size: 1 + Math.random() * 1.4,
    }));

    const nodes = Array.from({ length: 75 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.1,
      vy: (Math.random() - 0.5) * 1.1,
    }));

    const vortexParticles = Array.from({ length: 260 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 12 + Math.random() * Math.max(width, height) * 0.55,
      speed: 0.006 + Math.random() * 0.012,
    }));

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.fillStyle = "#020308";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const mx = mouseRef.current.active ? mouseRef.current.x : cx;
      const my = mouseRef.current.active ? mouseRef.current.y : cy;

      if (shaderId === 1) {
        const baseR = Math.min(width, height) * 0.33;
        const rotY = time * 0.45 + (mx - cx) * 0.0035;
        const rotX = 0.35 + Math.sin(time * 0.3) * 0.2 + (my - cy) * 0.0035;

        const projectAndDraw = (
          x: number,
          y: number,
          z: number,
          size: number,
          color: string,
          alphaBoost = 0
        ) => {
          const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
          const z1 = z * Math.cos(rotY) + x * Math.sin(rotY);
          const y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
          const z2 = z1 * Math.cos(rotX) + y * Math.sin(rotX);

          let sx = cx + x1;
          let sy = cy + y2;

          if (mouseRef.current.active) {
            const dx = sx - mx;
            const dy = sy - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110 && dist > 1) {
              const force = ((110 - dist) / 110) * 20;
              sx += (dx / dist) * force;
              sy += (dy / dist) * force;
            }
          }

          const depth = (z2 + baseR * 1.4) / (baseR * 2.8);
          const alpha = Math.max(0.12, Math.min(1, depth + alphaBoost));

          ctx.beginPath();
          ctx.arc(sx, sy, size * (0.55 + depth * 0.65), 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        };

        for (let i = 0; i < outerDust.length; i++) {
          const d = outerDust[i];
          const rad = baseR * d.r;
          const x = rad * Math.sin(d.v) * Math.cos(d.u);
          const y = rad * Math.sin(d.v) * Math.sin(d.u);
          const z = rad * Math.cos(d.v);
          const col = i % 3 === 0 ? "#38bdf8" : i % 2 === 0 ? "#c084fc" : "#f472b6";
          projectAndDraw(x, y, z, d.size, col, 0.1);
        }

        for (let i = 0; i < gridSphere.length; i++) {
          const p = gridSphere[i];
          const fold =
            1 +
            0.12 * Math.sin(p.v * 4 + time * 1.6) * Math.cos(p.u * 3 - time * 1.2) +
            0.06 * Math.cos(p.v * 8 - time * 2);

          const rad = baseR * fold;
          const x = rad * Math.sin(p.v) * Math.cos(p.u);
          const y = rad * Math.sin(p.v) * Math.sin(p.u);
          const z = rad * Math.cos(p.v);

          const colorMix = Math.sin(p.u * 2 + p.v * 3 + time);
          const col =
            colorMix > 0.35
              ? "#67e8f9"
              : colorMix < -0.25
              ? "#e879f9"
              : "#818cf8";

          projectAndDraw(x, y, z, 1.35, col, 0);
        }

        for (let i = 0; i < coreDots.length; i++) {
          const c = coreDots[i];
          const rad = baseR * c.r;
          const x = rad * Math.sin(c.v) * Math.cos(c.u + time);
          const y = rad * Math.sin(c.v) * Math.sin(c.u + time);
          const z = rad * Math.cos(c.v);
          const col = i % 2 === 0 ? "#60a5fa" : "#f472b6";
          projectAndDraw(x, y, z, c.size, col, 0.45);
        }
        ctx.globalAlpha = 1;
      } else if (shaderId === 2) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          if (mouseRef.current.active) {
            const dx = mx - n.x;
            const dy = my - n.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 160 && d > 5) {
              n.x += (dx / d) * 1.4;
              n.y += (dy / d) * 1.4;
            }
          }

          ctx.beginPath();
          ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? "#22d3ee" : "#a855f7";
          ctx.fill();

          for (let j = i + 1; j < nodes.length; j++) {
            const n2 = nodes[j];
            const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
            if (dist < 115) {
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = "#38bdf8";
              ctx.globalAlpha = (1 - dist / 115) * 0.55;
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 1;
      } else if (shaderId === 3) {
        const tilt = mouseRef.current.active ? (my - cy) * 0.35 : 0;
        for (let w = 0; w < 14; w++) {
          ctx.beginPath();
          for (let x = 0; x <= width; x += 10) {
            const nx = x / width;
            const y =
              cy +
              tilt * Math.sin(nx * Math.PI) +
              Math.sin(nx * 5 + time * 1.4 + w * 0.3) * 42 +
              Math.cos(nx * 8 - time + w * 0.2) * 24 +
              (w - 7) * 7;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = w % 2 === 0 ? "#22d3ee" : "#c084fc";
          ctx.globalAlpha = 0.45;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      } else if (shaderId === 4) {
        const tx = mouseRef.current.active ? cx + (mx - cx) * 0.35 : cx;
        const ty = mouseRef.current.active ? cy + (my - cy) * 0.35 : cy;

        for (let i = 0; i < vortexParticles.length; i++) {
          const p = vortexParticles[i];
          p.angle += p.speed;
          const x = tx + Math.cos(p.angle) * p.radius;
          const y = ty + Math.sin(p.angle) * (p.radius * 0.65);

          ctx.beginPath();
          ctx.arc(x, y, 1.7, 0, Math.PI * 2);
          ctx.fillStyle = i % 3 === 0 ? "#38bdf8" : i % 2 === 0 ? "#e879f9" : "#818cf8";
          ctx.globalAlpha = 0.8;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      } else if (shaderId === 5) {
        const cols = 28;
        const rows = 16;
        const cw = width / cols;
        const ch = height / rows;

        for (let r = 0; r <= rows; r++) {
          ctx.beginPath();
          for (let c = 0; c <= cols; c++) {
            const px = c * cw;
            const py = r * ch;
            const d = Math.hypot(px - mx, py - my);
            const lift = Math.max(0, (180 - d) / 180) * 32 * Math.sin(d * 0.05 - time * 3);
            const wy = py + Math.sin(c * 0.4 + time * 1.6) * 10 - lift;

            if (c === 0) ctx.moveTo(px, wy);
            else ctx.lineTo(px, wy);

            ctx.fillStyle = "#22d3ee";
            ctx.fillRect(px - 1, wy - 1, 2, 2);
          }
          ctx.strokeStyle = r % 2 === 0 ? "#818cf8" : "#22d3ee";
          ctx.globalAlpha = 0.4;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      animId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [shaderId]);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          active: true,
        };
      }}
      onMouseLeave={() => {
        mouseRef.current.active = false;
      }}
      className="w-full h-full block cursor-crosshair select-none"
    />
  );
}

// ============================================================================
// UNIFIED ITEM TYPE FOR ALL CATEGORIES + PROOF OF WORK
// ============================================================================
type ShowcaseItem = {
  id: string;
  title: string;
  shortLine: string;
  type: "shader" | "template" | "photo" | "automation" | "data" | "proof";
  shaderId?: number;
  fileUrl?: string;
  imageUrl?: string;
  externalUrl?: string;
  xlsxUrl?: string;
  initialLikes: number;
  initialOrders: number;
};

// ============================================================================
// MAIN SHOWCASE PAGE (/templates)
// ============================================================================
export default function ShaderTemplatesPage() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [typedText, setTypedText] = useState("");
  const [filter, setFilter] = useState<
    "all" | "shader" | "template" | "photo" | "automation" | "data" | "proof"
  >("all");
  const [isProtectedShield, setIsProtectedShield] = useState(false);

  const [touchedCardId, setTouchedCardId] = useState<string | null>(null);

  const [likesMap, setLikesMap] = useState<Record<string, number>>({});
  const [sessionLikedMap, setSessionLikedMap] = useState<Record<string, boolean>>({});

  const allItems: ShowcaseItem[] = [
    // --- 5 ORIGINAL SHADERS ---
    {
      id: "shader-1",
      title: "01. Quantum Particle Sphere",
      shortLine: "Interactive 3D dot-matrix sphere with live cursor physics.",
      type: "shader",
      shaderId: 1,
      initialLikes: 24,
      initialOrders: 4,
    },
    {
      id: "shader-2",
      title: "02. Neural Constellation Mesh",
      shortLine: "Magnetic laser node network built for modern tech brands.",
      type: "shader",
      shaderId: 2,
      initialLikes: 19,
      initialOrders: 0,
    },
    {
      id: "shader-3",
      title: "03. Aurora Liquid Silk Waves",
      shortLine: "Smooth flowing neon harmonic ribbons with cursor tilt.",
      type: "shader",
      shaderId: 3,
      initialLikes: 15,
      initialOrders: 2,
    },
    {
      id: "shader-4",
      title: "04. Hyperspace Orbital Vortex",
      shortLine: "Deep-space orbital particle field that tracks your cursor.",
      type: "shader",
      shaderId: 4,
      initialLikes: 28,
      initialOrders: 5,
    },
    {
      id: "shader-5",
      title: "05. Kinetic Cyber-Grid Terrain",
      shortLine: "3D wireframe wave matrix with real-time gravity ripples.",
      type: "shader",
      shaderId: 5,
      initialLikes: 21,
      initialOrders: 0,
    },

    // --- 18 HTML TEMPLATES ---
    {
      id: "tpl-pricing",
      title: "06. Pricing Table",
      shortLine: "High-converting modern SaaS pricing table with interactive tiers.",
      type: "template",
      fileUrl: "/templates/section-pricing.html",
      initialLikes: 11,
      initialOrders: 2,
    },
    {
      id: "tpl-sec-01",
      title: "07. Contact Ring",
      shortLine: "Interactive 3D orbital ring contact experience for modern agencies.",
      type: "template",
      fileUrl: "/templates/section-01.htm",
      initialLikes: 16,
      initialOrders: 0,
    },
    {
      id: "tpl-sec-02",
      title: "08. Service Bento Grid",
      shortLine: "Modular bento-style service showcase with sleek micro-interactions.",
      type: "template",
      fileUrl: "/templates/section-02.htm",
      initialLikes: 23,
      initialOrders: 3,
    },
    {
      id: "tpl-sec-03",
      title: "09. Smarter Systems — Revenue Analytics",
      shortLine: "Real-time revenue intelligence and automated system analytics UI.",
      type: "template",
      fileUrl: "/templates/section-03.htm",
      initialLikes: 14,
      initialOrders: 0,
    },
    {
      id: "tpl-sec-04",
      title: "10. Quenroth Footer",
      shortLine: "Architectural luxury footer layout with bold typography & links.",
      type: "template",
      fileUrl: "/templates/section-04.htm",
      initialLikes: 7,
      initialOrders: 0,
    },
    {
      id: "tpl-sec-05",
      title: "11. Bramlow Contact Column",
      shortLine: "Clean multi-column enterprise contact & inquiry interface.",
      type: "template",
      fileUrl: "/templates/section-05.htm",
      initialLikes: 9,
      initialOrders: 1,
    },
    {
      id: "tpl-sec-06",
      title: "12. Virenhold Green CTA",
      shortLine: "High-impact conversion call-to-action section with emerald glow.",
      type: "template",
      fileUrl: "/templates/section-06.htm",
      initialLikes: 12,
      initialOrders: 0,
    },
    {
      id: "tpl-sec-07",
      title: "13. Safari & Travel Booking",
      shortLine: "Immersive luxury expedition & safari booking platform interface.",
      type: "template",
      fileUrl: "/templates/section-07.htm",
      initialLikes: 18,
      initialOrders: 3,
    },
    {
      id: "tpl-sec-08",
      title: "14. Ledger Bento — Money Ops",
      shortLine: "Financial operations bento grid for modern treasury & fintech.",
      type: "template",
      fileUrl: "/templates/section-08.htm",
      initialLikes: 22,
      initialOrders: 4,
    },
    {
      id: "tpl-ui-01",
      title: "15. Property Portfolio Dashboard",
      shortLine: "Executive real-estate asset management & analytics dashboard.",
      type: "template",
      fileUrl: "/templates/ui-ux-01.html",
      initialLikes: 26,
      initialOrders: 5,
    },
    {
      id: "tpl-ui-02",
      title: "16. Project Roadmap & Metrics Bento",
      shortLine: "Product sprint velocity, KPI metrics, and interactive timeline bento.",
      type: "template",
      fileUrl: "/templates/ui-ux-02.html",
      initialLikes: 17,
      initialOrders: 2,
    },
    {
      id: "tpl-ui-03",
      title: "17. People Directory — Hello Valentina",
      shortLine: "Modern HR team directory and member profile management interface.",
      type: "template",
      fileUrl: "/templates/ui-ux-03.html",
      initialLikes: 8,
      initialOrders: 0,
    },
    {
      id: "tpl-ui-04",
      title: "18. Health Tracker — Statistics Dashboard",
      shortLine: "Biometric vitals, wellness analytics, and activity tracking UI.",
      type: "template",
      fileUrl: "/templates/ui-ux-04.html",
      initialLikes: 15,
      initialOrders: 1,
    },
    {
      id: "tpl-ui-05",
      title: "19. Commerce — Sales Overview Dashboard",
      shortLine: "E-commerce revenue, order funnel, and live inventory dashboard.",
      type: "template",
      fileUrl: "/templates/ui-ux-05.html",
      initialLikes: 27,
      initialOrders: 4,
    },
    {
      id: "tpl-ui-06",
      title: "20. Dark Wallet — 3D Finance Dashboard",
      shortLine: "Next-gen 3D crypto & dark-mode wealth management command center.",
      type: "template",
      fileUrl: "/templates/ui-ux-06.html",
      initialLikes: 29,
      initialOrders: 6,
    },
    {
      id: "tpl-ui-07",
      title: "21. Workspace Hub — 3D Premium Dashboard",
      shortLine: "Spatial 3D productivity hub and unified team workspace.",
      type: "template",
      fileUrl: "/templates/ui-ux-07.html",
      initialLikes: 20,
      initialOrders: 0,
    },
    {
      id: "tpl-ui-08",
      title: "22. Client Desk — 3D Interactive Dashboard",
      shortLine: "Interactive 3D agency client portal and workflow management desk.",
      type: "template",
      fileUrl: "/templates/ui-ux-08.html",
      initialLikes: 25,
      initialOrders: 3,
    },
    {
      id: "tpl-ui-09",
      title: "23. AURA Grand Hotel — 3D Luxury Dashboard",
      shortLine: "Bespoke 3D hospitality suite and luxury resort booking experience.",
      type: "template",
      fileUrl: "/templates/ui-ux-09.html",
      initialLikes: 30,
      initialOrders: 6,
    },

    // --- 9 MOBILE APP & UI DESIGN PHOTOS ---
    {
      id: "photo-mobile-01",
      title: "24. NeoWallet — Dark Banking App UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-01.jpg",
      initialLikes: 18,
      initialOrders: 3,
    },
    {
      id: "photo-mobile-02",
      title: "25. Pink Pocket — Savings & Invest App UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-02.jpg",
      initialLikes: 11,
      initialOrders: 1,
    },
    {
      id: "photo-mobile-03",
      title: "26. StayExplore — Resort & Hotel Booking UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-03.jpg",
      initialLikes: 14,
      initialOrders: 0,
    },
    {
      id: "photo-mobile-04",
      title: "27. LuxeTrip — Emerald Travel & Villa App UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-04.jpg",
      initialLikes: 21,
      initialOrders: 2,
    },
    {
      id: "photo-mobile-05",
      title: "28. TaskFlow — Productivity & KPI Tracker UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-05.jpg",
      initialLikes: 9,
      initialOrders: 0,
    },
    {
      id: "photo-mobile-06",
      title: "29. PayGlow — Neon Fintech & Bill App UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-06.jpg",
      initialLikes: 24,
      initialOrders: 4,
    },
    {
      id: "photo-mobile-07",
      title: "30. CraveBite — Food Delivery & Restaurant UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-07.jpg",
      initialLikes: 16,
      initialOrders: 0,
    },
    {
      id: "photo-mobile-08",
      title: "31. Wardiere Bakery — Sweet Shop App UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-08.jpg",
      initialLikes: 7,
      initialOrders: 1,
    },
    {
      id: "photo-mobile-09",
      title: "32. FitPulse — HIIT Workout & Gym App UI",
      shortLine: "Premium & Professional UI Design",
      type: "photo",
      imageUrl: "/templates/mobile-ui-09.jpg",
      initialLikes: 19,
      initialOrders: 2,
    },

    // --- 10 PROTECTED AUTOMATION & DATA ANALYSIS PHOTOS (/utomation1.png to /utomation10.png) ---
    {
      id: "auto-photo-01",
      title: "33. Executive Sales & KPI Automation #01",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation1.png",
      initialLikes: 22,
      initialOrders: 4,
    },
    {
      id: "auto-photo-02",
      title: "34. Automated Revenue & Profit Tracker #02",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation2.png",
      initialLikes: 19,
      initialOrders: 3,
    },
    {
      id: "auto-photo-03",
      title: "35. Power Query ETL & Data Model #03",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation3.png",
      initialLikes: 16,
      initialOrders: 2,
    },
    {
      id: "auto-photo-04",
      title: "36. Business Intelligence Analytics View #04",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation4.png",
      initialLikes: 25,
      initialOrders: 5,
    },
    {
      id: "auto-photo-05",
      title: "37. Financial P&L & Forecasting Sheet #05",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation5.png",
      initialLikes: 18,
      initialOrders: 2,
    },
    {
      id: "auto-photo-06",
      title: "38. Inventory & Supply Chain Automation #06",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation6.png",
      initialLikes: 14,
      initialOrders: 1,
    },
    {
      id: "auto-photo-07",
      title: "39. Customer Retention & Funnel Metrics #07",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation7.png",
      initialLikes: 21,
      initialOrders: 3,
    },
    {
      id: "auto-photo-08",
      title: "40. Master Enterprise Reporting Suite #08",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation8.png",
      initialLikes: 27,
      initialOrders: 6,
    },
    {
      id: "auto-photo-09",
      title: "41. Automated MIS & Variance Dashboard #09",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation9.png",
      initialLikes: 20,
      initialOrders: 3,
    },
    {
      id: "auto-photo-10",
      title: "42. Dynamic Excel & BI Command Center #10",
      shortLine: "Protected Data & Automation Dashboard — Download Disabled",
      type: "data",
      imageUrl: "/utomation10.png",
      initialLikes: 24,
      initialOrders: 5,
    },

    // --- PROOF OF WORK: 4 LIVE DEPLOYED APPS & GITHUB + 4 EXCEL AUTOMATION FILES ---
    {
      id: "proof-live-savora",
      title: "Savora Restaurant — Live Fullstack Web App",
      shortLine: "Verified Live Deployment • savora-restaurant-psi.vercel.app",
      type: "proof",
      externalUrl: "https://savora-restaurant-psi.vercel.app/",
      initialLikes: 32,
      initialOrders: 5,
    },
    {
      id: "proof-live-nexa",
      title: "Nexa Financial Platform — Live Fintech SaaS",
      shortLine: "Verified Live Deployment • nexa-financial-platform.vercel.app",
      type: "proof",
      externalUrl: "https://nexa-financial-platform.vercel.app/",
      initialLikes: 35,
      initialOrders: 6,
    },
    {
      id: "proof-live-salesflow",
      title: "SalesFlow — Live BI & Revenue Platform",
      shortLine: "Verified Live Deployment • salesflow-tawny.vercel.app",
      type: "proof",
      externalUrl: "https://salesflow-tawny.vercel.app/",
      initialLikes: 29,
      initialOrders: 4,
    },
    {
      id: "proof-live-github",
      title: "Sipten Labs — Official GitHub Repositories",
      shortLine: "Verified Open-Source & Production Code • github.com/sipten-labs",
      type: "proof",
      externalUrl: "https://github.com/sipten-labs",
      initialLikes: 41,
      initialOrders: 0,
    },
    {
      id: "proof-xlsx-01",
      title: "Automation Proof #01 — Master Data Workbook (data1.xlsx)",
      shortLine: "Verified Excel & Power Query Automation Proof File",
      type: "proof",
      xlsxUrl: "/data1.xlsx",
      imageUrl: "/utomation1.png",
      initialLikes: 24,
      initialOrders: 4,
    },
    {
      id: "proof-xlsx-02",
      title: "Automation Proof #02 — Sales Analytics Model (data2.xlsx)",
      shortLine: "Verified Excel & Power Query Automation Proof File",
      type: "proof",
      xlsxUrl: "/data2.xlsx",
      imageUrl: "/utomation2.png",
      initialLikes: 19,
      initialOrders: 3,
    },
    {
      id: "proof-xlsx-03",
      title: "Automation Proof #03 — Macro-Enabled Bot (data3.xlsm)",
      shortLine: "Verified Excel VBA Macro & Automation Proof File",
      type: "proof",
      xlsxUrl: "/data3.xlsm",
      imageUrl: "/utomation3.png",
      initialLikes: 23,
      initialOrders: 4,
    },
    {
      id: "proof-xlsx-04",
      title: "Automation Proof #04 — Automated Reporting (data4.xlsx)",
      shortLine: "Verified Excel & Power Query Automation Proof File",
      type: "proof",
      xlsxUrl: "/data4.xlsx",
      imageUrl: "/utomation4.png",
      initialLikes: 21,
      initialOrders: 3,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      try {
        const savedLikes = localStorage.getItem("sipten_template_likes_v2");
        if (savedLikes) setLikesMap(JSON.parse(savedLikes));
      } catch {}

      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (
        tabParam === "automation" ||
        tabParam === "data" ||
        tabParam === "proof" ||
        tabParam === "shader" ||
        tabParam === "template" ||
        tabParam === "photo"
      ) {
        setFilter(tabParam);
      }

      const previewId = params.get("preview");
      if (previewId) {
        const found = allItems.find((i) => i.id === previewId);
        if (found) setActiveItem(found);
      }
    }
  }, []);

  const handleLikeClick = (e: React.MouseEvent, item: ShowcaseItem) => {
    e.stopPropagation();
    if (sessionLikedMap[item.id]) return;

    const currentCount = likesMap[item.id] ?? item.initialLikes;
    const nextCount = currentCount + 1;

    const updatedLikes = { ...likesMap, [item.id]: nextCount };
    setLikesMap(updatedLikes);
    setSessionLikedMap((prev) => ({ ...prev, [item.id]: true }));

    try {
      localStorage.setItem("sipten_template_likes_v2", JSON.stringify(updatedLikes));
    } catch {}
  };

  // ==========================================================================
  // DEEP IFRAME LOCK + INSTANT 0ms SCREENSHOT & DOWNLOAD BLACKOUT SHIELD
  // ==========================================================================
  const lockIframeContent = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const iframe = e.currentTarget;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc) return;

      const style = doc.createElement("style");
      style.innerHTML = `
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-user-drag: none !important;
        }
        img, svg, canvas, video {
          pointer-events: none !important;
        }
      `;
      doc.head?.appendChild(style);

      doc.addEventListener("contextmenu", (ev) => ev.preventDefault());
      doc.addEventListener("copy", (ev) => ev.preventDefault());
      doc.addEventListener("cut", (ev) => ev.preventDefault());
      doc.addEventListener("selectstart", (ev) => ev.preventDefault());
      doc.addEventListener("dragstart", (ev) => ev.preventDefault());
      doc.addEventListener("keydown", (ev) => {
        if (
          ev.key === "PrintScreen" ||
          ev.key === "F12" ||
          ev.key === "Meta" ||
          ev.key === "Alt" ||
          ev.ctrlKey ||
          ev.metaKey
        ) {
          ev.preventDefault();
          setIsProtectedShield(true);
        }
      });
    } catch {}
  };

  useEffect(() => {
    const preventDefaultAll = (e: Event) => e.preventDefault();

    const triggerInstantShield = () => {
      setIsProtectedShield(true);
      try {
        navigator.clipboard.writeText("");
      } catch {}
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "PrintScreen" ||
        e.key === "F12" ||
        e.key === "Meta" ||
        e.key === "OS" ||
        (e.ctrlKey && ["c", "u", "s", "p", "a", "x"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey && e.shiftKey) ||
        (e.metaKey && e.shiftKey) ||
        (e.altKey && e.key === "PrintScreen")
      ) {
        e.preventDefault();
        triggerInstantShield();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen" || e.key === "Meta" || e.key === "OS") {
        triggerInstantShield();
        setTimeout(() => setIsProtectedShield(false), 1800);
      }
    };

    const handleBlur = () => setIsProtectedShield(true);
    const handleFocus = () => setIsProtectedShield(false);
    const handleVisibility = () => {
      if (document.hidden) setIsProtectedShield(true);
    };

    document.addEventListener("contextmenu", preventDefaultAll);
    document.addEventListener("copy", preventDefaultAll);
    document.addEventListener("cut", preventDefaultAll);
    document.addEventListener("selectstart", preventDefaultAll);
    document.addEventListener("dragstart", preventDefaultAll);
    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("contextmenu", preventDefaultAll);
      document.removeEventListener("copy", preventDefaultAll);
      document.removeEventListener("cut", preventDefaultAll);
      document.removeEventListener("selectstart", preventDefaultAll);
      document.removeEventListener("dragstart", preventDefaultAll);
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("keyup", handleKeyUp, true);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const displayedItems = allItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "automation" || filter === "data") return item.type === "data";
    return item.type === filter;
  });

  useEffect(() => {
    if (!activeItem || activeItem.type === "photo" || activeItem.type === "data") {
      setTypedText("");
      return;
    }
    let idx = 0;
    setTypedText("");
    const timer = setInterval(() => {
      idx += 1;
      setTypedText(activeItem.shortLine.slice(0, idx));
      if (idx >= activeItem.shortLine.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [activeItem]);

  const openPreview = (item: ShowcaseItem) => {
    if (item.externalUrl === "https://github.com/sipten-labs") {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveItem(item);
    setViewMode("desktop");
  };

  const handleOrderItem = async (item: ShowcaseItem) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const directPreviewUrl = `${origin}/templates?preview=${item.id}`;
    const rawFileUrl = item.imageUrl
      ? `${origin}${item.imageUrl}`
      : item.fileUrl
      ? `${origin}${item.fileUrl}`
      : item.externalUrl
      ? item.externalUrl
      : directPreviewUrl;

    const autoOrderMessage = `Hello Sipten, I want to order this design:\n\nSelected Design: ${item.title}\nDirect Preview Link: ${directPreviewUrl}\nAsset Reference: ${rawFileUrl}`;

    sessionStorage.setItem("sipten_order_message", autoOrderMessage);
    sessionStorage.setItem("sipten_selected_design", item.title);
    sessionStorage.setItem("sipten_selected_photo_url", rawFileUrl);
    sessionStorage.setItem("sipten_jump_to_contact", "true");

    router.push("/");
  };

  const filterDock = [
    { key: "all", icon: Layers, label: `All (${allItems.length})` },
    { key: "shader", icon: Cpu, label: "3D Shaders (5)" },
    { key: "template", icon: LayoutGrid, label: "Web Templates (18)" },
    { key: "photo", icon: ImageIcon, label: "App UI (9)" },
    { key: "automation", icon: Workflow, label: "Automations (10)" },
    { key: "data", icon: BarChart3, label: "Data Analysis (10)" },
    { key: "proof", icon: BadgeCheck, label: "Proof of Work (8)" },
  ] as const;

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      className="min-h-screen bg-[#03060f] text-slate-100 px-4 sm:px-8 md:px-14 py-8 select-none relative"
    >
      {/* 0ms INSTANT BLACKOUT SCREENSHOT & DOWNLOAD SHIELD OVERLAY */}
      {isProtectedShield && (
        <div
          onClick={() => setIsProtectedShield(false)}
          className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center gap-3 text-center p-6 cursor-pointer"
        >
          <Lock className="w-10 h-10 text-cyan-400 animate-pulse" />
          <p className="text-sm font-bold text-white tracking-wider uppercase">
            Protected Preview — Screenshot & Image Download Disabled
          </p>
          <span className="text-xs text-slate-400">
            Click anywhere on the screen to resume viewing.
          </span>
        </div>
      )}

      {/* Minimal Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between pb-6 border-b border-slate-800/70">
        <Link
          href="/"
          className="px-4 py-2 rounded-xl bg-[#0b1329] hover:bg-[#121f42] text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold tracking-wider uppercase text-slate-300">
            Sipten Live Shader, Data & Proof Studio
          </span>
        </div>
      </div>

      {/* Heading + ULTRA-PREMIUM ICON-ONLY GLASS DOCK FILTER */}
      <div className="max-w-4xl mx-auto text-center my-9 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-purple-300 tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]">
            {filter === "automation"
              ? "Protected Automation Dashboards"
              : filter === "data"
              ? "Data Analysis & BI Dashboards"
              : filter === "proof"
              ? "Verified Proof of Work (Live Apps & Excel Models)"
              : "Interactive 3D Shaders, Templates, Data & Proof"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            {filter === "proof"
              ? "Test live deployed Vercel applications, inspect GitHub code, or verify Excel (.xlsx / .xlsm) automation files."
              : "All photos & templates are download-protected. Click any item to preview full-screen and order."}
          </p>
        </div>

        {/* Luxury Icon-Only Filter Dock */}
        <div className="inline-flex flex-wrap items-center justify-center bg-[#060b18]/90 backdrop-blur-xl p-2 rounded-2xl border border-slate-800/90 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(34,211,238,0.12)] gap-2.5">
          {filterDock.map((tab) => {
            const IconComp = tab.icon;
            const isActive = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                aria-label={tab.label}
                className={`group relative w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-linear-to-br from-cyan-400 via-cyan-500 to-blue-600 text-white shadow-[0_0_22px_rgba(34,211,238,0.55)] scale-105"
                    : "bg-[#0b1328]/80 text-slate-400 hover:text-cyan-300 hover:bg-[#111d3b] border border-slate-800/80 hover:scale-105"
                }`}
              >
                <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

                {isActive && (
                  <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee]" />
                )}

                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#0a1226] border border-cyan-500/30 text-[10px] font-bold text-cyan-200 whitespace-nowrap opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 shadow-lg z-30">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-16">
        {displayedItems.map((item) => {
          const likeCount = likesMap[item.id] ?? item.initialLikes;
          const isLikedThisSession = !!sessionLikedMap[item.id];
          const isTouchActive = touchedCardId === item.id;

          return (
            <div
              key={item.id}
              onTouchStart={() => setTouchedCardId(item.id)}
              className="group rounded-3xl bg-[#070b18] border border-slate-800/90 hover:border-cyan-400/60 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Card Viewport (100% Protected from Image Downloading!) */}
              <div
                onClick={() => openPreview(item)}
                className="h-80 relative bg-[#020308] overflow-hidden cursor-pointer flex items-center justify-center"
              >
                {item.type === "shader" && item.shaderId ? (
                  <CleanShaderCanvas shaderId={item.shaderId} />
                ) : item.type === "template" && item.fileUrl ? (
                  <div className="w-360 h-257.5 origin-top-left scale-[0.28] sm:scale-[0.31] pointer-events-none select-none overflow-hidden bg-[#020308] absolute top-0 left-0">
                    <iframe
                      src={item.fileUrl}
                      title={item.title}
                      onLoad={lockIframeContent}
                      className="w-full h-full border-0 pointer-events-none select-none"
                      loading="lazy"
                    />
                  </div>
                ) : (item.type === "photo" || item.type === "data") && item.imageUrl ? (
                  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt=""
                      draggable={false}
                      className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-45 pointer-events-none select-none"
                    />
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      draggable={false}
                      className={`relative z-10 w-full h-full pointer-events-none select-none ${
                        item.type === "data"
                          ? "object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                          : "object-cover object-top group-hover:object-bottom transition-all duration-3500 ease-in-out"
                      }`}
                    />
                  </div>
                ) : item.type === "proof" && item.externalUrl ? (
                  item.externalUrl.includes("github.com") ? (
                    <div className="w-full h-full bg-linear-to-br from-[#0b132b] via-[#060a17] to-[#111c38] p-6 flex flex-col items-center justify-center text-center space-y-3">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                        <Globe className="w-8 h-8" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-bold text-emerald-300">
                        ✓ Verified GitHub Profile
                      </span>
                      <h3 className="text-base font-black text-white">github.com/sipten-labs</h3>
                      <p className="text-xs text-slate-400 max-w-xs">
                        Click to inspect live source code, Next.js repositories & fullstack projects.
                      </p>
                    </div>
                  ) : (
                    <div className="w-360 h-257.5 origin-top-left scale-[0.28] sm:scale-[0.31] pointer-events-none select-none overflow-hidden bg-[#020308] absolute top-0 left-0">
                      <iframe
                        src={item.externalUrl}
                        title={item.title}
                        className="w-full h-full border-0 pointer-events-none select-none"
                        loading="lazy"
                      />
                    </div>
                  )
                ) : (
                  item.type === "proof" &&
                  item.xlsxUrl && (
                    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center bg-linear-to-br from-[#061814] via-[#050d1a] to-[#0a192f] p-5 text-center">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          alt=""
                          draggable={false}
                          className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none select-none"
                        />
                      )}
                      <div className="relative z-10 flex flex-col items-center space-y-2.5 bg-black/55 backdrop-blur-sm p-4 rounded-2xl border border-emerald-500/30">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                          <FileSpreadsheet className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[10px] font-mono font-bold text-emerald-300">
                          VERIFIED EXCEL PROOF FILE
                        </span>
                        <p className="text-xs font-bold text-white max-w-57.5">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )
                )}

                {/* Invisible Protection Shield on Card */}
                <div className="absolute inset-0 z-15 bg-transparent" />

                {/* Top Overlay Badge */}
                <div
                  className={`absolute top-3 right-3 bg-black/75 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] text-cyan-300 flex items-center gap-1.5 z-20 transition-all duration-300 ${
                    isTouchActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  <Lock className="w-3 h-3 text-cyan-400" />
                  {item.type === "proof"
                    ? "Verified Proof"
                    : item.type === "data"
                    ? "Protected Photo"
                    : "Live"}
                </div>

                {/* Bottom Hover Caption Inside Viewport */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 p-3 bg-linear-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between text-[11px] font-semibold text-cyan-300 transition-all duration-300 pointer-events-none ${
                    isTouchActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    {item.type === "data"
                      ? "Protected Automation View"
                      : "Premium & Verified Work"}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    • Click to Preview
                  </span>
                </div>
              </div>

              {/* Card Bottom Bar */}
              <div className="p-4 sm:p-5 bg-[#080d1d] border-t border-slate-800/80 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-extrabold text-white truncate">
                    {item.title}
                  </h2>

                  <div className="flex items-center gap-2 shrink-0">
                    {item.externalUrl ? (
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold border border-emerald-500/40 flex items-center gap-1.5 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Site
                      </a>
                    ) : item.xlsxUrl ? (
                      <a
                        href={item.xlsxUrl}
                        download
                        className="px-3 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold border border-emerald-500/40 flex items-center gap-1.5 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" /> Excel File
                      </a>
                    ) : null}

                    <button
                      onClick={() => openPreview(item)}
                      className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" /> Preview
                    </button>

                    <button
                      onClick={() => handleOrderItem(item)}
                      className="px-3.5 py-1.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5 cursor-pointer transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Order
                    </button>
                  </div>
                </div>

                {/* Row 2: Like Button + Ordered Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs">
                  <button
                    onClick={(e) => handleLikeClick(e, item)}
                    className={`px-2.5 py-1 rounded-lg border flex items-center gap-1.5 font-bold transition-all ${
                      isLikedThisSession
                        ? "bg-rose-500/15 border-rose-500/40 text-rose-400 cursor-default"
                        : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-rose-500/40 hover:text-rose-300 cursor-pointer active:scale-95"
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-transform ${
                        isLikedThisSession
                          ? "fill-rose-500 text-rose-500 scale-110"
                          : "text-rose-400"
                      }`}
                    />
                    <span>{likeCount}</span>
                  </button>

                  {item.initialOrders > 0 && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-300/90">
                      <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      {item.initialOrders} Ordered
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =====================================================================
          CLEAN POPUP MODAL (100% PROTECTED PHOTO VIEWPORT + LIVE PROOF VIEW)
      ===================================================================== */}
      {activeItem && (
        <div
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full bg-[#070c1a] border border-slate-800 rounded-3xl overflow-hidden shadow-[0_0_90px_rgba(0,0,0,0.95)] flex flex-col max-h-[94vh] ${
              activeItem.type === "photo" ? "max-w-md" : "max-w-6xl"
            }`}
          >
            {/* Popup Top Bar */}
            <div className="px-4 py-3 bg-[#0a1124] border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <h3 className="text-xs sm:text-sm font-extrabold text-white truncate">
                  {activeItem.title}
                </h3>
              </div>

              {activeItem.type !== "photo" && activeItem.type !== "data" && !activeItem.xlsxUrl && (
                <div className="flex items-center bg-[#050811] p-1 rounded-xl border border-slate-800 gap-1">
                  <button
                    onClick={() => setViewMode("desktop")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                      viewMode === "desktop"
                        ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" /> Desktop
                  </button>
                  <button
                    onClick={() => setViewMode("mobile")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all ${
                      viewMode === "mobile"
                        ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile View
                  </button>
                </div>
              )}

              <button
                onClick={() => setActiveItem(null)}
                className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors shrink-0"
              >
                <X className="w-4 h-4" /> Close
              </button>
            </div>

            {/* Center Viewport */}
            {activeItem.type === "photo" || activeItem.type === "data" || activeItem.xlsxUrl ? (
              <div className="flex-1 overflow-y-auto overflow-x-hidden bg-[#020308] relative flex flex-col items-center justify-center p-4">
                {activeItem.imageUrl && (
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    draggable={false}
                    className="max-w-full max-h-[72vh] w-auto h-auto object-contain rounded-xl select-none pointer-events-none"
                  />
                )}
                <div className="absolute inset-0 z-10 bg-transparent" />
              </div>
            ) : (
              <div className="h-120 sm:h-145 bg-[#020308] flex items-center justify-center p-3 overflow-hidden relative">
                <div
                  className={`h-full transition-all duration-500 overflow-hidden ${
                    viewMode === "desktop"
                      ? "w-full rounded-2xl border border-slate-800/80"
                      : "w-93.75 max-w-full rounded-[38px] border-10 border-slate-800 shadow-[0_0_50px_rgba(34,211,238,0.15)]"
                  }`}
                >
                  {activeItem.type === "shader" && activeItem.shaderId ? (
                    <CleanShaderCanvas shaderId={activeItem.shaderId} />
                  ) : activeItem.externalUrl ? (
                    <iframe
                      src={activeItem.externalUrl}
                      title={activeItem.title}
                      className="w-full h-full border-0 bg-[#020308] select-none"
                    />
                  ) : (
                    activeItem.fileUrl && (
                      <iframe
                        src={activeItem.fileUrl}
                        title={activeItem.title}
                        onLoad={lockIframeContent}
                        className="w-full h-full border-0 bg-[#020308] select-none"
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {/* Popup Bottom Bar */}
            <div className="p-4 sm:px-5 bg-[#0a1124] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => handleLikeClick(e, activeItem)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                    sessionLikedMap[activeItem.id]
                      ? "bg-rose-500/15 border-rose-500/40 text-rose-400 cursor-default"
                      : "bg-slate-900 border-slate-700 text-slate-200 hover:border-rose-500/40 cursor-pointer active:scale-95"
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      sessionLikedMap[activeItem.id]
                        ? "fill-rose-500 text-rose-500"
                        : "text-rose-400"
                    }`}
                  />
                  <span>{likesMap[activeItem.id] ?? activeItem.initialLikes}</span>
                </button>

                {activeItem.initialOrders > 0 && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-amber-300/90">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    {activeItem.initialOrders} Ordered
                  </span>
                )}
              </div>

              {activeItem.type !== "photo" && activeItem.type !== "data" && (
                <div className="hidden md:flex items-center">
                  <p className="text-xs font-semibold text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-blue-300">
                    {typedText}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                {activeItem.externalUrl && (
                  <a
                    href={activeItem.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold border border-emerald-500/40 flex items-center gap-1.5 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Open Live URL
                  </a>
                )}

                {activeItem.xlsxUrl && (
                  <a
                    href={activeItem.xlsxUrl}
                    download
                    className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-950 text-xs font-bold border border-emerald-500/40 flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Excel Proof
                  </a>
                )}

                <button
                  onClick={() => handleOrderItem(activeItem)}
                  className="px-6 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(6,182,212,0.45)] flex items-center gap-2 cursor-pointer transition-all shrink-0"
                >
                  <ShoppingBag className="w-4 h-4" /> Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}