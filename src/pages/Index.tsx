import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Brain, 
  Users, 
  Clock,
  MessageSquare,
  Globe,
  Calendar,
  Award,
  ExternalLink,
  Database,
  Monitor,
  Smartphone,
  Rocket
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = {
    technical: ["C", "C++", "Python", "PHP", "SQL", "HTML", "CSS"],
    concepts: ["Data Structures & Algorithms", "DBMS", "Machine Learning", "Artificial Intelligence", "OOPS"],
    soft: ["Communication", "Teamwork", "Problem-Solving", "Time Management"],
    languages: ["English", "Kannada", "Hindi"]
  };

  const projects = [
    {
      title: "Sports Merchandise Sales",
      date: "Apr 2024",
      tech: "Python, Streamlit",
      description: "Comprehensive web platform for sports merchandise management featuring full CRUD operations, real-time inventory tracking, sales analytics dashboard, customer management system, and automated reporting. Built with Python backend and interactive Streamlit frontend for seamless user experience.",
      icon: <Monitor className="h-6 w-6" />,
      badge: "Web Application",
      githubUrl: "https://github.com/ArshiyaAnjum165/Python-Projects/tree/main/project"
    },
    {
      title: "Task Management System",
      date: "Aug 2024", 
      tech: "Python, MySQL",
      description: "Advanced task allocation and tracking system with comprehensive analytics dashboard. Features include task assignment workflows, progress monitoring, deadline tracking, performance analytics, team collaboration tools, and automated notifications. MySQL database ensures robust data management and reporting capabilities.",
      icon: <Database className="h-6 w-6" />,
      badge: "Backend System",
      githubUrl: "https://github.com/ArshiyaAnjum165/Python-Projects/tree/main/Task_Management_System"
    },
    {
      title: "Email Verification System",
      date: "June 2025",
      tech: "PHP, Text Files, Cron Jobs",
      description: "Automated email verification system with intelligent notification management. Features include daily cron job scheduling for automated SMS/email reminders, robust subscribe/unsubscribe functionality, user preference management, and comprehensive delivery tracking. Built with PHP backend using text file storage ensuring reliable 24-hour notification cycles.",
      icon: <Mail className="h-6 w-6" />,
      badge: "Automation",
      githubUrl: "https://github.com/ArshiyaAnjum165/Email-Verification"
    },
    {
      title: "Smart Architectural Building Sketch (AI)",
      date: "Jan 2025",
      tech: "Python, MongoDB",
      description: "Innovative AI-powered architectural sketch generator that transforms basic inputs into detailed building designs. Integrated with Google Earth for location-based context, featuring machine learning algorithms for intelligent design suggestions, 3D visualization capabilities, and collaborative design workflows. MongoDB provides scalable data storage for design templates and user projects.",
      icon: <Brain className="h-6 w-6" />,
      badge: "AI/ML",
      githubUrl: "https://github.com/ArshiyaAnjum165/Python-Projects/tree/main/SMART%20SKETCH"
    }
  ];

  const education = [
    {
      title: "B.E. Artificial Intelligence & Machine Learning",
      institution: "Ballari Institute of Technology & Management",
      period: "Dec 2022 – Present",
      grade: "CGPA 9.07/10"
    },
    {
      title: "Pre-University",
      institution: "VKJ PU College",
      period: "2020–2022",
      grade: "78.5%"
    },
    {
      title: "Secondary Education",
      institution: "S.E.S English Medium School",
      period: "2016–2020",
      grade: "92.3%"
    }
  ];

  const achievements = [
    {
      name: "HackB24 Hackathon participation",
      link: "https://drive.google.com/file/d/1IstM12qYssZ87CWzYvwX9_geQOYi4d25/view?usp=sharing"
    },
    {
      name: "School-level chess competitions",
      link: null
    }
  ];

  const certifications = [
    {
      name: "Python Internship – EZTS",
      link: "https://drive.google.com/file/d/1X0hCkD2E3SDp1-d8fXKpU_1uXjF-pCJp/view?usp=sharing"
    },
    {
      name: "Simulink Onramp – MATLAB",
      link: "https://drive.google.com/file/d/1ttAb4SOKOtnS05CGsD539pS9hrj4d_Nd/view?usp=sharing"
    },
    {
      name: "Google Cloud Generative AI Course",
      link: "https://drive.google.com/file/d/1yO2uNxSMHsguthICvUP1vcUBY-7r5ZZX/view?usp=drive_link"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-platinum/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-charcoal">Arshiya Anjum</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection('opportunities')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Opportunities
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-silver hover:text-teal transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal/10"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="animate-fade-up">
            <div className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center animate-float shadow-premium">
              <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center text-4xl font-bold">
                AA
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gold-light bg-clip-text text-transparent">
              Arshiya Anjum
            </h1>
            <div className="text-xl md:text-2xl mb-6 text-gold-light overflow-hidden whitespace-nowrap border-r-4 border-gold-light animate-typing">
              AI/ML Enthusiast & Problem Solver
            </div>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Passionate about building intelligent solutions and driving innovation through technology.
            </p>
            <a 
              href="https://drive.google.com/uc?export=download&id=1Z0Ns_-0Tm8RB-Yge8L2E40bVB8gAlEkg" 
              download="Arshiya_Anjum_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-accent text-charcoal border-2 border-gold/30 hover:border-gold hover:shadow-glow backdrop-blur-sm transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-charcoal animate-fade-up">About Me</h2>
            <Card className="shadow-premium animate-fade-up bg-gradient-card border-platinum/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-silver">
                  I am Arshiya Anjum, a dedicated student of Artificial Intelligence and Machine Learning with a strong foundation in programming and software development. Passionate about innovation, I thrive in collaborative environments where I can solve challenging problems and contribute to impactful projects. My goal is to leverage technology to create solutions that are efficient, scalable, and user-centric.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Code className="h-8 w-8 mx-auto mb-2 text-teal" />
                <CardTitle className="text-lg">Programming & Technical</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-teal/10 text-teal rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Brain className="h-8 w-8 mx-auto mb-2 text-teal" />
                <CardTitle className="text-lg">Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-navy/10 text-navy rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-teal" />
                <CardTitle className="text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-2 text-teal" />
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy">Featured Projects</h2>
            <p className="text-lg text-silver max-w-2xl mx-auto">
              Innovative solutions built with modern technologies, showcasing expertise in AI/ML, web development, and system automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 group relative overflow-hidden border-l-4 border-l-teal">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-teal/10 to-teal/20 rounded-xl text-teal group-hover:bg-gradient-to-br group-hover:from-teal group-hover:to-teal-light group-hover:text-white transition-all duration-300 shadow-sm">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-teal bg-teal/10 px-2 py-1 rounded-full">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium bg-muted/50 px-2 py-1 rounded-md">
                      {project.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-teal transition-colors duration-300 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-navy bg-navy/10 px-3 py-1 rounded-full inline-block mb-4">
                    {project.tech}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-teal text-teal hover:bg-teal hover:text-white transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <Code className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Python Intern</CardTitle>
                    <CardDescription className="text-navy font-medium">EZTS | Apr 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Developed and deployed 3 full-stack Python applications using modern frameworks</li>
                      <li>Implemented automated data processing pipelines, reducing manual work by 60%</li>
                      <li>Collaborated with cross-functional teams to deliver projects ahead of schedule</li>
                      <li>Optimized database queries resulting in 40% performance improvement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Technical Learning:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Advanced Python programming with focus on web development frameworks</li>
                      <li>Database design and optimization using MySQL and MongoDB</li>
                      <li>RESTful API development and integration</li>
                      <li>Version control with Git and collaborative development practices</li>
                      <li>Agile development methodologies and project management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal"></div>
              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start gap-6 pb-8">
                  <div className="relative z-10 w-8 h-8 bg-teal rounded-full flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <Card className="flex-1 shadow-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.title}</CardTitle>
                      <CardDescription className="text-navy font-medium">{edu.institution}</CardDescription>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{edu.period}</span>
                        <span className="font-semibold text-teal">{edu.grade}</span>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-navy">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      {achievement.link ? (
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-foreground hover:text-teal transition-colors group"
                        >
                          <Award className="h-5 w-5 text-teal group-hover:scale-110 transition-transform" />
                          <span className="group-hover:underline">{achievement.name}</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Award className="h-5 w-5 text-teal" />
                          <span>{achievement.name}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-navy">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-4">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-foreground hover:text-teal transition-colors group"
                      >
                        <ExternalLink className="h-5 w-5 text-teal group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">{cert.name}</span>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for New Opportunities */}
      <section id="opportunities" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy">Looking for New Opportunities</h2>
            <p className="text-lg text-silver max-w-2xl mx-auto">
              Seeking challenging roles where I can apply my skills and continue growing as a professional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <Brain className="h-12 w-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2 text-navy">AI/ML Engineer</h3>
                <p className="text-muted-foreground">Building intelligent systems and implementing machine learning solutions</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <Code className="h-12 w-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2 text-navy">Software Developer</h3>
                <p className="text-muted-foreground">Creating robust applications and scalable software solutions</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <Database className="h-12 w-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2 text-navy">Backend Developer</h3>
                <p className="text-muted-foreground">Designing and implementing server-side logic and database systems</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2 text-navy">Full Stack Developer</h3>
                <p className="text-muted-foreground">End-to-end web development with modern technologies</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2 text-navy">Intern/Trainee</h3>
                <p className="text-muted-foreground">Eager to learn and contribute to innovative projects</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <Rocket className="h-12 w-12 mx-auto mb-4 text-teal" />
                <h3 className="text-xl font-semibold mb-2 text-navy">Research Associate</h3>
                <p className="text-muted-foreground">Contributing to cutting-edge research in AI and technology</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-navy">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-teal" />
                  <span>Ballari, Karnataka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-teal" />
                  <a href="mailto:anjumarshiya016@gmail.com" className="text-teal hover:underline">
                    anjumarshiya016@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal" />
                  <span>+91 73381 86008</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-teal" />
                  <a href="https://linkedin.com/in/arshiya-anjum-409009308" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    linkedin.com/in/arshiya-anjum-409009308
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-teal" />
                  <a href="https://github.com/ArshiyaAnjum165" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    github.com/ArshiyaAnjum165
                  </a>
                </div>
              </div>
            </div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value="2d0c8665-7fb8-46bd-94ed-da80f20e86c7" />
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  {submitMessage && (
                    <div className={`p-3 rounded-md text-center ${
                      submitMessage.includes('✅') 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {submitMessage}
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-teal hover:bg-teal-light hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Open to collaborations, internships, and opportunities 🚀
          </h2>
          <p className="text-xl mb-8 opacity-90 text-white">
            Let's build something amazing together!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:anjumarshiya016@gmail.com"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              title="Email"
            >
              <Mail className="h-8 w-8 text-white" />
            </a>
            <a 
              href="https://wa.me/917338186008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              title="WhatsApp"
            >
              <MessageSquare className="h-8 w-8 text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/arshiya-anjum-409009308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="h-8 w-8 text-white" />
            </a>
            <a 
              href="https://github.com/ArshiyaAnjum165" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              title="GitHub"
            >
              <Github className="h-8 w-8 text-white" />
            </a>
          </div>
            <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-navy hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('mailto:anjumarshiya016@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/917338186008', '_blank')}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;