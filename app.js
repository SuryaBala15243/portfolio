const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ============================================================
   ICONS (minimal inline SVG set)
============================================================ */
const Icon = ({
  path,
  size = 18,
  ...p
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...p
}, path);
const GithubIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement("path", {
    d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21"
  })
});
const LinkedinIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 9h3.8v2s1-2.2 4-2.2c2.7 0 4.2 1.8 4.2 5.2V21h-4v-6.3c0-1.5-.6-2.5-2-2.5-1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V21h-4V9z"
  }))
});
const MailIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "4.5",
    width: "19",
    height: "15",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 6.5 9 6.5 9-6.5"
  }))
});
const PhoneIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement("path", {
    d: "M4.5 3.5h4l1.5 4.5-2.5 1.5a12 12 0 0 0 5.5 5.5l1.5-2.5 4.5 1.5v4a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3 5.1 1.5 1.5 0 0 1 4.5 3.5Z"
  })
});
const ArrowRightIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
});
const DownloadIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 11 6 6 6-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21h16"
  }))
});
const MapPinIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9.5",
    r: "2.3"
  }))
});
const CodeIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m8 6-5 6 5 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 6 5 6-5 6"
  }))
});
const DbIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "5.5",
    rx: "7.5",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 5.5V12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 12v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12"
  }))
});
const LayersIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 3 9 5-9 5-9-5 9-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 13 9 5 9-5"
  }))
});
const CpuIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "6",
    width: "12",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
  }))
});
const WrenchIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement("path", {
    d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z"
  })
});
const AwardIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.2 12.9-1.7 7.6 5.5-2.7 5.5 2.7-1.7-7.6"
  }))
});
const CheckIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5 9 18 20 6"
  })
});
const ExternalIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 4h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4 10 14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6"
  }))
});
const GraduationIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m2 8 10-5 10 5-10 5-10-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 8v6"
  }))
});
const TrophyIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 4h8v5a4 4 0 0 1-8 0V4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5H4v1.5A3.5 3.5 0 0 0 7.5 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5h4v1.5A3.5 3.5 0 0 1 16.5 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 13v3M14 13v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 20h8M9 20v-2.5h6V20"
  }))
});
const SendIcon = p => /*#__PURE__*/React.createElement(Icon, {
  ...p,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m3 11 18-8-8 18-2.5-7L3 11Z"
  }))
});

/* ============================================================
   DATA — sourced only from verified attachments / user instructions
============================================================ */
const NAV_LINKS = [{
  id: "home",
  label: "Home"
}, {
  id: "about",
  label: "About"
}, {
  id: "skills",
  label: "Skills"
}, {
  id: "projects",
  label: "Projects"
}, {
  id: "education",
  label: "Education"
}, {
  id: "certifications",
  label: "Certifications"
}, {
  id: "contact",
  label: "Contact"
}];
const CONTACT = {
  email: "bksurya1012@gmail.com",
  github: "github.com/SuryaBala15243",
  githubUrl: "https://github.com/SuryaBala15243",
  linkedin: "linkedin.com/in/surya-b-k-50b910354",
  linkedinUrl: "https://linkedin.com/in/surya-b-k-50b910354",
  phone: "+91-6382105335",
  phoneHref: "tel:+916382105335",
  location: "Chennai, Tamil Nadu"
};
const SKILLS = [{
  title: "Programming",
  icon: CodeIcon,
  items: ["Java", "SQL"]
}, {
  title: "Backend",
  icon: LayersIcon,
  items: ["Spring Boot", "Spring MVC", "REST APIs", "JDBC", "JPA / Hibernate"]
}, {
  title: "Database",
  icon: DbIcon,
  items: ["MySQL", "MongoDB"]
}, {
  title: "Frontend",
  icon: CodeIcon,
  items: ["HTML", "CSS", "JavaScript", "React"]
}, {
  title: "Core Computer Science",
  icon: CpuIcon,
  items: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
}, {
  title: "Tools",
  icon: WrenchIcon,
  items: ["Git", "GitHub", "VS Code", "Maven"]
}];
const PROJECTS = {
  featured: {
    tag: "Featured Project",
    title: "SmartCare",
    period: "Mar 2026 – May 2026",
    glyph: "SC",
    image: "assets/project-smartcare.jpg",
    description: "A digital healthcare and wellness platform that helps users access healthcare information and services conveniently. Built with features for doctor and hospital discovery, diet and nutrition guidance, yoga and exercise resources, home remedies, and healthcare educational videos — designed for people who may find it difficult to access healthcare facilities in person.",
    tech: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript", "MySQL"],
    github: null,
    demo: null
  },
  others: [{
    title: "Weather App",
    glyph: "WA",
    image: "assets/project-weather.jpg",
    period: "May 2026",
    description: "A real-time weather application for searching weather information by location, integrating a Weather API to display live temperature and conditions through a responsive, user-friendly interface.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    github: null,
    demo: null
  }, {
    title: "JDBC Database Connectivity",
    glyph: "DB",
    image: "assets/project-jdbc.jpg",
    period: "Mar 2026",
    description: "A Java-based project establishing connectivity between an application and a MySQL database — executing SQL queries, processing results, and applying core JDBC concepts for reliable database interaction.",
    tech: ["Java", "JDBC", "MySQL", "SQL"],
    github: null,
    demo: null
  }]
};
const COURSEWORK = ["Data Structures & Algorithms", "Java Programming", "DBMS", "Operating Systems", "Artificial Intelligence & Machine Learning", "Internet Programming", "Full Stack Software Development", "Big Data Analytics"];
const CERTIFICATIONS = [{
  name: "Database Management Systems",
  org: "NPTEL · IIT Kharagpur",
  achievement: "Silver Certification",
  score: 75,
  scoreLabel: "75%",
  preview: "assets/nptel_dbms_preview.jpg",
  file: "assets/NPTEL_DBMS_Certificate.pdf"
}, {
  name: "Python for Data Science",
  org: "NPTEL · IIT Madras",
  achievement: "Elite Certificate",
  score: 60,
  scoreLabel: "60%",
  preview: "assets/nptel_python_preview.jpg",
  file: "assets/NPTEL_Python_Certificate.pdf"
}, {
  name: "Learn Programming with Java - An Interactive Way",
  org: "Infosys Springboard",
  achievement: "Course Completion",
  score: null,
  scoreLabel: null,
  preview: "assets/infosys_java_preview.jpg",
  file: "assets/Infosys_Java_Certificate.pdf"
}, {
  name: "ReactJS",
  org: "Infosys Springboard",
  achievement: "Course Completion",
  score: null,
  scoreLabel: null,
  preview: "assets/infosys_react_preview.jpg",
  file: "assets/Infosys_React_Certificate.pdf"
}];
const ACHIEVEMENTS = [{
  title: "NPTEL — DBMS",
  desc: "Silver Certification, scored 75%",
  icon: TrophyIcon
}, {
  title: "NPTEL — Python for Data Science",
  desc: "Elite Certificate, scored 60%",
  icon: AwardIcon
}, {
  title: "Infosys Springboard",
  desc: "Completed Java Programming & React.js",
  icon: CheckIcon
}];

/* ============================================================
   Scroll reveal hook — IntersectionObserver
============================================================ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.15
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================================================
   Navbar
============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: "-45% 0px -50% 0px",
      threshold: 0
    });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  const go = id => e => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: `navbar ${scrolled ? "scrolled" : ""}`
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    className: "nav-logo",
    onClick: go("home")
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), " SURYA B.K"), /*#__PURE__*/React.createElement("ul", {
    className: `nav-links ${open ? "open" : ""}`
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${l.id}`,
    className: active === l.id ? "active" : "",
    onClick: go(l.id)
  }, l.label)))), /*#__PURE__*/React.createElement("a", {
    className: "nav-cta",
    href: "assets/Surya_BK_Resume.pdf",
    download: true
  }, /*#__PURE__*/React.createElement(DownloadIcon, {
    size: 14
  }), " Resume"), /*#__PURE__*/React.createElement("button", {
    className: `nav-toggle ${open ? "open" : ""}`,
    onClick: () => setOpen(o => !o),
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)));
}

/* ============================================================
   Hero
============================================================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-kicker reveal"
  }, "HELLO, I'M"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-name reveal"
  }, "SURYA B.K"), /*#__PURE__*/React.createElement("div", {
    className: "hero-role reveal reveal-delay-1"
  }, "JAVA DEVELOPER"), /*#__PURE__*/React.createElement("p", {
    className: "hero-desc reveal reveal-delay-1"
  }, "Java Developer focused on backend development, databases, problem solving, and building practical software applications using Java and Spring technologies."), /*#__PURE__*/React.createElement("div", {
    className: "hero-btns reveal reveal-delay-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#projects",
    className: "btn btn-primary",
    onClick: e => {
      e.preventDefault();
      document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
      });
    }
  }, "View Projects ", /*#__PURE__*/React.createElement(ArrowRightIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("a", {
    href: "assets/Surya_BK_Resume.pdf",
    download: true,
    className: "btn btn-ghost"
  }, /*#__PURE__*/React.createElement(DownloadIcon, {
    size: 16
  }), " Download Resume")), /*#__PURE__*/React.createElement("div", {
    className: "hero-socials reveal reveal-delay-3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "social-btn",
    href: CONTACT.githubUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(GithubIcon, null)), /*#__PURE__*/React.createElement("a", {
    className: "social-btn",
    href: CONTACT.linkedinUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement(LinkedinIcon, null)), /*#__PURE__*/React.createElement("a", {
    className: "social-btn",
    href: `mailto:${CONTACT.email}`,
    "aria-label": "Email"
  }, /*#__PURE__*/React.createElement(MailIcon, null)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-photo-col reveal reveal-delay-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-ring"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ring-static"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ring-spin"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ring-spin2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "photo-inner"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/profile.jpg",
    alt: "Surya B.K, Java Developer"
  })), /*#__PURE__*/React.createElement("div", {
    className: "photo-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), " Open to opportunities")))));
}

/* ============================================================
   About
============================================================ */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "A student building real backend skills"), /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-text reveal reveal-delay-1"
  }, /*#__PURE__*/React.createElement("p", null, "I'm a ", /*#__PURE__*/React.createElement("strong", null, "Computer Science Engineering student"), " at St. Joseph's Institute of Technology, Chennai, and an aspiring ", /*#__PURE__*/React.createElement("strong", null, "Java Developer"), " with a strong interest in backend development, databases, problem solving, and software development."), /*#__PURE__*/React.createElement("p", null, "I work primarily with ", /*#__PURE__*/React.createElement("strong", null, "Java, Spring Boot, JDBC, SQL, MySQL and JPA / Hibernate"), ", alongside core web technologies, to build practical applications rather than just theoretical exercises. I care about writing clean, working code and understanding how systems actually connect underneath the surface."), /*#__PURE__*/React.createElement("p", null, "Outside of coursework, I've completed certifications in Database Management Systems and Python for Data Science through NPTEL, and worked through Java Programming and React.js content on Infosys Springboard — always aiming to back up what's on paper with something I've actually built."), /*#__PURE__*/React.createElement("div", {
    className: "about-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "8.0"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "CGPA after 6 semesters")), /*#__PURE__*/React.createElement("div", {
    className: "glass stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "2027"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Expected graduation")), /*#__PURE__*/React.createElement("div", {
    className: "glass stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "4"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Certifications earned")), /*#__PURE__*/React.createElement("div", {
    className: "glass stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Hands-on projects")))), /*#__PURE__*/React.createElement("div", {
    className: "glass focus-card reveal reveal-delay-2"
  }, /*#__PURE__*/React.createElement("h3", null, "Currently focused on"), /*#__PURE__*/React.createElement("div", {
    className: "focus-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "focus-item"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 17
  }), " Core Java & Object-Oriented Programming"), /*#__PURE__*/React.createElement("div", {
    className: "focus-item"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 17
  }), " Spring Boot for backend services"), /*#__PURE__*/React.createElement("div", {
    className: "focus-item"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 17
  }), " Database design with MySQL & MongoDB"), /*#__PURE__*/React.createElement("div", {
    className: "focus-item"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 17
  }), " Data Structures & Algorithms"), /*#__PURE__*/React.createElement("div", {
    className: "focus-item"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 17
  }), " Building and shipping small, real projects")))));
}

/* ============================================================
   Skills
============================================================ */
function Skills() {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "Skills"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "Technologies I work with"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub reveal"
  }, "A focused stack centered on Java and backend development, supported by the databases and web fundamentals needed to ship complete applications."), /*#__PURE__*/React.createElement("div", {
    className: "skills-grid"
  }, SKILLS.map((cat, i) => /*#__PURE__*/React.createElement("div", {
    className: `glass skill-card reveal reveal-delay-${i % 3 + 1}`,
    key: cat.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "skill-card-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(cat.icon, {
    size: 17
  })), /*#__PURE__*/React.createElement("h3", null, cat.title)), /*#__PURE__*/React.createElement("div", {
    className: "skill-badges"
  }, cat.items.map(it => /*#__PURE__*/React.createElement("span", {
    className: "badge",
    key: it
  }, it)))))));
}

/* ============================================================
   Projects
============================================================ */
function ProjectLinks({
  github,
  demo
}) {
  if (!github && !demo) {
    return /*#__PURE__*/React.createElement("p", {
      className: "form-note",
      style: {
        marginTop: 4
      }
    }, "Repository link coming soon");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "link-row"
  }, github && /*#__PURE__*/React.createElement("a", {
    href: github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(GithubIcon, {
    size: 15
  }), " Code"), demo && /*#__PURE__*/React.createElement("a", {
    href: demo,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(ExternalIcon, {
    size: 15
  }), " Live Demo"));
}
function Projects() {
  const f = PROJECTS.featured;
  return /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "Work"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "Projects"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub reveal"
  }, "Practical builds — no inflated claims, just what's actually been made."), /*#__PURE__*/React.createElement("div", {
    className: "glass project-featured reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-featured-visual"
  }, f.image ? /*#__PURE__*/React.createElement("img", {
    className: "project-visual-img",
    src: f.image,
    alt: `${f.title} preview`
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "grid-overlay"
  }), /*#__PURE__*/React.createElement("span", {
    className: "glyph"
  }, f.glyph))), /*#__PURE__*/React.createElement("div", {
    className: "project-featured-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-tag"
  }, f.tag, f.period ? ` · ${f.period}` : ""), /*#__PURE__*/React.createElement("h3", null, f.title), /*#__PURE__*/React.createElement("p", null, f.description), /*#__PURE__*/React.createElement("div", {
    className: "tech-row"
  }, f.tech.map(t => /*#__PURE__*/React.createElement("span", {
    className: "badge",
    key: t
  }, t))), /*#__PURE__*/React.createElement(ProjectLinks, {
    github: f.github,
    demo: f.demo
  }))), /*#__PURE__*/React.createElement("div", {
    className: "projects-grid"
  }, PROJECTS.others.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: `glass project-card reveal reveal-delay-${i + 1}`,
    key: p.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "project-card-visual"
  }, p.image ? /*#__PURE__*/React.createElement("img", {
    className: "project-visual-img",
    src: p.image,
    alt: `${p.title} preview`
  }) : /*#__PURE__*/React.createElement("span", {
    className: "glyph"
  }, p.glyph)), /*#__PURE__*/React.createElement("div", {
    className: "project-card-body"
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.description), /*#__PURE__*/React.createElement("div", {
    className: "tech-row"
  }, p.tech.map(t => /*#__PURE__*/React.createElement("span", {
    className: "badge",
    key: t
  }, t))), /*#__PURE__*/React.createElement(ProjectLinks, {
    github: p.github,
    demo: p.demo
  }))))));
}

/* ============================================================
   Education
============================================================ */
function Education() {
  return /*#__PURE__*/React.createElement("section", {
    id: "education"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "Education"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "Academic background"), /*#__PURE__*/React.createElement("div", {
    className: "glass edu-card reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "edu-icon"
  }, /*#__PURE__*/React.createElement(GraduationIcon, {
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "edu-head"
  }, /*#__PURE__*/React.createElement("h3", null, "B.E. Computer Science and Engineering"), /*#__PURE__*/React.createElement("span", {
    className: "edu-period"
  }, "2023 – 2027")), /*#__PURE__*/React.createElement("div", {
    className: "edu-school"
  }, "St. Joseph's Institute of Technology, Chennai"), /*#__PURE__*/React.createElement("div", {
    className: "edu-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cgpa-pill"
  }, "CGPA: 8.0 (after 6 semesters)")), /*#__PURE__*/React.createElement("div", {
    className: "course-title"
  }, "Relevant Coursework"), /*#__PURE__*/React.createElement("div", {
    className: "course-grid"
  }, COURSEWORK.map(c => /*#__PURE__*/React.createElement("span", {
    className: "badge",
    key: c
  }, c))))));
}

/* ============================================================
   Certifications
============================================================ */
function CertCard({
  cert,
  delay
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `glass cert-card reveal reveal-delay-${delay}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "cert-preview"
  }, cert.preview ? /*#__PURE__*/React.createElement("img", {
    src: cert.preview,
    alt: `${cert.name} certificate preview`
  }) : /*#__PURE__*/React.createElement("div", {
    className: "no-preview"
  }, /*#__PURE__*/React.createElement(AwardIcon, {
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    className: "cert-ribbon"
  }, cert.achievement)), /*#__PURE__*/React.createElement("div", {
    className: "cert-body"
  }, /*#__PURE__*/React.createElement("h3", null, cert.name), /*#__PURE__*/React.createElement("div", {
    className: "cert-org"
  }, cert.org), cert.score !== null && /*#__PURE__*/React.createElement("div", {
    className: "cert-score-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "score-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "score-bar-fill",
    style: {
      width: `${cert.score}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "score-val"
  }, cert.scoreLabel)), cert.file ? /*#__PURE__*/React.createElement("a", {
    href: cert.file,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-ghost btn-sm"
  }, /*#__PURE__*/React.createElement(ExternalIcon, {
    size: 14
  }), " View Certificate") : /*#__PURE__*/React.createElement("p", {
    className: "form-note"
  }, "Certificate file available on request")));
}
function Certifications() {
  return /*#__PURE__*/React.createElement("section", {
    id: "certifications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "Certifications"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "Verified learning"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub reveal"
  }, "Every score and achievement here matches the original certificate."), /*#__PURE__*/React.createElement("div", {
    className: "certs-grid"
  }, CERTIFICATIONS.map((c, i) => /*#__PURE__*/React.createElement(CertCard, {
    cert: c,
    key: c.name,
    delay: i % 3 + 1
  }))));
}

/* ============================================================
   Achievements
============================================================ */
function Achievements() {
  return /*#__PURE__*/React.createElement("section", {
    id: "achievements"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "Achievements"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "Milestones so far"), /*#__PURE__*/React.createElement("div", {
    className: "ach-grid"
  }, ACHIEVEMENTS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: `glass ach-card reveal reveal-delay-${i + 1}`,
    key: a.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "ach-icon"
  }, /*#__PURE__*/React.createElement(a.icon, {
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, a.title), /*#__PURE__*/React.createElement("p", null, a.desc))))));
}

/* ============================================================
   Contact
============================================================ */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    // No backend/email service is wired up — this opens the user's mail client
    // with the message pre-filled, so nothing is silently "faked" as sent.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "Website Visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow reveal"
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title reveal"
  }, "Let's talk"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub reveal"
  }, "Open to Java developer roles, internships, and backend engineering opportunities."), /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass contact-info-card reveal reveal-delay-1"
  }, /*#__PURE__*/React.createElement("h3", null, "Get in touch"), /*#__PURE__*/React.createElement("p", null, "Reach out directly — I usually reply within a day or two."), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: `mailto:${CONTACT.email}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(MailIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, CONTACT.email))), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: CONTACT.githubUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(GithubIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "GitHub"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, CONTACT.github))), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: CONTACT.linkedinUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(LinkedinIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, CONTACT.linkedin))), /*#__PURE__*/React.createElement("a", {
    className: "contact-row",
    href: CONTACT.phoneHref
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(PhoneIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Phone"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, CONTACT.phone))), /*#__PURE__*/React.createElement("div", {
    className: "contact-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(MapPinIcon, {
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, CONTACT.location)))), /*#__PURE__*/React.createElement("form", {
    className: "glass form-card reveal reveal-delay-2",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    placeholder: "What would you like to talk about?"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SendIcon, {
    size: 15
  }), " Send Message"), /*#__PURE__*/React.createElement("p", {
    className: "form-note"
  }, "This opens your email app with the message pre-filled — no backend is connected, so nothing is sent silently."), sent && /*#__PURE__*/React.createElement("div", {
    className: "form-success"
  }, /*#__PURE__*/React.createElement(CheckIcon, {
    size: 16
  }), " Your email app should now be open with this message ready to send."))));
}

/* ============================================================
   Footer
============================================================ */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "foot-logo"
  }, "SURYA B.K"), /*#__PURE__*/React.createElement("p", null, "Java Developer · Computer Science Engineering Student"), /*#__PURE__*/React.createElement("div", {
    className: "foot-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: CONTACT.githubUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "GitHub"), /*#__PURE__*/React.createElement("a", {
    href: CONTACT.linkedinUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CONTACT.email}`
  }, "Email")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18
    }
  }, "© ", new Date().getFullYear(), " Surya B.K. Built with React."));
}

/* ============================================================
   App
============================================================ */
function App() {
  useReveal();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bg-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-grid"
  }), /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Education, null), /*#__PURE__*/React.createElement(Certifications, null), /*#__PURE__*/React.createElement(Achievements, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
