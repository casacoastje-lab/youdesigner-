import { PortfolioProject } from '../types';

export const DESIGNER_INFO = {
  name: "Younes Oubihi",
  role: "Visual Identity Designer & Video Editor",
  subtitle: "Visual Identity • Video Editing • Deflook Agency",
  location: "Taroudant, Morocco",
  email: "youdesigner36@gmail.com",
  phone: "+212 767374925",
  whatsappNumber: "+212 767374925",
  whatsapp: "https://wa.me/212767374925",
  portfolioUrl: "https://younes-oubihi.vercel.app/",
  instagram: "https://instagram.com/younes_oubihi",
  behance: "https://behance.net/younesoubihi",
  linkedin: "https://linkedin.com/in/younes-oubihi-b6aa83190",
  facebook: "https://facebook.com/All.About.Graphic.Design.11",
  yearsExperience: "4+",
  projectsCompleted: "24",
  appreciations: "20",
  clientSatisfaction: "100%",
  globalClients: "Worldwide",
  bio: "Taroudant-based Visual Identity Designer and Brand Identity Creator with 4+ years of experience. Founder of Deflook agency.",
  availabilityStatus: "Available for Projects",
  studioCaption: "Younes Oubihi Design Studio"
};

export const INITIAL_PROJECTS: PortfolioProject[] = [
  {
    id: "epis-4",
    title: "Epis 4",
    client: "Deflook Media Productions",
    category: "VIDEO EDITING",
    year: "2026",
    date: "27 Jun 2026",
    tagline: "Cinematic narrative editing, kinetic typography & sound design.",
    description: "Post-production video editing for Epis 4 featuring multi-cam pacing, color grading, and spatial sound design.",
    coverImage: "/projects/thumbs/epis_4_poster.jpg",
    videoUrl: "https://www.youtube.com/embed/DnyI6Ik7InY?si=LdSW5sSoBnwlPv-A",
    gallery: [
      "/projects/thumbs/epis_4_poster.jpg",
      "/projects/banner_younesoudesigner.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: true,
    role: "Video Editor",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Epis 4 Full Master Video", type: "raster", fileFormat: "MP4 (1080p)", size: "47 MB", downloadUrl: "/projects/samar_coffee_commercial.mp4" }
    ],
    tags: ["Video Editing", "Color Grading", "Sound Design"]
  },
  {
    id: "samar-coffee-commercial",
    title: "Samar Coffee Commercial",
    client: "Samar Coffee Co.",
    category: "VIDEO EDITING",
    year: "2024",
    date: "27 Feb 2024",
    tagline: "Commercial video editing with macro shots & sound design.",
    description: "Promotional commercial video campaign crafted for Samar Coffee emphasizing artisanal roasting atmosphere.",
    coverImage: "/projects/thumbs/samar_coffee_poster.jpg",
    videoUrl: "/projects/samar_coffee_commercial.mp4",
    gallery: [
      "/projects/thumbs/samar_coffee_poster.jpg"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: true,
    role: "Commercial Video Editor",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Samar Coffee Commercial Video", type: "raster", fileFormat: "MP4 (1080p)", size: "47 MB", downloadUrl: "/projects/samar_coffee_commercial.mp4" }
    ],
    tags: ["Commercial", "Video Editing", "Sound Design"]
  },
  {
    id: "nova-brand-identity",
    title: "NOVA Brand Identity",
    client: "NOVA Technologies",
    category: "BRAND DESIGNS",
    year: "2026",
    date: "18 Jul 2026",
    tagline: "Futuristic visual identity system and monogram branding.",
    description: "Visual identity design for NOVA featuring geometric vector branding, digital guidelines, and stationery.",
    coverImage: "/projects/banner_novagym.png",
    gallery: [
      "/projects/banner_novagym.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: true,
    role: "Brand Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "NOVA Brand Graphics", type: "vector", fileFormat: "PNG / Vector", size: "High-Res", downloadUrl: "/projects/banner_novagym.png" }
    ],
    tags: ["Brand Identity", "Logo Design", "Branding"]
  },
  {
    id: "mini-sweet-logo-presentation",
    title: "Mini Sweet Logo Presentation",
    client: "Mini Sweet Pastry",
    category: "BRAND DESIGNS",
    year: "2026",
    date: "18 Jul 2026",
    tagline: "Artisan bakery and pastry logo design & packaging presentation.",
    description: "Visual identity and logo design presentation crafted for Mini Sweet bakery.",
    coverImage: "/projects/banner_younesoudesigner.png",
    gallery: [
      "/projects/banner_younesoudesigner.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: true,
    role: "Logo & Packaging Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Mini Sweet Brand Presentation", type: "vector", fileFormat: "PNG", size: "High-Res", downloadUrl: "/projects/banner_younesoudesigner.png" }
    ],
    tags: ["Logo Design", "Packaging", "Bakery Identity"]
  },
  {
    id: "visual-identity-mastery-events",
    title: "Visual Identity Mastery Events",
    client: "Mastery Events Summit",
    category: "BRAND DESIGNS",
    year: "2024",
    date: "4 May 2024",
    tagline: "Keynote conference branding, stage typography & event signage.",
    description: "Event brand identity designed for Mastery Events Summit including stage graphics, badges, and visual systems.",
    coverImage: "/projects/banner_mediamasteryevent.png",
    pdfUrl: "/projects/visual_identity_mastery_events.pdf",
    pdfFileName: "Visual Identity Mastery Events.pdf",
    gallery: [
      "/projects/banner_mediamasteryevent.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: false,
    role: "Lead Event Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Mastery Events Presentation PDF", type: "guideline", fileFormat: "PDF Deck", size: "2.1 MB", downloadUrl: "/projects/visual_identity_mastery_events.pdf" }
    ],
    tags: ["Event Branding", "Brand Identity", "Print Design"]
  },
  {
    id: "ulo-presentation",
    title: "ULO Presentation",
    client: "ULO Studio",
    category: "BRAND DESIGNS",
    year: "2024",
    date: "24 Jan 2024",
    tagline: "Minimalist brand presentation deck with bespoke layout system.",
    description: "Brand identity and presentation deck crafted for ULO Studio.",
    coverImage: "/projects/banner_ulo.png",
    pdfUrl: "/projects/ulo_presentation.pdf",
    pdfFileName: "ULO presentation.pdf",
    gallery: [
      "/projects/banner_ulo.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: false,
    role: "Brand Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "ULO Presentation Deck PDF", type: "guideline", fileFormat: "PDF", size: "592 KB", downloadUrl: "/projects/ulo_presentation.pdf" }
    ],
    tags: ["Presentation Design", "Brand Guidelines", "Minimalist"]
  },
  {
    id: "makadam-brand-identity",
    title: "Makadam Urban Brand Identity",
    client: "Makadam Group",
    category: "BRAND DESIGNS",
    year: "2025",
    date: "12 May 2025",
    tagline: "Industrial automotive and lifestyle brand visual system.",
    description: "Brand identity created for Makadam featuring bold typography and modern graphic collateral.",
    coverImage: "/projects/banner_makadam.png",
    gallery: [
      "/projects/banner_makadam.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: false,
    role: "Brand Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Makadam Brand Asset", type: "vector", fileFormat: "PNG", size: "High-Res", downloadUrl: "/projects/banner_makadam.png" }
    ],
    tags: ["Brand Identity", "Logo Design", "Urban"]
  },
  {
    id: "cite-de-linnovation",
    title: "Cité de l'Innovation Branding",
    client: "Cité de l'Innovation Souss-Massa",
    category: "BRAND DESIGNS",
    year: "2024",
    date: "15 Oct 2024",
    tagline: "Technology incubator visual identity & event promotion systems.",
    description: "Visual identity and digital promotional branding created for Cité de l'Innovation Souss-Massa.",
    coverImage: "/projects/banner_citedelinnovation.png",
    gallery: [
      "/projects/banner_citedelinnovation.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: false,
    role: "Visual Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Innovation Hub Banner", type: "vector", fileFormat: "PNG", size: "High-Res", downloadUrl: "/projects/banner_citedelinnovation.png" }
    ],
    tags: ["Brand Identity", "Tech Hub", "Morocco"]
  },
  {
    id: "ilynk-visual-identity",
    title: "Visual Identity ILYNK",
    client: "ILYNK Agency",
    category: "BRAND DESIGNS",
    year: "2024",
    date: "20 Sep 2024",
    tagline: "Digital connection brand identity with interconnected geometric nodes.",
    description: "Modern brand identity designed for ILYNK featuring clean geometric node graphics and tech branding.",
    coverImage: "/projects/banner_novagym.png",
    pdfUrl: "/projects/visual_identity_ilynk.pdf",
    pdfFileName: "visual identity ILYNK.pdf",
    gallery: [
      "/projects/banner_novagym.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: false,
    role: "Brand Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "ILYNK Presentation PDF", type: "guideline", fileFormat: "PDF Deck", size: "1.8 MB", downloadUrl: "/projects/visual_identity_ilynk.pdf" }
    ],
    tags: ["Brand Identity", "Tech Branding", "Vector Logo"]
  },
  {
    id: "yod-presentation",
    title: "Presentation YOD",
    client: "YOD Creative",
    category: "BRAND DESIGNS",
    year: "2024",
    date: "14 Jun 2024",
    tagline: "Creative studio portfolio deck and custom typography identity.",
    description: "Visual identity and pitch presentation deck created for YOD.",
    coverImage: "/projects/banner_ulo.png",
    pdfUrl: "/projects/presentation_yod.pdf",
    pdfFileName: "presentation YOD.pdf",
    gallery: [
      "/projects/banner_ulo.png"
    ],
    colorPalette: [],
    typography: [],
    deliverablesCount: 1,
    featured: false,
    role: "Brand Identity Designer",
    challenge: "",
    solution: "",
    impactMetrics: [],
    deliverables: [
      { id: "del-1", name: "Presentation YOD PDF", type: "guideline", fileFormat: "PDF Deck", size: "1.4 MB", downloadUrl: "/projects/presentation_yod.pdf" }
    ],
    tags: ["Presentation", "Brand Guidelines", "Typography"]
  }
];

export const INITIAL_SERVICES = [
  {
    id: "serv-1",
    iconName: "Palette",
    title: "Brand & Visual Identity Design",
    subtitle: "Complete Brand Systems",
    description: "Professional brand identity design from logo concepts to complete visual identity systems and brand guidelines.",
    deliverables: ["Primary & Secondary Logo Marks", "Brand Guidelines", "Color & Typography Rules", "Export Formats (AI, SVG, PNG)"],
    timeline: "1–3 Weeks",
    highlightTag: "Core Service"
  },
  {
    id: "serv-2",
    iconName: "Film",
    title: "Video Editing & Post-Production",
    subtitle: "Cinematic & Social Video",
    description: "High quality commercial video editing, color grading, sound design, and motion graphics for brands and social media.",
    deliverables: ["1080p / 4K Video Masters", "Vertical Format Cutdowns (9:16)", "Color Grading & Audio Mixing"],
    timeline: "3–7 Days",
    highlightTag: "High Impact"
  },
  {
    id: "serv-3",
    iconName: "Layers",
    title: "Logo Design & Vector Craft",
    subtitle: "Mathematical Marks",
    description: "Custom geometric vector logos and monograms built for modern businesses across print and digital screens.",
    deliverables: ["Full Vector Package (AI, EPS, SVG, PNG)", "Light/Dark Versions", "Favicon & App Icon"],
    timeline: "5–10 Days",
    highlightTag: "Vector Precision"
  }
];
