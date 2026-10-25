"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Home,
  User,
  Wrench,
  FolderGit2,
  Briefcase,
  Mail,
  Sun,
  Moon,
  Sparkles,
  Code2,
  Layers,
  BarChart3,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUp,
  Palette,
  Star,
  Send,
  Users,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Wand2,
  GraduationCap,
  Eye,
  X,
  Award,
  Loader2,
  FileText,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  LayoutGrid
} from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// ============================================================================
// CUSTOM 3D NEON "SIPTEN LABS" RIBBON LOGO & FUTURISTIC BRAND HEADER
// ============================================================================
function SiptenLabsLogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dimensions =
    size === "sm" ? "w-10 h-10" : size === "lg" ? "w-14 h-14" : "w-12 h-12";

  return (
    <div
      className={`relative ${dimensions} rounded-full flex items-center justify-center shrink-0 select-none group-hover:scale-105 transition-transform duration-300`}
    >
      {/* Outer Ambient Neon Aura */}
      <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-400/35 via-blue-500/25 to-purple-500/40 blur-md group-hover:blur-lg transition-all" />

      <svg
        viewBox="0 0 120 120"
        className="w-full h-full relative z-10 overflow-visible drop-shadow-[0_0_12px_rgba(56,189,248,0.45)]"
      >
        <defs>
          <linearGradient id="siptenRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>

          <linearGradient id="sTopRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="45%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>

          <linearGradient id="sMidRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>

          <linearGradient id="sBotRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="45%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r="54" fill="#040711" />

        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#siptenRingGrad)"
          strokeWidth="3.2"
        />

        <circle
          cx="60"
          cy="60"
          r="49"
          fill="none"
          stroke="url(#siptenRingGrad)"
          strokeWidth="0.7"
          strokeOpacity="0.4"
        />

        <circle cx="98" cy="22" r="2.2" fill="#f0abfc" />

        <path
          d="M 33 43 L 78 17 L 78 35 L 44 54 C 36 58, 30 50, 33 43 Z"
          fill="url(#sTopRibbon)"
          stroke="#a5f3fc"
          strokeWidth="0.8"
        />

        <path
          d="M 86 73 L 40 99 L 55 104 L 88 85 C 92 81, 90 75, 86 73 Z"
          fill="url(#sBotRibbon)"
          stroke="#f5d0fe"
          strokeWidth="0.8"
        />

        <path
          d="M 33 43 C 29 51, 35 58, 46 62 L 82 75 C 90 78, 90 85, 84 88 L 72 79 C 77 77, 75 72, 68 69 L 36 57 C 28 53, 29 46, 33 43 Z"
          fill="url(#sMidRibbon)"
          stroke="#7dd3fc"
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
}

function SiptenLabsWordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col select-none">
      <div className="flex items-center tracking-[0.14em] font-black text-white leading-none">
        <span className={compact ? "text-base" : "text-lg"}>SIPT</span>
        <span
          className={`inline-flex flex-col justify-between mx-0.5 ${
            compact ? "w-3 h-3.5" : "w-3.5 h-4"
          }`}
        >
          <span className="w-full h-[2.5px] bg-white rounded-full" />
          <span className="w-[85%] h-[2.5px] bg-linear-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_#22d3ee]" />
          <span className="w-full h-[2.5px] bg-white rounded-full" />
        </span>
        <span className={`${compact ? "text-base" : "text-lg"} ml-0.5`}>N</span>
      </div>

      <div className="flex items-center gap-1.5 mt-1">
        <span className="h-[1.5px] w-3 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
        <span
          className={`${
            compact ? "text-[8px]" : "text-[9px]"
          } font-extrabold tracking-[0.38em] text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 leading-none`}
        >
          LABS
        </span>
        <span className="h-[1.5px] w-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
      </div>

      {!compact && (
        <span className="text-[7.5px] font-mono tracking-[0.16em] text-slate-400 uppercase mt-1">
          IDEAS × CODE × SOLUTIONS
        </span>
      )}
    </div>
  );
}

const GMAIL_DIRECT_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=siptenfreelance@gmail.com&su=Project%20Inquiry%20for%20Sipten%20Raja";

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

function ScrollTypeHeading({
  tag,
  text,
  sub,
}: {
  tag: string;
  text: string;
  sub?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <div ref={ref} className="group cursor-default inline-block">
      <div className="flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
        <span className="text-xs font-mono text-cyan-400 tracking-wider group-hover:text-cyan-300 transition-colors">
          {tag}
        </span>
      </div>
      <h2 className="heading-glow text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-blue-300 drop-shadow-[0_0_18px_rgba(34,211,238,0.3)] group-hover:from-cyan-300 group-hover:via-white group-hover:to-purple-300 group-hover:drop-shadow-[0_0_32px_rgba(34,211,238,0.85)] transition-all duration-300 mt-1 min-h-9.5 flex items-center">
        {typed}
        {typed.length < text.length && (
          <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
        )}
      </h2>
      {sub && (
        <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors mt-1">
          {sub}
        </p>
      )}
    </div>
  );
}

interface JourneyCertItem {
  year: string;
  title: string;
  sub: string;
  badge: string;
  progress: number;
  metricTitle: string;
  details: string;
  skillsUnlocked: string[];
  certImage: string;
}

interface CommentItem {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

// 7 REALISTIC CLIENT REVIEWS
const INITIAL_CLIENT_COMMENTS: CommentItem[] = [
  {
    name: "Marcus Vance",
    role: "Founder • FinTech SaaS",
    text: "Working with Sipten on our SaaS dashboard was a game-changer. He showed a free initial demo first, and the final Next.js build was super fast and clean!",
    rating: 5,
    date: "Verified Client",
  },
  {
    name: "Rohit Sharma",
    role: "Operations Head • Retail Group",
    text: "Hamara weekly Excel aur Power Query reporting jisme 10 ghante lagte the, Sipten ne usko 1-click automation me badal diya. Bahut hi badhiya kaam!",
    rating: 5,
    date: "Verified Client",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director • Studio Lux",
    text: "The 3D WebGL shaders and Figma UI system Sipten created for our website completely transformed our brand look. Amazing full-stack & design skills.",
    rating: 5,
    date: "Verified Client",
  },
  {
    name: "Arjun Mehta",
    role: "Co-Founder • DineTech India",
    text: "Humne apna restaurant web app Sipten se banwaya. Mobile aur desktop dono par makkhan ki tarah chalta hai. Time se pehle delivery mili, thank you!",
    rating: 5,
    date: "Verified Client",
  },
  {
    name: "David K.",
    role: "E-Commerce Owner • Global",
    text: "Sipten cleaned our messy 50,000+ row dataset and built an automated Power BI & Excel P&L tracker. Communication was clear and transparent from day one.",
    rating: 5,
    date: "Verified Client",
  },
  {
    name: "Priya Nair",
    role: "Product Manager • Tech Startup",
    text: "Sipten ke sath kaam karke bahut achha laga! Pehle Figma prototype aur live demo dikhaya, aur pura full-stack web app bina kisi bug ke deliver kiya.",
    rating: 5,
    date: "Verified Client",
  },
  {
    name: "Lucas Meyer",
    role: "Agency Partner • Europe",
    text: "We regularly collaborate with Sipten Labs for complex Next.js, 3D websites, and client dashboards. Reliable, fast, and top-tier code quality every time.",
    rating: 5,
    date: "Verified Partner",
  },
];

// ALL 18 EXACT FAQS
const FAQS_DATA = [
  {
    q: "1. Why should I choose you over other developers or agencies?",
    a: "I focus on understanding your business goals before recommending a solution. Whether you need a website, a SaaS platform, a mobile app, a 3D experience, or an automation system, I aim to deliver a solution that is practical, user-friendly, scalable, and aligned with your requirements. You get direct communication, a personalized approach, and a clear understanding of what is being built.",
  },
  {
    q: "2. Can I see a demo before making a payment?",
    a: "Absolutely. I am happy to create a free initial demo so you can evaluate the design direction, user experience, and overall concept before committing to a project. We will discuss your requirements first, and I will clarify what the free demo includes. Full development begins after you approve the proposal and agree on the project terms.",
  },
  {
    q: "3. Do I need to pay if I don't like the demo?",
    a: "No payment is required for the agreed initial demo. If the demo does not meet your expectations, you are not obligated to proceed with the full project. My goal is to help you make an informed decision before investing in development. Any additional work beyond the agreed demo scope will be discussed with you in advance.",
  },
  {
    q: "4. What types of websites, applications, and software can you build?",
    a: "I can work on a wide range of digital solutions, including:\n• Full-stack websites and web applications\n• SaaS products and business software\n• Mobile application projects\n• 3D websites and interactive web experiences\n• Landing pages and portfolio websites\n• Figma UI/UX designs and interactive prototypes\n• Dashboards, reporting systems, and business tools\n• Excel automation and data-processing workflows\nThe exact scope depends on your requirements, technical constraints, and project timeline.",
  },
  {
    q: "5. How can your services help my business save time and money?",
    a: "I look for opportunities to simplify repetitive tasks, reduce manual work, improve data accuracy, and make business processes more efficient. Through Excel automation, Power Query, reporting dashboards, custom software, and AI-assisted workflows, I can help identify areas where automation may reduce operational effort. The actual savings depend on your existing process and will be assessed against your requirements.",
  },
  {
    q: "6. Do you provide Excel and advanced workflow automation services?",
    a: "Yes. My areas of focus include Advanced Excel, Excel automation, Power Query, data cleaning, data transformation, business analysis, and workflow improvement. I can help turn repetitive spreadsheet tasks into more structured and efficient processes, build reusable reporting workflows, and organize business data for better decision-making.",
  },
  {
    q: "7. Can you build a complete SaaS product, not just a landing page?",
    a: "Yes. I can work on full-stack product development, from the user interface to application functionality and backend integration. Depending on the project, this may include authentication, dashboards, databases, APIs, subscription workflows, and administrative features. I will define the required features and technical scope with you before development begins.",
  },
  {
    q: "8. Can you create a 3D website or a custom Figma UI/UX design?",
    a: "Yes. I can work on 3D website concepts, interactive visual experiences, modern landing pages, Figma UI/UX designs, wireframes, and prototypes. My approach is to balance visual quality with usability, responsiveness, and the purpose of the product rather than adding effects that do not benefit the user.",
  },
  {
    q: "9. How do you determine the price of a project?",
    a: "Every project is different. Pricing depends on its complexity, features, integrations, design requirements, timeline, and ongoing support needs. I discuss the requirements first, then provide a clear proposal outlining the scope, deliverables, timeline, and cost. There are no surprise charges for additional work that has not been discussed and approved.",
  },
  {
    q: "10. How long will it take to complete my project?",
    a: "The timeline depends on the project's size, functionality, and complexity. A simple landing page will generally require less time than a full-stack SaaS platform or a custom automation system. After understanding your requirements, I will provide an estimated timeline with clear milestones and keep you informed about progress.",
  },
  {
    q: "11. Will the website or application work on mobile, tablet, and desktop?",
    a: "Responsive design is an important part of my development approach. I aim to make websites and web applications work smoothly across common screen sizes and modern browsers. Testing requirements depend on the project, and any specific device compatibility requirements will be discussed before delivery.",
  },
  {
    q: "12. Will I own the final project and its source code?",
    a: "Ownership and handover terms will be clearly defined in the project agreement. Depending on the agreed scope, deliverables can include source code, design files, documentation, and deployment instructions. Third-party libraries, subscriptions, and licensed assets remain subject to their respective terms.",
  },
  {
    q: "13. Will you help me after the project is delivered?",
    a: "Yes. I can discuss post-delivery support, bug fixes, improvements, and future feature development as part of the project agreement. The proposal will specify what is included in the initial delivery and whether ongoing maintenance or additional support requires a separate arrangement.",
  },
  {
    q: "14. What if I don't know exactly what I need?",
    a: "That is completely fine. You can explain your business, your current challenges, or the result you want to achieve. I will help you explore possible solutions, identify essential features, and prioritize what matters most. The goal is to choose a solution that fits your needs rather than building unnecessary features.",
  },
  {
    q: "15. How will we communicate during the project?",
    a: "I believe in clear and transparent communication. We can agree on a convenient communication channel, project milestones, review points, and feedback process before work begins. You will know what is being developed, what decisions are needed from you, and what comes next.",
  },
  {
    q: "16. Can you work with my existing website, software, or Excel files?",
    a: "Yes, subject to access, compatibility, and the condition of the existing system. I can review your current setup, identify possible improvements, and discuss whether it is better to optimize the existing solution or build a new one. Any assessment requiring substantial work will be scoped separately.",
  },
  {
    q: "17. Do you provide business analysis and data analytics services?",
    a: "Yes. I can help organize business data, clean and transform datasets, analyze trends, prepare reports, and develop dashboards using suitable tools such as Excel, Power Query, Power BI, and SQL. The objective is to turn raw data into clearer information that supports business decisions.",
  },
  {
    q: "18. How do I get started with my project?",
    a: "Simply share your idea, business requirements, or current challenge through the contact form. We will discuss the objectives, key features, and expected outcome. If the project is a suitable fit, I can prepare a proposed scope and an initial demo plan so you can evaluate the direction before deciding whether to proceed.",
  },
];

export default function Portfolio() {
  const [activeNav, setActiveNav] = useState("Home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const fullRoleText = "Fullstack SaaS & App Developer | Data & Automation Specialist";
  const [typedRole, setTypedRole] = useState("");

  const [visitorCount, setVisitorCount] = useState(129);
  const [counts, setCounts] = useState({ projects: 0, tools: 0, mindset: 0 });

  const heroVideos = ["/demo.mp4", "/demo1.mp4"];
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [activeServiceIdx, setActiveServiceIdx] = useState(0);

  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    level: number;
  }>({
    name: "Overall Skills Progress",
    level: 65,
  });

  const [selectedJourneyIdx, setSelectedJourneyIdx] = useState(0);
  const [popupCert, setPopupCert] = useState<JourneyCertItem | null>(null);
  const [certZoom, setCertZoom] = useState<number>(100);

  const [selectedFaqIdx, setSelectedFaqIdx] = useState<number>(0);
  const [typedFaqAnswer, setTypedFaqAnswer] = useState("");
  const [isAnswerTyping, setIsAnswerTyping] = useState(false);
  const faqScrollRef = useRef<HTMLDivElement | null>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [mailSentStatus, setMailSentStatus] = useState<"idle" | "success" | "error">("idle");
  const messageInputRef = useRef<HTMLInputElement | null>(null);

  const [autoGuestName, setAutoGuestName] = useState("Guest #402");
  const [autoDeviceTag, setAutoDeviceTag] = useState("Verified Visitor");
  const [customAuthorName, setCustomAuthorName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>(INITIAL_CLIENT_COMMENTS);

  const handleOpenCertModal = (cert: JourneyCertItem) => {
    setCertZoom(100);
    setPopupCert(cert);
  };

  const handleAutoDownloadResume = () => {
    setActiveNav("Resume");

    const resumeSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1180" viewBox="0 0 900 1180">
      <rect width="900" height="1180" fill="#070c1b"/>
      <rect x="25" y="25" width="850" height="1130" rx="22" fill="#0b1329" stroke="#22d3ee" stroke-width="2" stroke-opacity="0.45"/>
      <rect x="25" y="25" width="850" height="175" rx="22" fill="#101f42"/>
      <text x="65" y="88" fill="#22d3ee" font-family="Arial, sans-serif" font-size="13" font-weight="bold" letter-spacing="2">SIPTEN LABS • OFFICIAL EXECUTIVE RESUME</text>
      <text x="65" y="138" fill="#ffffff" font-family="Arial, sans-serif" font-size="42" font-weight="900">SIPTEN RAJA</text>
      <text x="65" y="172" fill="#93c5fd" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Fullstack SaaS &amp; Mobile App Developer | 3D Web &amp; Figma UI | Data &amp; Excel Automation</text>
      <text x="600" y="95" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="13">Email: siptenfreelance@gmail.com</text>
      <text x="600" y="122" fill="#e2e8f0" font-family="Arial, sans-serif" font-size="13">Location: Islampur, WB, India</text>
      <text x="600" y="149" fill="#38bdf8" font-family="Arial, sans-serif" font-size="13">GitHub: github.com/sipten-labs</text>
      <text x="600" y="176" fill="#38bdf8" font-family="Arial, sans-serif" font-size="13">LinkedIn: in/sipten-raja-814a17429</text>

      <text x="65" y="248" fill="#22d3ee" font-family="Arial, sans-serif" font-size="15" font-weight="bold" letter-spacing="1.5">01 // PROFESSIONAL SUMMARY</text>
      <line x1="65" y1="260" x2="835" y2="260" stroke="#1e293b" stroke-width="2"/>
      <text x="65" y="290" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="14">Fullstack Developer, UI/UX Designer, and Data Automation Specialist building scalable SaaS platforms,</text>
      <text x="65" y="314" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="14">modern web &amp; mobile applications, interactive 3D WebGL experiences, and automated Excel / Power Query</text>
      <text x="65" y="338" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="14">&amp; Power BI workflows for global clients.</text>

      <text x="65" y="395" fill="#22d3ee" font-family="Arial, sans-serif" font-size="15" font-weight="bold" letter-spacing="1.5">02 // CORE TECHNICAL SKILLS</text>
      <line x1="65" y1="407" x2="835" y2="407" stroke="#1e293b" stroke-width="2"/>
      <rect x="65" y="425" width="770" height="45" rx="10" fill="#0f1b38"/>
      <text x="82" y="453" fill="#ffffff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Fullstack &amp; SaaS:</text>
      <text x="220" y="453" fill="#38bdf8" font-family="Arial, sans-serif" font-size="14">Next.js, React.js, TypeScript, JavaScript, Node.js, MongoDB, SQL, HTML5, CSS3, Tailwind, Git</text>

      <rect x="65" y="482" width="770" height="45" rx="10" fill="#0f1b38"/>
      <text x="82" y="510" fill="#ffffff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Data &amp; Automation:</text>
      <text x="230" y="510" fill="#34d399" font-family="Arial, sans-serif" font-size="14">Advanced MS-Excel, Power Query ETL, Power BI Dashboards, VBA Macros, Python, Data Analysis</text>

      <rect x="65" y="539" width="770" height="45" rx="10" fill="#0f1b38"/>
      <text x="82" y="567" fill="#ffffff" font-family="Arial, sans-serif" font-size="14" font-weight="bold">3D Web &amp; Design:</text>
      <text x="220" y="567" fill="#c084fc" font-family="Arial, sans-serif" font-size="14">Figma UI/UX Prototyping, Mobile App UI Systems, Three.js, Interactive 60FPS WebGL Shaders</text>

      <text x="65" y="638" fill="#22d3ee" font-family="Arial, sans-serif" font-size="15" font-weight="bold" letter-spacing="1.5">03 // LIVE PRODUCTION PROJECTS (VERIFIED PROOF OF WORK)</text>
      <line x1="65" y1="650" x2="835" y2="650" stroke="#1e293b" stroke-width="2"/>
      <text x="65" y="682" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">• Nexa Financial Platform (Fintech SaaS):</text>
      <text x="380" y="682" fill="#38bdf8" font-family="Arial, sans-serif" font-size="14">https://nexa-financial-platform.vercel.app/</text>
      <text x="65" y="715" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">• SalesFlow BI &amp; Revenue CRM App:</text>
      <text x="350" y="715" fill="#38bdf8" font-family="Arial, sans-serif" font-size="14">https://salesflow-tawny.vercel.app/</text>
      <text x="65" y="748" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">• Savora Restaurant Fullstack Web App:</text>
      <text x="365" y="748" fill="#38bdf8" font-family="Arial, sans-serif" font-size="14">https://savora-restaurant-psi.vercel.app/</text>
      <text x="65" y="781" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">• Official GitHub Codebase &amp; Studio:</text>
      <text x="355" y="781" fill="#38bdf8" font-family="Arial, sans-serif" font-size="14">https://github.com/sipten-labs</text>

      <text x="65" y="845" fill="#22d3ee" font-family="Arial, sans-serif" font-size="15" font-weight="bold" letter-spacing="1.5">04 // VERIFIED EDUCATION &amp; DIPLOMAS</text>
      <line x1="65" y1="857" x2="835" y2="857" stroke="#1e293b" stroke-width="2"/>

      <rect x="65" y="878" width="770" height="68" rx="12" fill="#0f1b38"/>
      <text x="85" y="906" fill="#ffffff" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Diploma in Computer Science &amp; Technology (DCST) — 94% Excellent Grade</text>
      <text x="85" y="930" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Rashtriya Computer Literacy Drive (RCLD Authorised Centre, Islampur) • 2025 – 2026</text>

      <rect x="65" y="960" width="770" height="62" rx="12" fill="#0f1b38"/>
      <text x="85" y="987" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">Intermediate Examination (12th Science — PCB)</text>
      <text x="85" y="1009" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Bihar School Examination Board, Patna (Project Azad H.S. Pothiya, Kishanganj) • 2025</text>

      <rect x="65" y="1036" width="770" height="62" rx="12" fill="#0f1b38"/>
      <text x="85" y="1063" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="bold">Secondary School Examination (10th Board)</text>
      <text x="85" y="1085" fill="#94a3b8" font-family="Arial, sans-serif" font-size="13">Bihar School Examination Board, Patna (Utkramit Madhyamik School Kusiyari, Kishanganj) • 2023</text>
    </svg>`;

    const blob = new Blob([resumeSvgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Sipten_Raja_Official_Resume.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }, [currentVideoIdx]);

  useEffect(() => {
    const fullAnswer = FAQS_DATA[selectedFaqIdx].a;
    let charIdx = 0;
    setTypedFaqAnswer("");
    setIsAnswerTyping(true);

    const timer = setInterval(() => {
      charIdx += 3;
      setTypedFaqAnswer(fullAnswer.slice(0, charIdx));
      if (charIdx >= fullAnswer.length) {
        setTypedFaqAnswer(fullAnswer);
        setIsAnswerTyping(false);
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [selectedFaqIdx]);

  const scrollFaqRow = (dir: "left" | "right") => {
    if (!faqScrollRef.current) return;
    const amount = dir === "left" ? -340 : 340;
    faqScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string, navName?: string) => {
    if (navName) setActiveNav(navName);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCustomNeedClick = () => {
    setActiveNav("Contact");
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        messageInputRef.current?.focus();
      }, 600);
    }
  };

  useEffect(() => {
    let index = 0;
    const typeTimer = setInterval(() => {
      index += 1;
      setTypedRole(fullRoleText.slice(0, index));
      if (index >= fullRoleText.length) clearInterval(typeTimer);
    }, 40);
    return () => clearInterval(typeTimer);
  }, []);

  useEffect(() => {
    const serviceTimer = setInterval(() => {
      setActiveServiceIdx((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(serviceTimer);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const savedTheme = localStorage.getItem("sipten_theme_mode");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }

    const jumpToContact = sessionStorage.getItem("sipten_jump_to_contact");
    const savedOrderMessage = sessionStorage.getItem("sipten_order_message");
    if (savedOrderMessage) {
      setContactMessage(savedOrderMessage);
      sessionStorage.removeItem("sipten_order_message");
    }

    if (jumpToContact) {
      sessionStorage.removeItem("sipten_jump_to_contact");
      setTimeout(() => {
        handleCustomNeedClick();
      }, 250);
    } else {
      window.scrollTo(0, 0);
      setActiveNav("Home");
    }

    const savedVisits = localStorage.getItem("sipten_portfolio_visits_v129");
    const baseVisits = savedVisits ? Math.max(129, parseInt(savedVisits, 10)) : 128;
    const nextVisits = baseVisits + 1;
    localStorage.setItem("sipten_portfolio_visits_v129", nextVisits.toString());
    setVisitorCount(nextVisits);

    const ua = navigator.userAgent;
    const browser = ua.includes("Edg")
      ? "Edge"
      : ua.includes("Chrome")
      ? "Chrome"
      : ua.includes("Firefox")
      ? "Firefox"
      : ua.includes("Safari")
      ? "Safari"
      : "Web";
    const os = ua.includes("Win")
      ? "Windows"
      : ua.includes("Mac")
      ? "macOS"
      : ua.includes("Android")
      ? "Android"
      : ua.includes("iPhone")
      ? "iOS"
      : "Device";

    let guestId = localStorage.getItem("sipten_guest_id");
    if (!guestId) {
      guestId = Math.floor(100 + Math.random() * 899).toString();
      localStorage.setItem("sipten_guest_id", guestId);
    }
    setAutoGuestName(`Guest #${guestId}`);
    setAutoDeviceTag(`${browser} • ${os}`);

    const savedComments = localStorage.getItem("sipten_client_reviews_v7");
    if (savedComments) {
      try {
        const parsed = JSON.parse(savedComments);
        if (Array.isArray(parsed) && parsed.length >= 7) {
          setComments(parsed);
        } else {
          setComments(INITIAL_CLIENT_COMMENTS);
        }
      } catch {
        setComments(INITIAL_CLIENT_COMMENTS);
      }
    } else {
      setComments(INITIAL_CLIENT_COMMENTS);
    }

    let step = 0;
    const statInterval = setInterval(() => {
      step += 2;
      if (step <= 100) {
        setCounts({
          projects: Math.min(Math.floor(step / 10), 10),
          tools: Math.min(Math.floor(step / 14), 7),
          mindset: step,
        });
      } else {
        setCounts({ projects: 10, tools: 7, mindset: 100 });
        clearInterval(statInterval);
      }
    }, 25);

    return () => clearInterval(statInterval);
  }, []);

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    try {
      localStorage.setItem("sipten_theme_mode", newTheme);
    } catch {}
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const finalName = customAuthorName.trim() || autoGuestName;

    const added: CommentItem = {
      name: finalName,
      role: autoDeviceTag,
      text: newComment.trim(),
      rating: 5,
      date: `Today, ${timeStr}`,
    };

    const updatedComments = [added, ...comments];
    setComments(updatedComments);
    localStorage.setItem("sipten_client_reviews_v7", JSON.stringify(updatedComments));

    setNewComment("");
    setCustomAuthorName("");
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const handleDirectContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;

    setIsSendingMail(true);
    setMailSentStatus("idle");

    const senderName = contactName.trim() || "Portfolio Visitor";
    const senderEmail = contactEmail.trim() || "visitor@sipten.dev";

    try {
      const response = await fetch("https://formsubmit.co/ajax/siptenfreelance@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: contactMessage.trim(),
          _subject: `New Portfolio Message from ${senderName}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setMailSentStatus("success");
        setContactName("");
        setContactEmail("");
        setContactMessage("");
      } else {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=siptenfreelance@gmail.com&su=${encodeURIComponent(
            `Message from ${senderName}`
          )}&body=${encodeURIComponent(
            `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${contactMessage}`
          )}`,
          "_blank"
        );
        setMailSentStatus("success");
      }
    } catch {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=siptenfreelance@gmail.com&su=${encodeURIComponent(
          `Message from ${senderName}`
        )}&body=${encodeURIComponent(
          `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${contactMessage}`
        )}`,
        "_blank"
      );
      setMailSentStatus("success");
    } finally {
      setIsSendingMail(false);
      setTimeout(() => setMailSentStatus("idle"), 5000);
    }
  };

  const navItems = [
    { name: "Home", icon: Home, target: "home", isResumeDownload: false },
    { name: "About", icon: User, target: "about", isResumeDownload: false },
    { name: "Skills", icon: Wrench, target: "skills", isResumeDownload: false },
    { name: "Projects", icon: FolderGit2, target: "projects", isResumeDownload: false },
    { name: "Services", icon: Briefcase, target: "services", isResumeDownload: false },
    { name: "Education & Certificates", icon: GraduationCap, target: "journey", isResumeDownload: false },
    { name: "Resume", icon: FileText, target: "resume", isResumeDownload: true },
    { name: "FAQs", icon: HelpCircle, target: "faqs", isResumeDownload: false },
    { name: "Contact", icon: Mail, target: "contact", isResumeDownload: false },
  ];

  const mobileDockItems = [
    { name: "Home", label: "Home", icon: Home, target: "home" },
    { name: "Projects", label: "Work", icon: FolderGit2, target: "projects" },
    { name: "Services", label: "Services", icon: Briefcase, target: "services" },
    { name: "Skills", label: "Skills", icon: Wrench, target: "skills" },
    { name: "Education & Certificates", label: "Certs", icon: GraduationCap, target: "journey" },
    { name: "FAQs", label: "FAQs", icon: HelpCircle, target: "faqs" },
    { name: "Contact", label: "Contact", icon: Mail, target: "contact" },
  ];

  const skills = [
    { name: "HTML", color: "text-orange-400", bg: "from-orange-500/25 to-orange-600/5", border: "border-orange-500/30", icon: "H5", level: 90 },
    { name: "CSS", color: "text-blue-400", bg: "from-blue-500/25 to-blue-600/5", border: "border-blue-500/30", icon: "C3", level: 85 },
    { name: "JavaScript", color: "text-yellow-400", bg: "from-yellow-400/25 to-amber-500/5", border: "border-yellow-400/30", icon: "JS", level: 78 },
    { name: "React", color: "text-cyan-400", bg: "from-cyan-400/25 to-blue-500/5", border: "border-cyan-400/30", icon: "⚛", level: 80 },
    { name: "Next.js", color: "text-white", bg: "from-slate-200/20 to-slate-500/5", border: "border-slate-400/30", icon: "NX", level: 75 },
    { name: "Tailwind CSS", color: "text-sky-400", bg: "from-sky-400/25 to-cyan-500/5", border: "border-sky-400/30", icon: "TW", level: 88 },
    { name: "Node.js", color: "text-emerald-400", bg: "from-emerald-500/25 to-green-600/5", border: "border-emerald-500/30", icon: "NJ", level: 68 },
    { name: "MongoDB", color: "text-green-400", bg: "from-green-500/25 to-emerald-600/5", border: "border-green-500/30", icon: "DB", level: 70 },
    { name: "Git", color: "text-rose-400", bg: "from-rose-500/25 to-red-600/5", border: "border-rose-500/30", icon: "GT", level: 75 },
    { name: "VS Code", color: "text-blue-400", bg: "from-blue-500/25 to-indigo-600/5", border: "border-blue-400/30", icon: "VS", level: 92 },
    { name: "Power BI", color: "text-amber-400", bg: "from-amber-400/25 to-yellow-600/5", border: "border-amber-400/30", icon: "BI", level: 82 },
    { name: "Excel", color: "text-emerald-400", bg: "from-emerald-500/25 to-teal-600/5", border: "border-emerald-500/30", icon: "XL", level: 92 },
    { name: "Power Query", color: "text-teal-300", bg: "from-teal-400/25 to-cyan-600/5", border: "border-teal-400/30", icon: "PQ", level: 88 },
    { name: "Figma", color: "text-purple-400", bg: "from-purple-500/25 to-pink-600/5", border: "border-purple-400/30", icon: "FG", level: 72 },
    { name: "Three.js", color: "text-indigo-400", bg: "from-indigo-500/25 to-violet-600/5", border: "border-indigo-400/30", icon: "3D", level: 60 },
    { name: "Blender", color: "text-orange-400", bg: "from-orange-500/25 to-red-600/5", border: "border-orange-400/30", icon: "BL", level: 55 },
    { name: "Python", color: "text-yellow-300", bg: "from-yellow-400/25 to-blue-500/5", border: "border-yellow-400/30", icon: "PY", level: 65 },
    { name: "More...", color: "text-cyan-300", bg: "from-cyan-500/20 to-blue-600/5", border: "border-cyan-500/30", icon: "•••", level: 65 },
  ];

  const services = [
    {
      title: "Fullstack SaaS, Mobile Apps, 3D Web & Figma",
      desc: "End-to-end SaaS platforms, large-scale custom software, Fullstack web & mobile apps, interactive 3D websites, and Figma UI/UX.",
      icon: Code2,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Data Analysis & BI Automation",
      desc: "Turn complex data into automated executive dashboards using Advanced Excel, Power BI, Power Query and SQL.",
      icon: BarChart3,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Figma UI/UX & Product Systems",
      desc: "High-converting design systems, mobile app interfaces, and modern SaaS prototypes crafted in Figma.",
      icon: Palette,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "3D WebGL Shaders & Digital Assets",
      desc: "Interactive 60FPS WebGL shaders, custom animations, and high-impact digital products.",
      icon: Layers,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  const featuredProjects = [
    {
      title: "Portfolio Website",
      sub: "5 Live Interactive Shaders",
      tags: ["Next.js", "Tailwind", "WebGL"],
      link: "Live Demo",
      href: "/templates",
      isComingSoon: false,
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=80",
    },
    {
      title: "Automation",
      sub: "10 Protected Dashboards & Proof",
      tags: ["Excel", "Power Query", "Automation"],
      link: "Live Demo",
      href: "/templates?tab=automation",
      isComingSoon: false,
      img: "/utomation1.png",
    },
    {
      title: "Data Analysis Project",
      sub: "Sales & Business Analysis",
      tags: ["Excel", "Power BI", "Power Query"],
      link: "View Project",
      href: "/templates?tab=data",
      isComingSoon: false,
      img: "/utomation2.png",
    },
    {
      title: "SIPTENHUB",
      sub: "Coming Soon",
      tags: ["Next.js", "Three.js", "Tailwind"],
      link: "Coming Soon",
      href: "#",
      isComingSoon: true,
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80",
    },
  ];

  const journey: JourneyCertItem[] = [
    {
      year: "2026",
      title: "Diploma in Computer Science & Technology (DCST)",
      sub: "RCLD Islampur • Excellent Grade (94% Marks)",
      badge: "94% Excellent Grade",
      progress: 94,
      metricTitle: "12-Month Computer Science Diploma (DCST)",
      details: "Completed 12-Month Diploma at RCLD Islampur with 94% Marks (Theory: 92/100, Practical: 96/100) covering MS-Office (Excel, Word, Access), C, HTML, Python, JavaScript & SQL.",
      skillsUnlocked: ["MS-Excel & Office", "Python & JS", "HTML & SQL", "C Programming"],
      certImage: "/dcst.jpg",
    },
    {
      year: "2025",
      title: "Intermediate Examination (12th Science - PCB)",
      sub: "BSEB Patna • Project Azad H.S. Pothiya, Kishanganj",
      badge: "12th Science (PCB)",
      progress: 100,
      metricTitle: "Higher Secondary (10+2) Science Stream",
      details: "Passed Intermediate Examination in Science Stream (Physics, Chemistry, Biology, English & Urdu) from Project Azad High School Pothiya, Kishanganj.",
      skillsUnlocked: ["Physics", "Chemistry", "Biology", "Analytical Logic"],
      certImage: "/12th.jpg",
    },
    {
      year: "2023",
      title: "Secondary School Examination (10th Board)",
      sub: "BSEB Patna • Utkramit Madhyamik School Kusiyari, Kishanganj",
      badge: "10th Board Verified",
      progress: 100,
      metricTitle: "Annual Secondary Board Examination (10th)",
      details: "Passed Secondary School Examination (2023) from Utkramit Madhyamik School Kusiyari, Kishanganj.",
      skillsUnlocked: ["Secondary Board", "Mathematics", "Science", "Foundation"],
      certImage: "/10th.png",
    },
  ];

  const activeJourneyItem = journey[selectedJourneyIdx];

  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (activeSkill.level / 100) * circumference;

  return (
    <div
      className={`${
        theme === "light" ? "light-mode bg-white text-slate-900" : "bg-[#040710] text-slate-200"
      } min-h-screen flex flex-col lg:flex-row antialiased selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-300`}
    >
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 34s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .light-mode aside,
        .light-mode header.mobile-app-bar,
        .light-mode nav.mobile-bottom-dock,
        .light-mode section,
        .light-mode footer,
        .light-mode [class*="bg-[#0"] {
          background-color: #ffffff !important;
          background-image: none !important;
          border-color: #cbd5e1 !important;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.08) !important;
        }
        .light-mode [class*="bg-[#0c142c]"],
        .light-mode [class*="bg-[#0b1329]"],
        .light-mode [class*="bg-[#0a1124]"],
        .light-mode [class*="bg-[#101932]"],
        .light-mode [class*="bg-[#101935]"],
        .light-mode [class*="bg-[#0d162e]"],
        .light-mode [class*="bg-[#081024]"],
        .light-mode [class*="bg-[#120a24]"] {
          background-color: #f8fafc !important;
          background-image: none !important;
          border-color: #cbd5e1 !important;
        }
        .light-mode .text-white,
        .light-mode .text-slate-100,
        .light-mode .text-slate-200 {
          color: #0f172a !important;
        }
        .light-mode .text-slate-300,
        .light-mode .text-slate-300\\/90,
        .light-mode .text-slate-400,
        .light-mode .text-purple-200\\/75 {
          color: #334155 !important;
        }
        .light-mode .text-cyan-300,
        .light-mode .text-cyan-400 {
          color: #0284c7 !important;
        }
        .light-mode .text-blue-400,
        .light-mode .text-sky-400 {
          color: #2563eb !important;
        }
        .light-mode .text-emerald-300,
        .light-mode .text-emerald-400 {
          color: #059669 !important;
        }
        .light-mode .text-purple-200,
        .light-mode .text-purple-300,
        .light-mode .text-purple-400 {
          color: #7c3aed !important;
        }
        .light-mode .heading-glow,
        .light-mode h1.bg-clip-text {
          background-image: linear-gradient(to right, #0f172a, #0284c7, #4f46e5) !important;
          filter: none !important;
        }
        .light-mode input {
          background-color: #ffffff !important;
          color: #0f172a !important;
          border-color: #94a3b8 !important;
        }
      `}</style>

      {/* MOBILE NATIVE APP TOP HEADER BAR */}
      <header className="mobile-app-bar lg:hidden sticky top-0 z-40 bg-[#060a15]/92 backdrop-blur-2xl border-b border-slate-800/80 px-4 py-2.5 flex items-center justify-between shadow-lg">
        <div
          onClick={() => scrollToSection("home", "Home")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <SiptenLabsLogoMark size="sm" />
          <SiptenLabsWordmark compact />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAutoDownloadResume}
            className="px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/35 text-[11px] font-bold text-cyan-300 flex items-center gap-1 cursor-pointer active:scale-95 transition-transform"
          >
            <Download className="w-3 h-3 text-cyan-400" /> CV
          </button>

          <Link
            href="/templates"
            className="px-3 py-1.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white! text-[11px] font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(6,182,212,0.35)] active:scale-95 transition-transform"
          >
            <LayoutGrid className="w-3 h-3" /> Studio
          </Link>

          <button
            type="button"
            onClick={() => handleThemeChange(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 rounded-xl bg-[#0b1329] border border-slate-700/80 flex items-center justify-center text-cyan-300 cursor-pointer active:scale-95 transition-transform"
            title="Switch Light / Dark Mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* DESKTOP LEFT SIDEBAR */}
      <aside className="hidden lg:flex lg:w-64 bg-[#060a15] border-r border-slate-800/80 flex-col justify-between p-5 lg:fixed lg:h-screen z-30 overflow-y-auto">
        <div>
          <div
            className="flex items-center gap-3 mb-7 px-1.5 py-1.5 rounded-2xl hover:bg-slate-900/50 group cursor-pointer transition-all"
            onClick={() => scrollToSection("home", "Home")}
          >
            <SiptenLabsLogoMark size="md" />
            <SiptenLabsWordmark />
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.name;
              if (item.isResumeDownload) {
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={handleAutoDownloadResume}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium cursor-pointer text-left transition-all ${
                      isActive
                        ? "bg-linear-to-r from-blue-600/25 to-cyan-500/10 text-cyan-300 border border-blue-500/35"
                        : "text-slate-400 hover:text-cyan-200 hover:bg-slate-800/30"
                    }`}
                  >
                    <span className="flex items-center gap-3 truncate">
                      <Icon className="w-4 h-4 shrink-0 text-cyan-400" />
                      <span className="truncate">{item.name}</span>
                    </span>
                    <Download className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  </button>
                );
              }
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.target, item.name)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium cursor-pointer text-left transition-all ${
                    isActive
                      ? "bg-linear-to-r from-blue-600/25 to-cyan-500/10 text-cyan-300 border border-blue-500/35 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                      : "text-slate-400 hover:text-cyan-200 hover:bg-slate-800/30"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  <span className="truncate">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/60">
          <div className="flex items-center bg-[#0b1122] p-1 rounded-xl border border-slate-800 mb-2.5">
            <button
              type="button"
              onClick={() => handleThemeChange("light")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] rounded-lg font-medium cursor-pointer transition-all ${
                theme === "light"
                  ? "bg-blue-600 text-white! shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sun className="w-3.5 h-3.5" /> Light
            </button>
            <button
              type="button"
              onClick={() => handleThemeChange("dark")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-[11px] rounded-lg font-medium cursor-pointer transition-all ${
                theme === "dark"
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Moon className="w-3.5 h-3.5" /> Dark
            </button>
          </div>
          <p className="text-[11px] text-slate-500 px-1 leading-relaxed">
            Turning ideas into <br /> digital reality.
          </p>
        </div>
      </aside>

      {/* MOBILE FLOATING BOTTOM APP DOCK */}
      <nav className="mobile-bottom-dock lg:hidden fixed bottom-3 inset-x-3 z-50 bg-[#060b18]/92 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl px-1.5 py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_25px_rgba(6,182,212,0.2)] flex items-center justify-between">
        {mobileDockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.name;
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.target, item.name)}
              className={`relative flex-1 py-1.5 rounded-xl flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-all duration-300 ${
                isActive
                  ? "bg-linear-to-b from-cyan-500/25 to-blue-600/15 text-cyan-300 scale-105"
                  : "text-slate-400 hover:text-slate-200 active:scale-95"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" : ""}`} />
              <span className="text-[9px] font-bold tracking-tight">{item.label}</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* MAIN FULL-SCREEN CONTENT */}
      <main className="flex-1 lg:ml-64 px-3.5 sm:px-8 md:px-12 pt-4 pb-28 lg:py-6 max-w-6xl w-full mx-auto space-y-12 sm:space-y-20">
        
        {/* HERO SECTION */}
        <section id="home" className="lg:min-h-[calc(100vh-3rem)] flex flex-col justify-center">
          <div className="flex-1 flex flex-col justify-between relative rounded-3xl bg-linear-to-br from-[#0b1329] via-[#070b17] to-[#0c152c] border border-slate-800/90 p-5 sm:p-10 md:p-12 overflow-hidden shadow-[0_0_70px_-15px_rgba(37,99,235,0.25)]">
            
            <div className="absolute -top-28 -right-28 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 my-auto">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                <p className="text-slate-300 text-base sm:text-xl md:text-2xl font-medium tracking-wide">
                  Hello, I&apos;m
                </p>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-sky-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.4)] hover:drop-shadow-[0_0_45px_rgba(56,189,248,0.85)] transition-all duration-300 cursor-default">
                  Sipten Raja
                </h1>

                <div className="min-h-7 flex items-center justify-center lg:justify-start">
                  <p className="text-xs sm:text-base md:text-lg font-semibold text-blue-400 drop-shadow-[0_0_14px_rgba(59,130,246,0.45)]">
                    {typedRole}
                    <span className="inline-block w-0.5 h-4 sm:h-5 bg-cyan-400 ml-1 animate-pulse align-middle" />
                  </p>
                </div>

                <p className="text-xs sm:text-base text-slate-300/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Building Fullstack SaaS platforms, mobile apps, 3D websites, Figma UI systems, and automated Excel/BI solutions.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
                  <Link
                    href="/templates"
                    className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white! text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2 transition-all"
                  >
                    View My Projects
                  </Link>
                  <button
                    type="button"
                    onClick={handleAutoDownloadResume}
                    className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-[#101932] hover:bg-[#162242] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Download className="w-4 h-4 text-cyan-400" /> Resume
                  </button>
                  <button
                    type="button"
                    onClick={handleCustomNeedClick}
                    className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-purple-500/15 hover:bg-purple-500/25 text-purple-200 border border-purple-400/35 hover:border-purple-400 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Wand2 className="w-4 h-4 text-purple-400" /> Contact Me
                  </button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 sm:pt-3">
                  <a
                    href="https://www.linkedin.com/in/sipten-raja-814a17429"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-[#101935]/90 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/sipten-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="w-10 h-10 rounded-xl bg-[#101935]/90 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={GMAIL_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Send Email via Gmail (siptenfreelance@gmail.com)"
                    className="w-10 h-10 rounded-xl bg-[#101935]/90 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-cyan-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <Link
                    href="/templates?tab=proof"
                    title="Verified Proof of Work"
                    className="w-10 h-10 rounded-xl bg-[#101935]/90 border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all"
                  >
                    <Code2 className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-56 h-56 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full p-1.5 bg-linear-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_65px_rgba(34,211,238,0.35)]">
                  <div className="w-full h-full rounded-full bg-[#040710] relative overflow-hidden select-none pointer-events-none">
                    <video
                      ref={videoRef}
                      key={heroVideos[currentVideoIdx]}
                      src={heroVideos[currentVideoIdx]}
                      autoPlay
                      muted
                      playsInline
                      controls={false}
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                      onEnded={() =>
                        setCurrentVideoIdx((prev) => (prev + 1) % heroVideos.length)
                      }
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes("/templates/")) {
                          target.src = `/templates${heroVideos[currentVideoIdx]}`;
                          target.play().catch(() => {});
                        }
                      }}
                      className="w-full h-full object-cover pointer-events-none select-none"
                    />
                  </div>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-slate-800/80 relative z-10">
              <div className="relative rounded-2xl bg-linear-to-b from-[#132042] via-[#0b1329] to-[#070c1a] p-3.5 sm:p-4 border border-cyan-400/35 shadow-[0_14px_28px_rgba(0,0,0,0.65),inset_0_2px_12px_rgba(34,211,238,0.15)]">
                <h3
                  className="text-2xl sm:text-4xl font-black text-cyan-400 tracking-tight flex items-center"
                  style={{ textShadow: "0 4px 0 #083344, 0 8px 20px rgba(34,211,238,0.5)" }}
                >
                  {counts.projects}+
                  <span className="inline-block w-0.5 h-5 bg-cyan-400/70 ml-1 animate-pulse" />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">Projects Completed</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400">(Live & Verified)</p>
              </div>

              <div className="relative rounded-2xl bg-linear-to-b from-[#132042] via-[#0b1329] to-[#070c1a] p-3.5 sm:p-4 border border-blue-400/35 shadow-[0_14px_28px_rgba(0,0,0,0.65),inset_0_2px_12px_rgba(96,165,250,0.15)]">
                <h3
                  className="text-2xl sm:text-4xl font-black text-blue-400 tracking-tight flex items-center"
                  style={{ textShadow: "0 4px 0 #172554, 0 8px 20px rgba(96,165,250,0.5)" }}
                >
                  {counts.tools}+
                  <span className="inline-block w-0.5 h-5 bg-blue-400/70 ml-1 animate-pulse" />
                </h3>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">Tools & Tech</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400">(Working with)</p>
              </div>

              <div className="relative rounded-2xl bg-linear-to-b from-[#102637] via-[#0b1329] to-[#070c1a] p-3.5 sm:p-4 border border-emerald-400/35 shadow-[0_14px_28px_rgba(0,0,0,0.65),inset_0_2px_12px_rgba(52,211,153,0.15)]">
                <h3
                  className="text-2xl sm:text-4xl font-black text-emerald-400 tracking-tight flex items-center"
                  style={{ textShadow: "0 4px 0 #064e3b, 0 8px 20px rgba(52,211,153,0.5)" }}
                >
                  {counts.mindset}%
                </h3>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">Learning Mindset</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400">(Always Improving)</p>
              </div>

              <div className="relative rounded-2xl bg-linear-to-b from-[#132042] via-[#0b1329] to-[#070c1a] p-3.5 sm:p-4 border border-sky-400/35 shadow-[0_14px_28px_rgba(0,0,0,0.65),inset_0_2px_12px_rgba(56,189,248,0.15)]">
                <h3
                  className="text-2xl sm:text-4xl font-black text-sky-400 tracking-tight"
                  style={{ textShadow: "0 4px 0 #0c4a6e, 0 8px 20px rgba(56,189,248,0.5)" }}
                >
                  Global
                </h3>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">Goal</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400">(Work Anywhere)</p>
              </div>

              <div className="col-span-2 lg:col-span-1 relative rounded-2xl bg-linear-to-b from-[#122449] via-[#0c1631] to-[#070c1a] p-3.5 sm:p-4 border border-cyan-400/50 shadow-[0_14px_28px_rgba(0,0,0,0.65),inset_0_2px_15px_rgba(34,211,238,0.2)] flex lg:block items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Users className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <h3
                    className="text-2xl sm:text-4xl font-black text-cyan-300 tracking-tight"
                    style={{ textShadow: "0 4px 0 #083344, 0 8px 20px rgba(34,211,238,0.55)" }}
                  >
                    {visitorCount}+
                  </h3>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white lg:mt-1.5">Portfolio Visited</p>
                  <p className="text-[10px] text-cyan-400 flex items-center gap-1.5 mt-0.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> Live Auto-Count
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 1. ABOUT ME */}
        <RevealOnScroll>
          <section id="about" className="rounded-3xl bg-[#080d1d] border border-slate-800/80 p-5 sm:p-10 shadow-2xl scroll-mt-16 lg:scroll-mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <ScrollTypeHeading tag="// 01. Who I Am" text="About Me" />
                <p className="text-sm text-slate-300/90 leading-relaxed pt-1">
                  I&apos;m Sipten Raja, a passionate developer and data specialist. I build Fullstack SaaS platforms, mobile apps, 3D websites, Figma UI designs, and automated Excel/Power Query systems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-3">
                  <div className="p-3.5 rounded-2xl bg-[#0c142c] border border-slate-800/80 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Location</span>
                      <span className="text-slate-100 text-xs font-medium">Islampur, WB, India</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#0c142c] border border-slate-800/80 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block text-[11px]">Availability</span>
                      <span className="text-slate-100 text-xs font-medium">Freelance / Remote</span>
                    </div>
                  </div>
                  <a
                    href={GMAIL_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Click to open Gmail directly"
                    className="p-3.5 rounded-2xl bg-[#0c142c] border border-slate-800/80 hover:border-cyan-400 flex items-center gap-3 group transition-colors"
                  >
                    <Mail className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 shrink-0 transition-colors" />
                    <div className="overflow-hidden">
                      <span className="text-slate-400 block text-[11px]">Email (Click to Mail)</span>
                      <span className="text-slate-100 group-hover:text-cyan-300 text-xs font-medium truncate block transition-colors">
                        siptenfreelance@gmail.com
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleAutoDownloadResume}
                    className="px-4 py-2 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-300 hover:text-white! border border-cyan-500/30 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <Download className="w-3.5 h-3.5" /> Resume
                  </button>
                  <span className="font-serif italic text-xl text-cyan-200/80 tracking-wider">
                    Sipten Raja
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-800 h-52 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80"
                    alt="Coding Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-[#0d162e] border border-slate-800/90 flex items-center justify-between">
                  <p className="text-xs sm:text-sm italic text-slate-200 font-medium">
                    &ldquo;Small steps every day lead to big results.&rdquo;
                  </p>
                  <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1 shrink-0">
                    Keep Going <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* 2. SKILLS & TECH STACK */}
        <RevealOnScroll>
          <section
            id="skills"
            className="rounded-3xl bg-[#070c1b] border border-slate-800/90 overflow-hidden shadow-[0_0_50px_-15px_rgba(37,99,235,0.2)] scroll-mt-16 lg:scroll-mt-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="hidden lg:block lg:col-span-2 relative overflow-hidden border-r border-slate-800/70">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80"
                  alt="Cyber Mountain"
                  className="w-full h-full object-cover opacity-75 mix-blend-lighten scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#070c1b]/40 to-[#070c1b]" />
                <div className="absolute inset-0 bg-linear-to-t from-[#070c1b] via-transparent to-[#070c1b]/60" />
              </div>

              <div className="lg:col-span-10 p-5 sm:p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
                  <ScrollTypeHeading
                    tag="// 02. Tech Arsenal"
                    text="Skills & Tech Stack"
                    sub="Tools I use and technologies I work with."
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setActiveSkill({ name: "Overall Skills Progress", level: 65 })
                    }
                    className="px-4 py-2 rounded-xl bg-[#0e1730] hover:bg-[#132042] text-xs text-slate-200 border border-slate-700/80 flex items-center gap-1.5 self-start shrink-0 cursor-pointer"
                  >
                    View All Skills <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-center">
                  <div className="xl:col-span-9 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-2.5 sm:gap-3">
                    {skills.map((sk, i) => {
                      const isSelected = activeSkill.name === sk.name;
                      return (
                        <div
                          key={i}
                          onMouseEnter={() =>
                            setActiveSkill({ name: sk.name, level: sk.level })
                          }
                          onClick={() =>
                            setActiveSkill({ name: sk.name, level: sk.level })
                          }
                          className={`p-3 rounded-2xl bg-linear-to-b ${sk.bg} border ${
                            isSelected
                              ? "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)] -translate-y-1"
                              : sk.border
                          } hover:border-cyan-400/70 flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl bg-[#080d1d]/90 border border-slate-700/60 ${sk.color} flex items-center justify-center font-black text-xs shadow-md`}
                          >
                            {sk.icon}
                          </div>
                          <span className="text-[10px] text-slate-200 font-semibold text-center truncate w-full">
                            {sk.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="xl:col-span-3 flex justify-center">
                    <div className="w-full max-w-52.5 p-5 rounded-2xl bg-linear-to-b from-[#0d1630] to-[#080d1d] border border-slate-800/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 110 110">
                          <defs>
                            <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#22d3ee" />
                              <stop offset="50%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                          <circle
                            cx="55"
                            cy="55"
                            r={radius}
                            stroke="#1e293b"
                            strokeWidth="8"
                            fill="transparent"
                          />
                          <circle
                            cx="55"
                            cy="55"
                            r={radius}
                            stroke="url(#skillGrad)"
                            strokeWidth="8"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            fill="transparent"
                            className="transition-all duration-700 ease-out drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                            {activeSkill.level}%
                          </span>
                        </div>
                      </div>

                      <p className="text-xs font-bold text-slate-200 mt-3 leading-snug">
                        {activeSkill.name}
                      </p>
                      <span className="text-[10px] text-cyan-400 mt-0.5">
                        ● Interactive Meter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* 3. WHAT I DO */}
        <RevealOnScroll>
          <section id="services" className="rounded-3xl bg-[#080d1d] border border-slate-800/80 p-5 sm:p-10 shadow-2xl scroll-mt-16 lg:scroll-mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
              <ScrollTypeHeading
                tag="// 03. My Services"
                text="What I Do"
                sub="Fullstack SaaS, Mobile Apps, Enterprise Software, Figma UI, 3D Websites & Data Automation."
              />
              <button
                type="button"
                onClick={handleCustomNeedClick}
                className="px-4 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-xs text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 self-start shrink-0 cursor-pointer"
              >
                <Wand2 className="w-3.5 h-3.5 text-cyan-400" /> Contact Me
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((srv, index) => {
                const Icon = srv.icon;
                const isLiveActive = activeServiceIdx === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveServiceIdx(index)}
                    className={`p-6 rounded-2xl bg-[#0c142c] border transition-all duration-500 flex flex-col justify-between ${
                      isLiveActive
                        ? "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.22)] -translate-y-1.5"
                        : "border-slate-800/90 hover:border-cyan-500/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${srv.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {isLiveActive && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[9px] font-mono text-cyan-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" /> Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">{srv.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{srv.desc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCustomNeedClick}
                      className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer w-full"
                    >
                      <span>Custom Need</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </RevealOnScroll>

        {/* 4. FEATURED PROJECTS */}
        <RevealOnScroll>
          <section id="projects" className="space-y-8 scroll-mt-16 lg:scroll-mt-8">
            <div className="rounded-3xl bg-[#080d1d] border border-slate-800/80 p-5 sm:p-10 shadow-2xl">
              <div className="mb-7">
                <ScrollTypeHeading
                  tag="// My Work"
                  text="Featured Projects"
                  sub="Click 'Live Demo' or 'View Project' to explore by category."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredProjects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0c142c] border border-slate-800/90 overflow-hidden hover:border-cyan-400 transition-all hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    {proj.isComingSoon ? (
                      <div>
                        <div className="h-36 overflow-hidden relative">
                          <img
                            src={proj.img}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                          <div className="flex flex-wrap gap-1.5 my-2.5">
                            {proj.tags.map((t, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-slate-400">{proj.sub}</p>
                        </div>
                      </div>
                    ) : (
                      <Link href={proj.href}>
                        <div className="h-36 overflow-hidden relative">
                          <img
                            src={proj.img}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                          <div className="flex flex-wrap gap-1.5 my-2.5">
                            {proj.tags.map((t, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-slate-400">{proj.sub}</p>
                        </div>
                      </Link>
                    )}

                    <div className="px-4 pb-4 pt-2 border-t border-slate-800/50 flex items-center justify-between">
                      {proj.isComingSoon ? (
                        <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> Coming Soon
                        </span>
                      ) : (
                        <>
                          <Link
                            href={proj.href}
                            className="text-xs font-semibold text-cyan-400 flex items-center gap-1"
                          >
                            {proj.link} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            type="button"
                            onClick={handleCustomNeedClick}
                            className="text-[11px] text-cyan-300 hover:text-white bg-cyan-500/15 px-2.5 py-1 rounded-lg border border-cyan-500/30 cursor-pointer"
                          >
                            Custom Need
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* 5. MY JOURNEY */}
        <RevealOnScroll>
          <section id="journey" className="rounded-3xl bg-[#080d1d] border border-slate-800/80 p-5 sm:p-10 shadow-2xl scroll-mt-16 lg:scroll-mt-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <ScrollTypeHeading
                tag="// 05. Education & Certificates"
                text="My Journey"
                sub="Hover any qualification and click 'View Certificate' to inspect & zoom my original certificate!"
              />

              <div className="flex flex-wrap items-center gap-2.5 self-start shrink-0">
                <button
                  type="button"
                  onClick={handleAutoDownloadResume}
                  className="px-4 py-2.5 rounded-xl bg-[#101c3d] hover:bg-[#162652] text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4 text-cyan-400" /> Resume
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenCertModal(activeJourneyItem)}
                  className="px-4 py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white! text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <Award className="w-4 h-4" /> View Certificate
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4 relative before:absolute before:top-5 before:bottom-5 before:left-3.5 before:w-0.5 before:bg-slate-800">
                {journey.map((item, idx) => {
                  const isActive = selectedJourneyIdx === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setSelectedJourneyIdx(idx)}
                      onClick={() => handleOpenCertModal(item)}
                      className={`group relative pl-9 sm:pl-10 pr-4 sm:pr-5 py-4 sm:py-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                        isActive
                          ? "bg-linear-to-r from-blue-600/20 via-cyan-500/10 to-transparent border-cyan-400/60 shadow-[0_0_25px_rgba(34,211,238,0.15)] translate-x-1"
                          : "bg-[#0a1124]/60 border-slate-800/80 hover:border-cyan-400/40"
                      }`}
                    >
                      <span
                        className={`absolute left-2 top-6 sm:top-1/2 sm:-translate-y-1/2 w-3.5 h-3.5 rounded-full transition-all ${
                          isActive
                            ? "bg-cyan-400 ring-4 ring-cyan-400/25 scale-110"
                            : "bg-slate-600 ring-4 ring-[#080d1d]"
                        }`}
                      />

                      <div className="flex items-start gap-3">
                        <span
                          className={`text-xs font-mono px-2.5 py-1 rounded-lg border shrink-0 ${
                            isActive
                              ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/40 font-bold"
                              : "bg-slate-800 text-cyan-300 border-slate-700"
                          }`}
                        >
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-1">{item.sub}</p>
                        </div>
                      </div>

                      <span className="self-start sm:self-center px-3.5 py-2 rounded-xl bg-cyan-500/15 group-hover:bg-linear-to-r group-hover:from-cyan-500 group-hover:to-blue-600 text-cyan-300 group-hover:text-white! border border-cyan-500/30 text-[11px] font-bold flex items-center gap-1.5 shrink-0 transition-all duration-300">
                        <Eye className="w-3.5 h-3.5" /> View Certificate
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="lg:col-span-5 flex">
                <div
                  onClick={() => handleOpenCertModal(activeJourneyItem)}
                  className="w-full p-6 rounded-2xl bg-linear-to-b from-[#101c3d] to-[#0a1024] border border-cyan-500/35 hover:border-cyan-400 shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between cursor-pointer group transition-all relative overflow-hidden"
                >
                  <div className="absolute -top-14 -right-14 w-36 h-36 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[11px] font-bold text-cyan-300">
                        ● {activeJourneyItem.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {activeJourneyItem.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                        {activeJourneyItem.metricTitle}
                      </h3>
                      <p className="text-xs text-slate-300/90 leading-relaxed mt-2">
                        {activeJourneyItem.details}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#070c1a]/90 border border-slate-800 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400 font-medium">Verified Score / Status</span>
                        <span className="text-cyan-400 font-black">{activeJourneyItem.progress}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500"
                          style={{ width: `${activeJourneyItem.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                        Subjects & Key Skills:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeJourneyItem.skillsUnlocked.map((sk, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2.5 py-1 rounded-lg bg-blue-500/10 text-cyan-200 border border-blue-500/25 font-medium"
                          >
                            ✓ {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                    <span className="text-xs text-slate-300 font-medium">
                      Click to view & zoom certificate
                    </span>
                    <span className="px-3.5 py-2 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shrink-0">
                      <Eye className="w-3.5 h-3.5" /> View Certificate
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </RevealOnScroll>

        {/* 6. CLEAN INTERACTIVE FAQS SECTION */}
        <RevealOnScroll>
          <section
            id="faqs"
            className="rounded-3xl bg-[#070c1b] border border-cyan-500/25 p-5 sm:p-10 shadow-[0_0_60px_-15px_rgba(6,182,212,0.2)] scroll-mt-16 lg:scroll-mt-8 space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <ScrollTypeHeading
                tag="// 06. Frequently Asked Questions"
                text="FAQs"
                sub="Swipe or scroll through the questions in one line and tap any question to read the answer."
              />

              <div className="flex items-center gap-2 self-start shrink-0">
                <button
                  type="button"
                  onClick={() => scrollFaqRow("left")}
                  className="w-9 h-9 rounded-xl bg-[#0d1630] hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-400 flex items-center justify-center text-cyan-300 cursor-pointer transition-all"
                  title="Scroll Left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollFaqRow("right")}
                  className="w-9 h-9 rounded-xl bg-[#0d1630] hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-400 flex items-center justify-center text-cyan-300 cursor-pointer transition-all"
                  title="Scroll Right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div
                ref={faqScrollRef}
                className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 px-1 scroll-smooth"
              >
                {FAQS_DATA.map((item, idx) => {
                  const isSelected = selectedFaqIdx === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedFaqIdx(idx)}
                      className={`shrink-0 px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border whitespace-nowrap ${
                        isSelected
                          ? "bg-linear-to-r from-cyan-500 to-blue-600 text-white! border-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.45)] scale-[1.02]"
                          : "bg-[#0b1329]/90 text-slate-300 border-slate-800 hover:border-cyan-500/50 hover:text-cyan-200"
                      }`}
                    >
                      <Sparkles className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-white!" : "text-cyan-400"}`} />
                      <span>{item.q}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl bg-linear-to-b from-[#0b1530] to-[#050914] border border-cyan-500/35 p-5 sm:p-8 shadow-2xl space-y-4 relative overflow-hidden">
              <div className="absolute -top-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <Sparkles className="w-4 h-4 text-white!" />
                  </div>
                  <h3 className="text-xs sm:text-base font-extrabold text-white">
                    {FAQS_DATA[selectedFaqIdx].q}
                  </h3>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[10px] font-mono font-bold text-cyan-300 shrink-0">
                  FAQ #{selectedFaqIdx + 1} / {FAQS_DATA.length}
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#081024]/90 border border-slate-800/90 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line min-h-24">
                {typedFaqAnswer}
                {isAnswerTyping && (
                  <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
                )}
              </div>
            </div>

            <div className="rounded-3xl bg-linear-to-r from-[#0d1838] via-[#0a1229] to-[#141036] border border-cyan-400/30 p-5 sm:p-9 shadow-xl space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-[11px] font-bold text-cyan-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Risk-Free Collaboration
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
                    Your Idea. My Focus. A Clear Plan.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    You do not need to commit to a full project just to explore an idea. Start with a conversation, explain what you want to achieve, and let us identify the right approach together.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleCustomNeedClick}
                  className="px-6 py-3.5 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white! text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center gap-2 self-start shrink-0 cursor-pointer transition-all"
                >
                  Request Free Initial Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold">
                  What you can expect:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {[
                    "Free initial demo with an agreed scope.",
                    "No obligation to purchase if the demo is not right for you.",
                    "Transparent pricing and clearly defined deliverables.",
                    "Direct communication and a personalized solution.",
                    "Project milestones, review opportunities, and agreed handover terms.",
                  ].map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#070c1a]/90 border border-slate-800/90 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>
        </RevealOnScroll>

        {/* 7. CLIENT REVIEWS & COMMENTS SECTION */}
        <RevealOnScroll>
          <section
            id="feedback"
            className="rounded-3xl bg-[#080d1d] border border-slate-800/80 p-5 sm:p-7 shadow-2xl scroll-mt-16 lg:scroll-mt-8 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <ScrollTypeHeading
                tag="// 07. Client Feedback & Reviews"
                text="What People Say"
              />
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> {comments.length} Verified Reviews • No Login Required
              </span>
            </div>

            <div className="relative w-full overflow-hidden py-2 mb-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-12 before:bg-linear-to-r before:from-[#080d1d] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-12 after:bg-linear-to-l after:from-[#080d1d] after:to-transparent after:z-10">
              <div className="animate-marquee gap-4">
                {[...comments, ...comments].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-76 sm:w-84 shrink-0 px-4 py-3.5 rounded-2xl bg-linear-to-b from-[#0e1834] to-[#0a1124] border border-slate-800/90 shadow-md flex flex-col justify-between space-y-2 mx-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-linear-to-tr from-blue-600 to-purple-500 flex items-center justify-center text-white! font-bold text-[10px]">
                          {item.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white flex items-center gap-1">
                            {item.name}
                            <ShieldCheck className="w-3 h-3 text-cyan-400" />
                          </h4>
                          <p className="text-[9px] text-slate-400">{item.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-200 italic leading-snug line-clamp-3">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleAddComment}
              className="p-2.5 sm:p-3 rounded-2xl bg-[#0c142c]/90 border border-slate-800/90 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-center">
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    value={customAuthorName}
                    onChange={(e) => setCustomAuthorName(e.target.value)}
                    placeholder={`Your Name (or ${autoGuestName})`}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b18] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="sm:col-span-7">
                  <input
                    type="text"
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your experience working with Sipten... (No login needed)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b18] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white! text-xs font-bold shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                  >
                    Post <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {commentSuccess && (
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-400 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Comment posted live!
                </div>
              )}
            </form>
          </section>
        </RevealOnScroll>

        {/* 8. UNIFIED GLOWING FOOTER + DIRECT CONTACT BOX */}
        <footer
          id="contact"
          className="group/footer relative rounded-3xl bg-[#05030d] border border-purple-500/25 hover:border-purple-400/50 pt-8 sm:pt-10 px-5 sm:px-12 pb-0 overflow-hidden shadow-[0_0_90px_-20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_110px_-10px_rgba(168,85,247,0.5)] transition-all duration-500 scroll-mt-16 lg:scroll-mt-8"
        >
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 rounded-2xl bg-linear-to-r from-[#241346]/90 via-[#180d33]/95 to-[#120926]/95 border border-purple-400/30 hover:border-purple-400/60 p-5 sm:p-9 shadow-[0_0_50px_rgba(139,92,246,0.2)] mb-10 sm:mb-12 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wider">
                  // Direct Contact
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-white hover:via-purple-200 hover:to-cyan-300 transition-all cursor-default">
                  Ready to create something remarkable?
                </h3>
                <p className="text-xs text-purple-200/75 leading-relaxed">
                  Send me a direct message right from here, or click my email below to open Gmail directly.
                </p>

                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href={GMAIL_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#090514]/90 border border-purple-400/40 hover:border-cyan-400 text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> siptenfreelance@gmail.com
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={handleDirectContactSubmit}
                  className="space-y-2.5 bg-[#090514]/80 p-4 rounded-2xl border border-purple-500/30"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      ref={messageInputRef}
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-[#120a24] px-3.5 py-2.5 rounded-xl border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="Your Email (you@example.com)"
                      className="w-full bg-[#120a24] px-3.5 py-2.5 rounded-xl border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Write your project need or message here..."
                      className="flex-1 bg-[#120a24] px-3.5 py-2.5 rounded-xl border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      disabled={isSendingMail}
                      className="px-6 py-2.5 rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 text-white! text-xs font-bold shadow-[0_0_25px_rgba(168,85,247,0.6)] cursor-pointer transition-all flex items-center justify-center gap-1.5 shrink-0"
                    >
                      {isSendingMail ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Contact / Send <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {mailSentStatus === "success" && (
                    <p className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Message sent directly to siptenfreelance@gmail.com!
                    </p>
                  )}
                </form>
              </div>

            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 text-xs">
            <div className="col-span-2 md:col-span-5 space-y-3.5">
              <div className="flex items-center gap-3 group">
                <SiptenLabsLogoMark size="sm" />
                <SiptenLabsWordmark />
              </div>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Fullstack SaaS, mobile apps, 3D shaders, Figma UI and automated data solutions.
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://github.com/sipten-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub: sipten-labs"
                  className="w-8 h-8 rounded-lg bg-[#140d26] border border-purple-500/30 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sipten-raja-814a17429"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn: Sipten Raja"
                  className="w-8 h-8 rounded-lg bg-[#140d26] border border-purple-500/30 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={GMAIL_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Gmail: siptenfreelance@gmail.com"
                  className="w-8 h-8 rounded-lg bg-[#140d26] border border-purple-500/30 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/templates?tab=proof"
                  title="Proof of Work"
                  className="w-8 h-8 rounded-lg bg-[#140d26] border border-purple-500/30 hover:border-purple-400 flex items-center justify-center text-purple-300 hover:text-white transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2.5">
              <h4 className="font-bold text-white">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/templates" className="hover:text-purple-300 transition-colors">
                    3D Shaders
                  </Link>
                </li>
                <li>
                  <Link href="/templates?tab=automation" className="hover:text-purple-300 transition-colors">
                    Automations
                  </Link>
                </li>
                <li>
                  <Link href="/templates?tab=data" className="hover:text-purple-300 transition-colors">
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/templates?tab=proof" className="hover:text-purple-300 transition-colors font-semibold text-cyan-300">
                    Proof of Work
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-2.5">
              <h4 className="font-bold text-white">Portfolio</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <button
                    type="button"
                    onClick={handleAutoDownloadResume}
                    className="hover:text-cyan-300 transition-colors font-semibold text-cyan-300 cursor-pointer flex items-center gap-1"
                  >
                    Resume <Download className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection("faqs", "FAQs")} className="hover:text-purple-300 transition-colors cursor-pointer">
                    FAQs
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection("journey", "Education & Certificates")} className="hover:text-purple-300 transition-colors cursor-pointer">
                    Certificates
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection("contact", "Contact")} className="hover:text-purple-300 transition-colors cursor-pointer">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2.5">
              <h4 className="font-bold text-white">Direct Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href={GMAIL_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors"
                  >
                    siptenfreelance@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sipten-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors"
                  >
                    github.com/sipten-labs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sipten-raja-814a17429"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection("home", "Home")} className="hover:text-purple-300 transition-colors cursor-pointer flex items-center gap-1 text-purple-300 font-semibold">
                    Back to Top <ArrowUp className="w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-[11px] text-slate-500">
            <span>© 2026 Sipten Raja. All rights reserved.</span>
            <span>Made with care in India</span>
          </div>

          <div className="relative z-10 select-none overflow-hidden pt-2 -mb-4 sm:-mb-7 text-center">
            <h2
              className="text-[13vw] lg:text-[10.5vw] font-black tracking-tighter leading-none uppercase text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500/80 via-purple-500/45 to-indigo-900/30 group-hover/footer:from-fuchsia-400 group-hover/footer:via-purple-300 group-hover/footer:to-cyan-400 transition-all duration-700 cursor-default"
              style={{
                WebkitTextStroke: "1px rgba(192, 132, 252, 0.28)",
                filter: "drop-shadow(0 -10px 40px rgba(192, 132, 252, 0.45))",
              }}
            >
              SIPTENRAJA
            </h2>
          </div>
        </footer>

      </main>

      {/* CERTIFICATE IMAGE POPUP MODAL */}
      {popupCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setPopupCert(null)}
        >
          <div
            className="w-full max-w-5xl bg-[#080d1d] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.25)] flex flex-col max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-[#0b1329] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white">
                    {popupCert.title}
                  </h3>
                  <p className="text-[11px] text-cyan-300">{popupCert.sub}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-[#060a17] p-1 rounded-xl border border-slate-800 gap-1">
                  <button
                    type="button"
                    onClick={() => setCertZoom((z) => Math.max(75, z - 25))}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-cyan-300 cursor-pointer transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono font-bold text-cyan-300 px-2 min-w-12 text-center">
                    {certZoom}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setCertZoom((z) => Math.min(250, z + 25))}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-cyan-300 cursor-pointer transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCertZoom(100)}
                    className="px-2 py-1 rounded-lg hover:bg-slate-800 text-[10px] font-mono text-slate-400 hover:text-white cursor-pointer flex items-center gap-1 transition-colors"
                    title="Fit Full Certificate (100%)"
                  >
                    <RotateCcw className="w-3 h-3" /> Fit
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setPopupCert(null)}
                  className="px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/30 text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors shrink-0"
                >
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </div>

            <div className="p-3 sm:p-5 bg-[#040710] overflow-auto flex-1 flex">
              <img
                src={popupCert.certImage}
                alt={popupCert.title}
                onClick={() => setCertZoom((z) => (z === 100 ? 150 : 100))}
                style={
                  certZoom === 100
                    ? { maxHeight: "76vh", maxWidth: "100%", width: "auto", height: "auto" }
                    : { height: `${(certZoom / 100) * 76}vh`, width: "auto", maxWidth: "none" }
                }
                className={`m-auto object-contain rounded-xl border border-slate-800 shadow-2xl transition-all duration-200 ${
                  certZoom > 100 ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}