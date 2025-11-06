"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  const skills = [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
    { name: "JavaScript", level: 90, icon: "⚡" },
    { name: "HTML & CSS", level: 95, icon: "🌐" },
    { name: "UI/UX Design", level: 80, icon: "✨" },
  ];

  const projects = [
    {
      title: "Reporting Chatbot",
      desc: "A smart chatbot designed to help Shopify shop owners analyze their store data with visual charts, text-based insights, and actionable suggestions for understanding sales trends and customer behavior.",
      gif: "/images/chat.gif",
      link: "https://github.com/nrimen/Repporting-chat-bot",
      tech: ["React", "D3.js", "Node.js", "Shopify API"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Flex Living Dashboard",
      desc: "A modern dashboard for property managers to monitor guest reviews and performance. Features API integration, advanced filtering, and trend analysis with a clean, data-driven interface.",
      gif: "/images/flexliving.gif",
      link: "https://github.com/nrimen/TheFlexLiving-frontend",
      tech: ["Next.js", "Express", "REST API", "TailwindCSS"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Fresh Paris",
      desc: "An Open Data web application for discovering cool spots in Paris like green spaces and fountains. Features multi-dataset filtering and optimized UX for data-heavy applications.",
      gif: "/projects/freshparis.gif",
      link: "https://github.com/nrimen/FreshParisReact",
      tech: ["React", "Open Data API", "Leaflet.js", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <main className="font-sans bg-neutral-950 text-white overflow-x-hidden">
      {/* Enhanced Cursor follower with trail effect */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-red-500/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      <motion.div
        className="fixed w-12 h-12 border border-pink-500/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 150 }}
      />

      {/* Futuristic Navbar with slide-in animation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-950/80 backdrop-blur-2xl border-b border-neutral-800/50 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="text-2xl font-black tracking-tight bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                H.NOURE
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.div 
              className="flex gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["Home", "About", "Projects", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-sm font-medium tracking-wide text-neutral-400 hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with parallax and advanced animations */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background with parallax */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ y: smoothY }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </motion.div>

        {/* Enhanced Floating orbs with more complex animations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.2, 0.9, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 50, -50, 0],
              scale: [1, 1.3, 0.8, 1],
              rotate: [360, 270, 180, 90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"
            animate={{
              x: [-50, 50, -50],
              y: [-50, 50, -50],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-8 py-32"
          style={{ opacity, scale }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content with stagger animations */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                    Front-End Engineer
                  </span>
                </motion.div>

                <motion.h1 
                  className="text-7xl md:text-8xl font-black leading-none tracking-tight"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="block text-neutral-100"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    Hey, I'm
                  </motion.span>
                  <motion.span 
                    className="block mt-2 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    Nour el imen
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    Hassine
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-xl text-neutral-400 leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                Crafting pixel-perfect, blazingly fast web experiences that merge 
                <motion.span 
                  className="text-red-400 font-semibold"
                  whileHover={{ scale: 1.1, display: "inline-block" }}
                >
                  {" "}aesthetics{" "}
                </motion.span>
                with 
                <motion.span 
                  className="text-pink-400 font-semibold"
                  whileHover={{ scale: 1.1, display: "inline-block" }}
                >
                  {" "}performance
                </motion.span>.
              </motion.p>

              <motion.div className="flex gap-4" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl font-semibold overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-neutral-700 hover:border-red-500 rounded-2xl font-semibold hover:bg-red-500/5 transition-all duration-300"
                  whileHover={{ scale: 1.05, borderColor: "#ef4444" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>

              {/* Stats with counter animation */}
              <motion.div
                className="flex gap-8 pt-8 border-t border-neutral-800"
                variants={containerVariants}
              >
                {[
                  { label: "Projects", value: "15+" },
                  { label: "Experience", value: "3+ Yrs" },
                  { label: "Technologies", value: "20+" },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - 3D Card Effect with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <motion.div 
                className="relative group"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced Glowing background */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-3xl blur-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Image container with border animation */}
                <motion.div 
                  className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-2 rounded-3xl border border-neutral-700/50"
                  whileHover={{ borderColor: "rgba(239, 68, 68, 0.5)" }}
                >
                  <img
                    src="/images/nrimen.png"
                    alt="Noure portrait"
                    className="w-full h-auto rounded-2xl"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent rounded-2xl" />
                </motion.div>

                {/* Floating badge with bounce animation */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-neutral-900 border border-neutral-700 rounded-2xl px-6 py-3 backdrop-blur-xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-semibold">Available for work</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-neutral-500"
          >
            <motion.span 
              className="text-xs uppercase tracking-widest"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll
            </motion.span>
            <div className="w-6 h-10 border-2 border-neutral-700 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-red-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section with reveal animations */}
      <section id="about" className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl font-black mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.p 
              className="text-neutral-500 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Building the web, one pixel at a time
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                icon: "🚀",
                title: "Fast Performance",
                desc: "Optimized code and modern practices for lightning-fast load times"
              },
              {
                icon: "🎨",
                title: "Beautiful Design",
                desc: "Pixel-perfect interfaces that users love to interact with"
              },
              {
                icon: "📱",
                title: "Fully Responsive",
                desc: "Seamless experience across all devices and screen sizes"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  scale: 1.05
                }}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid with progressive reveal */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span 
                      className="text-3xl"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <span className="font-bold text-lg">{skill.name}</span>
                  </div>
                  <motion.span 
                    className="text-red-400 font-bold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5, type: "spring" }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #ef4444, #ec4899)"
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white/20 rounded-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "400%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{ width: "25%" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section with advanced reveal */}
      <section id="projects" className="relative py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 
              className="text-6xl font-black mb-4"
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Featured Work
              </span>
            </motion.h2>
            <motion.p 
              className="text-neutral-500 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Showcasing my best projects
            </motion.p>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Project Image with hover effects */}
                <motion.div
                  className={`group relative ${index % 2 === 1 ? "md:col-start-2" : ""}`}
                  whileHover={{ scale: 1.03, rotateY: index % 2 === 0 ? -2 : 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900"
                    whileHover={{ boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)" }}
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                      initial={{ opacity: 0.1 }}
                      whileHover={{ opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.img
                      src={project.gif}
                      alt={project.title}
                      className="w-full h-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  
                  {/* Animated Project number */}
                  <motion.div 
                    className="absolute -top-8 -left-8 text-9xl font-black text-neutral-900 opacity-50"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    0{index + 1}
                  </motion.div>
                </motion.div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.h3 
                      className="text-4xl font-black"
                      whileHover={{ x: 10, color: "#ef4444" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-neutral-400 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.desc}
                    </motion.p>
                  </motion.div>

                  {/* Tech Stack with stagger */}
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        variants={itemVariants}
                        className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-semibold text-neutral-300"
                        whileHover={{ 
                          scale: 1.1, 
                          borderColor: "#ef4444",
                          backgroundColor: "#1f1f1f",
                          y: -3
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    View Project
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with bold animations */}
      <section id="contact" className="relative py-32 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-7xl md:text-8xl font-black mb-6"
              initial={{ scale: 0.5, rotateX: -90 }}
              whileInView={{ scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Let's Talk
              </span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-neutral-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Got a project in mind? Let's create something amazing together.
            </motion.p>
          </motion.div>

          <motion.a
            href="mailto:nourelimen972@gmail.com"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 30px 60px rgba(239, 68, 68, 0.4)",
              rotate: [0, -1, 1, 0]
            }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-xl font-bold shadow-2xl shadow-red-500/25 transition-all duration-300"
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </motion.svg>
            nourelimen972@gmail.com
          </motion.a>

          {/* Social Links with floating animation */}
          <motion.div
            className="flex gap-8 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { href: "https://github.com/nrimen", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.625-5.479 5.921.429.369.813 1.096.813 2.21v3.281c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" },
              { href: "https://www.linkedin.com/in/nour-el-imen/", icon: "M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.02 24V7.98h4.92V24H.02zm7.5-16.02h4.71v2.2h.07c.66-1.25 2.28-2.57 4.69-2.57 5.01 0 5.93 3.3 5.93 7.59V24h-4.92v-6.91c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V24h-4.91V7.98z" },
              { href: "https://twitter.com/nrimen", icon: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.923 4.923 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-red-500 flex items-center justify-center transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.15,
                  backgroundColor: "#1f1f1f",
                  borderColor: "#ef4444",
                  rotate: [0, -10, 10, 0]
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-neutral-400 group-hover:text-red-500 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d={social.icon} />
                </motion.svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer with fade in animation */}
      <motion.footer 
        className="bg-black border-t border-neutral-800 text-center text-neutral-500 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="text-sm"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} H.Noure. Crafted with passion using Next.js & Tailwind CSS
        </motion.p>
      </motion.footer>
    </main>
  );
}