"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // Smooth scroll behavior for navbar links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")!;
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 60,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  const skills = [
    { name: "React.js", level: "90%" },
    { name: "Next.js", level: "85%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "JavaScript (ES6+)", level: "90%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "UI/UX Design", level: "80%" },
  ];

  const projects = [
    {
      title: "Reporting Chatbot",
      desc: `A smart chatbot designed to help Shopify shop owners analyze their store data. 
It generates visual charts, text-based insights, and actionable suggestions, helping clients understand sales trends, customer behavior, and product performance. 
I implemented data parsing, chart generation, and interactive features for seamless user experience, demonstrating full-stack problem-solving and data visualization skills.`,
      gif: "/images/chat.gif",
      link: "https://github.com/nrimen/Repporting-chat-bot",
    },
    {
      title: "Flex Living Dashboard",
      desc: `A modern dashboard for Flex Living property managers to monitor guest reviews and property performance. 
It integrates with APIs (mocked Hostaway Reviews), allows filtering by rating, category, channel, or date, and highlights trends and recurring issues. 
I developed both the frontend (React/Next.js) and backend (Node.js/Express), ensuring smooth communication between layers and a clean, user-friendly interface for data-driven decision-making.`,
      gif: "/images/flexliving.gif",
      link: "https://github.com/nrimen/TheFlexLiving-frontend",
    },
    {
      title: "Fresh Paris",
      desc: `An Open Data web application for helping users discover cool spots in Paris, like green spaces, fountains, and refreshing areas. 
It provides multi-dataset filtering, easy-to-read results tables, and an intuitive interface for quickly finding locations based on type, date, and user preferences. 
This project showcases my ability to handle heterogeneous datasets, implement responsive React interfaces, and optimize user experience for data-heavy applications.`,
      gif: "/projects/freshparis.gif",
      link: "https://github.com/nrimen/FreshParisReact",
    },
  ];


  return (
    <main className="font-sans scroll-smooth">
      {/* 🌟 Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 text-white backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-red-500">H.Noure.</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-red-500">Home</a>
            <a href="#about" className="hover:text-red-500">About</a>
            <a href="#projects" className="hover:text-red-500">Projects</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* 🏠 Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center  from-gray-900 via-black to-gray-800 text-white px-6 md:px-16 py-20"
      >
        {/* 🖼️ Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[45%] flex justify-center mt-12 md:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 from-red-600 to-pink-500 rounded-full blur opacity-70 animate-pulse"></div>
            <img
              src="/images/nrimen.png"
              alt="Noure portrait"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-red-500 shadow-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-[55%] space-y-6 md:pr-10 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm <span className="text-red-500">Nour el imen <br /> Hassine</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 tracking-wide">
            Front-End Engineer & Web Designer
          </h2>

          <p className="text-lg text-gray-300 max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed">
            I craft responsive, elegant, and functional web experiences — merging
            clean design with efficient code. Passionate about UI/UX, React, and
            modern web technologies.
          </p>

          <a
            href="#projects"
            className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg text-white text-lg font-medium shadow-md hover:shadow-xl transition-all duration-300"
          >
            See My Work
          </a>
        </motion.div>


      </section>


      <section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-black px-6 md:px-16 py-20"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 space-y-6 md:pr-10 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate Front-End Engineer & Web Designer. I build clean,
            modern, and responsive web interfaces with React.js, Next.js,
            and Tailwind CSS. My focus is creating seamless user experiences
            while writing maintainable and efficient code.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I enjoy collaborating in agile teams, solving complex problems,
            and continuously learning new technologies to improve my craft.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 space-y-6"
        >
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="font-medium text-gray-600">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-red-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 🚀 Projects Section */}
      <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <h2 className="text-4xl font-bold text-center mb-20 text-black dark:text-white">
          Projects
        </h2>

        <div className="max-w-[90%] mx-auto flex flex-col gap-32"> {/* Widen container */}
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* GIF Display */}
              <div className="relative w-full md:w-3/4 rounded-2xl overflow-hidden shadow-xl"> {/* wider GIF */}
                <img
                  src={p.gif}
                  alt={p.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 space-y-6">
                <h3 className="text-3xl font-semibold text-black dark:text-white">
                  {p.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  target="_blank"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📬 Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Me</h2>
        <p className="text-lg md:text-xl mb-10 text-center text-gray-300">
          Let's collaborate or chat about tech! Feel free to reach out via email or connect on social media.
        </p>

        {/* Email Button */}
        <a
          href="mailto:noure@example.com"
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Email
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-12">
          {/* GitHub */}
          <a
            href="https://github.com/nrimen"
            target="_blank"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.625-5.479 5.921.429.369.813 1.096.813 2.21v3.281c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nour-el-imen/"
            target="_blank"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.02 24V7.98h4.92V24H.02zm7.5-16.02h4.71v2.2h.07c.66-1.25 2.28-2.57 4.69-2.57 5.01 0 5.93 3.3 5.93 7.59V24h-4.92v-6.91c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V24h-4.91V7.98z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/nrimen"
            target="_blank"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.902 4.902 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.085 4.923 4.923 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.513 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
        </div>
      </section>



      {/* ⚫ Footer */}
      <footer className="bg-gray-900 text-center text-gray-400 py-6">
        <p>© {new Date().getFullYear()} H.Noure. Built with ❤️ using Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
