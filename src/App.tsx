import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  ChevronDown,
  Code,
  Database,
  Brain,
  Wrench,
  Award,
  Calendar,
  TrendingUp,
  Sparkles,
  Rocket,
  Zap,
} from "lucide-react";

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#hero"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            SP
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-2 p-4 border border-slate-700"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[100px]"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <div className="relative w-36 h-36 mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full blur-lg opacity-50"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 p-[3px]">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SP
                </span>
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Shivam </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Pathak
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-cyan-200 to-gray-200 font-semibold mb-6"
        >
          Computer Engineering Student | Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about building intelligent systems with{" "}
          <span className="text-cyan-400">Python</span>,{" "}
          <span className="text-blue-400">FastAPI</span>, and{" "}
          <span className="text-teal-400">Machine Learning</span>. Creating
          solutions that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              View Projects
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#"
            className="group px-8 py-4 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-2xl border border-slate-600 hover:border-cyan-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Section wrapper
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

// Section Title with animation
function SectionTitle({
  title,
  highlight,
  description,
}: {
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full mx-auto mb-4"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}

// About Section
function About() {
  const stats = [
    {
      label: "Projects Completed",
      value: "6+",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Technologies",
      value: "15+",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Certifications",
      value: "4+",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Years Experience",
      value: "Fresher",
      icon: Calendar,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <Section id="about" className="bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <SectionTitle
        title="About"
        highlight="Me"
        description="Passionate developer, continuous learner, and problem solver"
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <p className="text-xl text-gray-300 leading-relaxed pl-4">
              I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Computer Engineering student
              </span>{" "}
              with a deep passion for Data Analysis, Artificial Intelligence,
              and Data Science.
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed text-lg">
            I specialize in building{" "}
            <span className="text-white font-medium">robust APIs</span>,
            developing{" "}
            <span className="text-white font-medium">intelligent systems</span>,
            and crafting{" "}
            <span className="text-white font-medium">
              Dashboards that turn data into insights
            </span>
            . My problem-solving mindset helps me tackle complex challenges.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or working on innovative side
            projects.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {["Python", "FastAPI", "Docker", "Machine Learning", "SQL"].map(
              (tag) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-4xl font-bold text-white mb-1">
                  {item.value}
                </p>
                <p className="text-gray-400">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// Skill Card Component
function SkillCard({
  category,
  icon: Icon,
  skills,
  color,
  delay,
}: {
  category: string;
  icon: React.ElementType;
  skills: { name: string; level: number }[];
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-7 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8 }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{category}</h3>
        </div>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <span className="text-cyan-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: delay + 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Skills Section
function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      category: "Backend Development",
      icon: Database,
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "REST APIs", level: 90 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      category: "Machine Learning & AI",
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      skills: [
        { name: "Scikit-Learn", level: 82 },
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 },
        { name: "Data Analysis", level: 80 },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: Wrench,
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Streamlit", level: 85 },
      ],
    },
  ];

  return (
    <Section id="skills" className="bg-slate-800/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_50%)]"></div>

      <SectionTitle
        title="My"
        highlight="Skills"
        description="Technologies and tools I've mastered through projects and continuous learning"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.category}
            {...category}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
}

// Project Card Component
function ProjectCard({
  title,
  description,
  features,
  gradient,
  url,
  delay,
}: {
  title: string;
  description: string;
  features: string[];
  gradient: string;
  url: string;
  delay: number;
}) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 block cursor-pointer"
      whileHover={{ y: -8 }}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 ${gradient}`}></div>

      {/* Animated glow on hover */}
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      <div className="relative z-10 p-7">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-base mb-5 leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 mb-5">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              {feature}
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
          View Project
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </motion.a>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "InSightx : AI-Powered Retail Analytics",
      description:
        "AI-driven retail analytics dashboard providing actionable insights for retail businesses with advanced forecasting.",
      features: [
        "Sales forecasting",
        "Customer insights",
        "Inventory optimization",
      ],
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      url: "https://github.com/shivampathak91/InsightX",
    },
    {
      title: "Insurance Premium Prediction",
      description:
        "ML model deployed with FastAPI for accurate insurance premium predictions based on user data.",
      features: ["ML predictions", "REST API", "Real-time analysis"],
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      url: "https://github.com/shivampathak91/insurancepredictionfastapistreamlit",
    },
    {
      title: "Patient Management API",
      description:
        "Complete REST API using FastAPI for comprehensive patient data management with advanced features.",
      features: ["CRUD operations", "Search & filtering", "Data validation"],
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      url: "https://github.com/shivampathak91/fastapi_patientmanagementsystem",
    },
    {
      title: "Netflix UI Clone",
      description:
        "Pixel-perfect Netflix-inspired streaming interface with modern responsive design.",
      features: ["Responsive design", "Smooth animations", "Interactive UI"],
      gradient: "bg-gradient-to-r from-red-500 to-rose-500",
      url: "https://github.com/shivampathak91/Netflix.Tailwind",
    },
  ];

  return (
    <Section id="projects" className="bg-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]"></div>

      <SectionTitle
        title="Featured"
        highlight="Projects"
        description="A collection of projects showcasing my skills in AI and API Design"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 0.1} />
        ))}
      </div>
    </Section>
  );
}

// Certifications Section
function Certifications() {
  const certifications = [
    {
      name: "Python Certification",
      issuer: "Coursera",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SQL Certification",
      issuer: "HackerRank",
      icon: Database,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "ML Certification",
      issuer: "Coursera",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "FastAPI Certification",
      issuer: "Udemy",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <Section id="certifications" className="bg-slate-800/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_50%)]"></div>

      <SectionTitle
        title="My"
        highlight="Certifications"
        description="Professional credentials validating my expertise"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 text-center hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -8 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            ></div>

            <div className="relative z-10">
              <div
                className={`w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
              >
                <cert.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// GitHub Stats Section
function GitHubStats() {
  const stats = [
    { label: "Contributions", value: "500+", icon: TrendingUp },
    { label: "Repositories", value: "20+", icon: Github },
    { label: "Current Streak", value: "15 days", icon: Calendar },
    { label: "Total Commits", value: "800+", icon: Code },
  ];

  const languages = [
    { name: "Python", percentage: 35 },
    { name: "FastAPI", percentage: 15 },
    { name: "SQL", percentage: 5 },
  ];

  return (
    <Section id="github" className="bg-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <SectionTitle
        title="GitHub"
        highlight="Statistics"
        description="My open-source contributions and coding activity"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 text-center hover:border-cyan-500/30 transition-all duration-500"
            whileHover={{ y: -5 }}
          >
            <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 relative z-10"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="px-5 py-2.5 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600/50"
            >
              {lang.name}
            </span>
          ))}
        </div>

        <div className="h-5 rounded-full overflow-hidden bg-slate-700/50 flex">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            style={{ width: "35%" }}
          />
          <div className="h-full bg-yellow-500" style={{ width: "25%" }} />
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
            style={{ width: "20%" }}
          />
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-red-500"
            style={{ width: "15%" }}
          />
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{ width: "5%" }}
          />
        </div>
        <p className="text-center text-gray-400 mt-4">Top Languages Used</p>
      </motion.div>
    </Section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pathakshivam9136@email.com",
      href: "mailto:pathakshivam9136@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9136850561",
      href: "tel:+919136850561",
    },
    { icon: MapPin, label: "Location", value: "India", href: "#" },
  ];

  return (
    <Section id="contact" className="bg-slate-800/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.08),transparent_60%)]"></div>

      <SectionTitle
        title="Get In"
        highlight="Touch"
        description="Let's connect and build something amazing together"
      />

      <div className="grid lg:grid-cols-2 gap-12 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="flex items-center gap-5 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-cyan-500/25 transition-all duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{item.label}</p>
                <p className="text-white text-lg font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}

          {/* Social links */}
          <div className="flex gap-4 pt-4">
            <motion.a
              href="https://github.com/shivampathak91"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-700/50 border border-slate-600 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-600/50 transition-all"
              whileHover={{ y: -3 }}
            >
              <Github className="w-6 h-6 text-gray-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shivam-pathak91"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-2xl bg-slate-700/50 border border-slate-600 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-600/50 transition-all"
              whileHover={{ y: -3 }}
            >
              <Linkedin className="w-6 h-6 text-gray-300" />
            </motion.a>
            <motion.a
              href="mailto:pathakshivam9136@email.com"
              className="w-14 h-14 rounded-2xl bg-slate-700/50 border border-slate-600 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-600/50 transition-all"
              whileHover={{ y: -3 }}
            >
              <Mail className="w-6 h-6 text-gray-300" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 bg-slate-700/30 border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/70 transition-colors"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-6 py-4 bg-slate-700/30 border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/70 transition-colors"
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={6}
            className="w-full px-6 py-4 bg-slate-700/30 border border-slate-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/70 transition-colors resize-none"
            required
          />
          <motion.button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white font-semibold rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-10 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-6">
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              whileHover={{ y: -3 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400">
          &copy; 2026 Shivam Pathak. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <GitHubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
