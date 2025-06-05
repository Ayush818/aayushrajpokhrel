"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Brain,
  Database,
  Cloud,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hi! I'm Aayush's AI assistant. Ask me anything about his experience, skills, or projects!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToMessages = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToMessages();
  }, [messages]);

  // Simulated AI responses based on CV content
  interface AIResponses {
    experience: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    ai: string;
    default: string;
    about: string;
  }

  const getAIResponse = async (question: string): Promise<string> => {
    const responses: AIResponses = {
      experience:
        "Aayush has 5+ years of experience transitioning from QA Engineering to AI Development. He's currently a Senior Software Engineer at Niural (2023-2025) and previously worked at Benekiva (2020-2023). He's built production-ready AI agents including an HR AI Agent and Research AI Tool.",
      skills:
        "His technical skills include AI/ML Development with LangChain, FastAPI, LLM Integration (Ollama, OpenAI, Gemini), Vector Databases (ChromaDB), RAG systems, and Intent Classification. He's also proficient in Python, JavaScript, AWS, and has strong experience in API development and testing.",
      projects:
        "Key projects include: 1) HR AI Agent - Built with LangChain, FastAPI, Ollama (Mistral 7B), ChromaDB with features like intent classification, RAG system for policy Q&A, and automated leave form processing. 2) Research AI Tool - Implemented using LangChain and Gemini API for intelligent research workflows.",
      education:
        "Aayush holds a BSc in Computing (First Class Honors) from The British College, Kathmandu.",
      contact:
        "You can reach Aayush at aayushraj.pokhrel@gmail.com, phone: +977 9806077818, or connect via LinkedIn and GitHub. He's based in Kathmandu, Nepal.",
      ai: "Aayush specializes in AI application development with hands-on experience in RAG systems, LLM integration, intent classification, and conversational AI. He's successfully deployed both local models (Ollama) and cloud-based models (OpenAI, Gemini).",
      default:
        "I'd be happy to help! You can ask me about Aayush's experience, technical skills, AI projects, education, or how to contact him. What would you like to know?",
      about:
        "I am ARP, Aayush's AI assistant. I can provide information about his professional background, skills, and projects. Feel free to ask me anything related to Aayush's career or expertise.",
    };

    // Simple keyword matching for demo
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes("about") || lowerQuestion.includes("who"))
      return responses.about;
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("work"))
      return responses.experience;
    if (lowerQuestion.includes("skill") || lowerQuestion.includes("technology"))
      return responses.skills;
    if (lowerQuestion.includes("project") || lowerQuestion.includes("built"))
      return responses.projects;
    if (lowerQuestion.includes("education") || lowerQuestion.includes("degree"))
      return responses.education;
    if (
      lowerQuestion.includes("contact") ||
      lowerQuestion.includes("email") ||
      lowerQuestion.includes("reach")
    )
      return responses.contact;
    if (
      lowerQuestion.includes("ai") ||
      lowerQuestion.includes("ml") ||
      lowerQuestion.includes("rag")
    )
      return responses.ai;

    return responses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage;
    setInputMessage("");
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate API delay
    setTimeout(async () => {
      const botResponse = await getAIResponse(userMessage);
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  interface ScrollToSectionProps {
    sectionId: string;
  }

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Aayush <span className="text-purple-400">Raj</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-purple-400 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-white/80 hover:text-purple-400 transition-colors text-left"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-white/80 hover:text-purple-400 transition-colors text-left"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-white/80 hover:text-purple-400 transition-colors text-left"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-purple-400 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white">
              AR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Aayush Raj Pokhrel
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Senior Software Engineer in Test | AI Application Developer | Web
              Developer
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12">
              Bringing 5+ years of experience in software testing—designing and
              executing robust end-to-end testing strategies to ensure quality
              and reliability—while now transitioning into AI development.
              Currently focused on building intelligent solutions with RAG
              systems, LLM integration, and production-ready AI applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:aayushraj.pokhrel@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Get In Touch
              </a>
              <button
                onClick={() => setIsChatOpen(true)}
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Chat with ARP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Senior Software Engineer transitioning from 5+ years of QA
                Engineering to AI Application Development with hands-on
                experience building production-ready AI agents. I specialize in
                developing RAG systems, implementing LLM-powered applications,
                and integrating multiple AI models.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans from traditional software testing to
                cutting-edge AI development, with a strong foundation in
                FastAPI, vector databases, and full-stack AI application
                architecture. I've successfully built HR AI Agent and Research
                AI Tool with sophisticated intent classification and automated
                workflows.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" size={20} />
                  <span className="text-white/80">
                    Based in Kathmandu, Nepal
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="text-purple-400" size={20} />
                  <span className="text-white/80">
                    5+ Years in Software Engineering
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-purple-400" size={20} />
                  <span className="text-white/80">AI/ML Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="text-purple-400" size={20} />
                  <span className="text-white/80">RAG Systems Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Senior Software Engineer in Test
                  </h3>
                  <p className="text-purple-400 font-semibold">Niural, USA</p>
                </div>
                <span className="text-white/60 mt-2 md:mt-0">
                  May 2023 - 2025
                </span>
              </div>
              <ul className="text-white/80 space-y-2">
                <li>
                  • Built comprehensive end-to-end automation framework using
                  Cypress, Synpress (Web3), pytest, and K6
                </li>
                <li>
                  • Reduced test execution time by 60% through parallel testing
                  optimization
                </li>
                <li>
                  • Led QA strategy for production releases, maintaining test
                  coverage across cloud-based applications
                </li>
                <li>
                  • Integrated AWS services (DynamoDB, CloudWatch, EC2) into QA
                  workflows
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Software Engineer in Test - Lead
                  </h3>
                  <p className="text-purple-400 font-semibold">Benekiva, USA</p>
                </div>
                <span className="text-white/60 mt-2 md:mt-0">2020 - 2023</span>
              </div>
              <ul className="text-white/80 space-y-2">
                <li>
                  • Successfully transitioned QA team from manual to automated
                  testing
                </li>
                <li>
                  • Designed Selenium-based automation frameworks and JMeter
                  performance testing suites
                </li>
                <li>
                  • Implemented comprehensive validation with MongoDB/Mongoose
                </li>
                <li>
                  • Mentored junior engineers and established QA best practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            AI Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                HR AI Agent
              </h3>
              <p className="text-white/80 mb-6">
                Comprehensive HR assistant with multi-component AI pipeline
                featuring intent classification, RAG system for policy Q&A, and
                intelligent form processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  LangChain
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  FastAPI
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Ollama
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  ChromaDB
                </span>
              </div>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Intent classification for multiple query types</li>
                <li>• RAG system with semantic search</li>
                <li>• JWT authentication & authorization</li>
                <li>• Automated leave form processing</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Research AI Tool
              </h3>
              <p className="text-white/80 mb-6">
                Intelligent research automation tool built with LangChain and
                Gemini API for advanced research capabilities and structured
                data extraction.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  LangChain
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Gemini API
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                  Python
                </span>
              </div>
              <ul className="text-white/70 text-sm space-y-1">
                <li>• Advanced research workflow automation</li>
                <li>• Structured data extraction</li>
                <li>• Prompt engineering optimization</li>
                <li>• Chain management with LangChain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Brain className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">
                AI/ML Development
              </h3>
              <ul className="text-white/80 space-y-2">
                <li>• LangChain & FastAPI</li>
                <li>• LLM Integration (Ollama, OpenAI, Gemini)</li>
                <li>• Vector Databases (ChromaDB)</li>
                <li>• RAG Systems & Intent Classification</li>
                <li>• HuggingFace Transformers</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Code className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">
                Programming
              </h3>
              <ul className="text-white/80 space-y-2">
                <li>• Python & JavaScript/TypeScript</li>
                <li>• RESTful API Development</li>
                <li>• SQLAlchemy ORM & MongoDB</li>
                <li>• JWT Authentication</li>
                <li>• pytest, Cypress, Selenium</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <Cloud className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4">
                Cloud & DevOps
              </h3>
              <ul className="text-white/80 space-y-2">
                <li>• AWS (DynamoDB, EC2, CloudWatch)</li>
                <li>• Local LLM Deployment (Ollama)</li>
                <li>• CI/CD with GitHub Actions</li>
                <li>• Git Version Control</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Let's Connect</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss your next
            AI project or opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="mailto:aayushraj.pokhrel@gmail.com"
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Mail className="text-purple-400" size={24} />
              <span className="text-white">aayushraj.pokhrel@gmail.com</span>
            </a>
            <a
              href="tel:+9779806077818"
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Phone className="text-purple-400" size={24} />
              <span className="text-white">+977 9806077818</span>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/aayush-raj-pokhrel-baa14415a/"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors"
            >
              <Linkedin className="text-white" size={24} />
            </a>
            <a
              href="https://github.com/Ayush818"
              className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition-colors"
            >
              <Github className="text-white" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col border border-white/20">
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <Bot className="text-purple-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Chat with Aayush's AI
                </h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white/60 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === "user"
                          ? "bg-purple-600"
                          : "bg-white/20"
                      }`}
                    >
                      {message.type === "user" ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-purple-400" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl p-4 ${
                        message.type === "user"
                          ? "bg-purple-600 text-white"
                          : "bg-white/10 text-white/90"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={16} className="text-purple-400" />
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-6 border-t border-white/20">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about Aayush's experience, skills, or projects..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed p-3 rounded-xl transition-colors"
                >
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Trigger Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 p-4 rounded-full shadow-2xl transition-colors z-40"
      >
        <Bot size={24} className="text-white" />
      </button>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2025 Aayush Raj Pokhrel. Built with Next.js and AI-powered
            interactions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
