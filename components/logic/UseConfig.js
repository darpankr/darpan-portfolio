import { useState, useEffect } from "react";

export function UseConfig() {

  const initialConfig = {
    "Home": {
      "name": "Darpan",
      "profession": "Software Engineer",
      "description": "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community."
    },
    "profile": {
      "name": "Darpan Kumar",
      "title": "Full Stack Developer",
      "location": "Bangalore",
      "email": "darpankumarsing92@gmail.com",
      "phone": "+91 7908518100",
      "github": "https://github.com/darpankumar",
      "linkedin": "https://linkedin.com/in/darpankumar"
    },
    "about": {
      "bio": "I'm a passionate software engineer with over 2 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.",
      "hobbies": "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.",
      "quickFacts": [
        "Computer Science Graduate",
        "2+ Years of Professional Experience",
        "Based in Bangalore",
        "Full Stack Enthusiast",
        "Open Source Contributor"
      ]
    },
    "skills": [
      {
        "title": "Languages",
        "skills": ["JavaScript", "TypeScript", "Python", "Java", "C++", ".NET", "C"]
      },
      {
        "title": "Frontend",
        "skills": ["React", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "ShadCN"]
      },
      {
        "title": "Backend",
        "skills": ["Spring Boot", "FastAPI", "REST APIs", "Django"]
      },
      {
        "title": "Database",
        "skills": ["PostgreSQL", "MySQL", "MongoDB", "SQLite"]
      },
      {
        "title": "Tools & Others",
        "skills": ["Git", "Docker", "AWS", "Vercel", "Figma", "Linux"]
      }
    ],
    "projects": [
      {
        "title": "Portfolio Website",
        "description": "A personal portfolio website to showcase my projects and skills, built with Next.js and a Spring Boot backend.",
        "technologies": ["Next.js", "Tailwind CSS", "Spring Boot", "Vercel"],
        "github": "https://github.com/darpankumar/portfolio",
        "demo": "https://darpankumar.vercel.app",
        "image": ""
      },
      {
        "title": "E-commerce Platform",
        "description": "A full-stack e-commerce application with user authentication, product management, and payment integration.",
        "technologies": ["React", "Node.js", "MongoDB"],
        "github": "https://github.com/darpankumar/ecommerce",
        "demo": "#",
        "image": ""
      },
      {
        "title": "Blog Application",
        "description": "A blogging platform where users can create, edit, and share blog posts with a rich text editor.",
        "technologies": ["Django", "PostgreSQL", "Bootstrap"],
        "github": "https://github.com/darpankumar/blog",
        "demo": "#",
        "image": ""
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Technology in Computer Science",
        "institution": "XYZ University",
        "year": "2023"
      }
    ],
    "experience": [
      {
        "role": "Software Engineer",
        "company": "Tech Solutions Inc.",
        "duration": "2021 - Present",
        "responsibilities": [
          "Developed and maintained web applications using React and Node.js.",
          "Collaborated with cross-functional teams to deliver high-quality software solutions.",
          "Implemented RESTful APIs and integrated third-party services."
        ]
      },
      {
        "role": "Intern Software Developer",
        "company": "Innovatech Ltd.",
        "duration": "2020 - 2021",
        "responsibilities": [
          "Assisted in the development of internal tools using Python and Django.",
          "Participated in code reviews and contributed to team discussions."
        ]
      }
    ],
    "contact": {
      "heading": "Let's work together",
      "description": "I'm always interested in hearing about new projects and technologies. Whether you're a passionate engineer, or a fellow developer wanting to collaborate, I'd love to hear from you.",
      "email": "darpankumarsing92@gmail.com",
      "phone": "+91 7908518100",
      "location": "Bangalore, India"
    }
  };

  const [config, setConfig] = useState(initialConfig);
  const [home, setHome] = useState(initialConfig.Home);
  const [profile, setProfile] = useState(initialConfig.profile);
  const [about, setAbout] = useState(initialConfig.about);
  const [skills, setSkills] = useState(initialConfig.skills);
  const [projects, setProjects] = useState(initialConfig.projects);
  const [education, setEducation] = useState(initialConfig.education);
  const [experience, setExperience] = useState(initialConfig.experience);
  const [contact, setContact] = useState(initialConfig.contact);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch("/api/config");
        if (!res.ok) throw new Error("Failed to fetch config");
        const data = await res.json();
        setConfig(data);
        if (data.Home)       setHome(data.Home);
        if (data.profile)    setProfile(data.profile);
        if (data.about)      setAbout(data.about);
        if (data.skills)     setSkills(data.skills);
        if (data.projects)   setProjects(data.projects);
        if (data.education)  setEducation(data.education);
        if (data.experience) setExperience(data.experience);
        if (data.contact)    setContact(data.contact);
      } catch (error) {
        console.warn("Could not fetch remote config, using defaults:", error.message);
      }
    };
    fetchConfig();
  }, []);

  return {
    home, setHome,
    profile, setProfile,
    about, setAbout,
    skills, setSkills,
    projects, setProjects,
    education, setEducation,
    experience, setExperience,
    contact, setContact,
    config,
  };
}