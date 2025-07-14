import React, { useState } from "react";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  ChevronDown,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import PitchVideo from "./PitchVideo";
import ContactSection from "./Contact";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sample data - replace with your actual information
  const personalInfo = {
    name: "Naana Shifah",
    title: "Frontend Software Engineer",
    email: "nanashifah2@gmail.com",
    phone: "+256 779684042",
    location: "Gulu City, ",
    github: "https://github.com/Anonymous2024-spec",
    linkedin: "nkedin.com/in/shifah-naana-18966b281/",
    elevatorPitch:
      "Creative frontend developer with a strong eye for design and a focus on building responsive, accessible, and performant web interfaces. I enjoy turning ideas into interactive experiences that users love.",
    bio: "I'm a frontend developer with a passion for clean design, smooth user interactions, and modern JavaScript frameworks. I specialize in building responsive, accessible interfaces using tools like React, Tailwind CSS, and Next.js. Whether working solo or with a team, I aim to create intuitive products that offer real value and a great user experience.",
  };

  const skills = [
    {
      category: "Frontend",
      icon: "🎨",
      items: [
        "HTML5",
        "Tailwind CSS",
        "Bootstrap",
        "React",
        "TypeScript",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      icon: "🛠️",
      items: ["PHP", "Node.js (Express)"],
    },
    {
      category: "Database",
      icon: "🗄️",
      items: ["MongoDB", "MySQL"],
    },
    {
      category: "Mobile",
      icon: "📱",
      items: ["React Native"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      github: "https://github.com/johndoe/ecommerce",
      demo: "https://demo-ecommerce.com",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%234f46e5'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='white'%3EE-Commerce%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Socket.io", "Vuetify"],
      github: "https://github.com/johndoe/taskmanager",
      demo: "https://demo-taskmanager.com",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%2310b981'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='white'%3ETask Manager%3C/text%3E%3C/svg%3E",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Data visualization dashboard for weather analytics with interactive charts, real-time data updates, and predictive modeling.",
      technologies: ["Python", "Django", "D3.js", "Pandas", "PostgreSQL"],
      github: "https://github.com/johndoe/weather-dashboard",
      demo: "https://demo-weather.com",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f59e0b'/%3E%3Ctext x='200' y='100' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='24' fill='white'%3EWeather Analytics%3C/text%3E%3C/svg%3E",
    },
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download your actual resume file
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Replace with actual path
    link.download = "shifah_nana_resume.pdf";
    link.click();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleContactSubmit = () => {
    // In a real implementation, you'd collect form data and send to your backend
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === section
                        ? "text-blue-400"
                        : "text-gray-300"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-xl lg:max-w-none">
                {personalInfo.elevatorPitch}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
                >
                  Hire Me
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href={personalInfo.github}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/img.JPG"
                  alt={personalInfo.name}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover border border-gray-600 shadow-2xl"
                />

                {/* Decorative elements */}
                <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                My Story
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Location:</span>
                  <p className="font-semibold">{personalInfo.location}</p>
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>
                  <p className="font-semibold">{personalInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Elevator Pitch Video Placeholder */}
            <div className="bg-gray-700 rounded-lg overflow-hidden">
              <PitchVideo />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">{skillGroup.icon}</div>
                  <h3 className="text-xl font-semibold">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex space-x-6 mt-8">
                <a
                  href={personalInfo.github}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                onClick={handleContactSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Location & Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Location</h3>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Gulu City, Uganda
                </p>
                <p className="text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {personalInfo.email}
                </p>
                <p className="text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {personalInfo.phone}
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Let's connect and collaborate on exciting projects!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 {personalInfo.name}. Built with love & dedication in
              Uganda.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
