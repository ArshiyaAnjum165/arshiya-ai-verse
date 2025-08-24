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
    technical: ["C", "C++", "Python", "SQL", "HTML", "CSS"],
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
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: "Task Management System",
      date: "Aug 2024", 
      tech: "Python, MySQL",
      description: "Advanced task allocation and tracking system with comprehensive analytics dashboard. Features include task assignment workflows, progress monitoring, deadline tracking, performance analytics, team collaboration tools, and automated notifications. MySQL database ensures robust data management and reporting capabilities.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Smart Architectural Building Sketch (AI)",
      date: "Jan 2025",
      tech: "Python, MongoDB",
      description: "Innovative AI-powered architectural sketch generator that transforms basic inputs into detailed building designs. Integrated with Google Earth for location-based context, featuring machine learning algorithms for intelligent design suggestions, 3D visualization capabilities, and collaborative design workflows. MongoDB provides scalable data storage for design templates and user projects.",
      icon: <Brain className="h-6 w-6" />
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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-premium relative overflow-hidden">
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
              href="https://drive.google.com/uc?export=download&id=YOUR_RESUME_FILE_ID" 
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
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-muted/50">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal/10 rounded-lg text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                      {project.icon}
                    </div>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-teal transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-navy">{project.tech}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Experience</h2>
          <div className="max-w-2xl mx-auto">
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
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-background">
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
      <section className="py-20 bg-muted/50">
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

      {/* Contact */}
      <section className="py-20 bg-background">
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
          <h2 className="text-4xl font-bold mb-6">
            Open to collaborations, internships, and opportunities 🚀
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's build something amazing together!
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://linkedin.com/in/arshiya-anjum-409009308" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/ArshiyaAnjum165" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-navy hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Let's Connect
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;