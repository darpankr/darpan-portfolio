
import { useState, useEffect } from "react";

export function UseConfig() {

    const initialConfig = {
        "Home": {
            "name": "Darpan",
            "profession": "Full Stack Developer",
            "description": "passionate about creating beautiful, functional, and user-centered digital experiences."
        },
    "profile": {
        "name": "Darpan",
        "title": "Full Stack Developer",
        "location": "Bangalore",
        "email": "darpankumarsing92@gmail.com",
        "phone": "+91 7908518100"
        
    },
    "about": {
        "bio": "I'm a unpassionate software engineer with over 2 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive solutions.",
        "hobbies": "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.",
        "quickFacts": [
            "🎓 Computer Science Graduate",
            "💼 2+ Years of Professional Experience",
            "🌍 Based in Bangalore",
            "👨‍💻 Code Enthusiast",
            "☕ You know!"
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
        "skills": ["Python", "Spring Boot", "FastAPI", "REST APIs", "Django"]
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
        "description": "A personal portfolio website to showcase my projects and skills.",
        "technologies": ["Next.js", "Tailwind CSS", "Vercel"],
        "link": "https://darpankumar.vercel.app"
        },
        {
        "title": "E-commerce Platform",
        "description": "A full-stack e-commerce application with user authentication, product management, and payment integration.",
        "technologies": ["React", "Node.js", "MongoDB"],
        "link": "#"
        },
        {
        "title": "Blog Application",
        "description": "A blogging platform where users can create, edit, and share blog posts.",
        "technologies": ["Django", "PostgreSQL", "Bootstrap"],
        "link": "#"
        }
    ],
    "education": [
        {
        "degree": "Bachelor of Technology in Computer Science",
        "institution": "XYZ University",
        "year": "2020"
        },
        {
        "degree": "Full Stack Development Bootcamp",
        "institution": "ABC Institute",
        "year": "2021"
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
        "description": "I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.",
        "email": "darpankumarsing92@gmail.com",
        "phone": "+91 7908518100",
        "location": "Bangalore, India"
        }
    };
    const [config, setConfig] = useState(initialConfig);
    const [home, setHome] = useState({
        name: "",
        profession: "",
        description: ""
    });
    const [profile, setProfile] = useState({
        name: "",
        title: "",
        location: "",
        email: "",
        phone: ""
    });
    const [about, setAbout] = useState({
        bio: "",
        hobbies: "",
        quickFacts: []
    });
    const [skills, setSkills] = useState([
        { title: "", skills: [] }
    ]);
    const [projects, setProjects] = useState([
        { title: "", description: "", technologies: [], link: "" }
    ]);
    const [education, setEducation] = useState([
        { degree: "", institution: "", year: "" }
    ]);
    const [experience, setExperience] = useState([
        { role: "", company: "", duration: "", responsibilities: [] }
    ]);
    const [contact, setContact] = useState({
        heading: "",
        description: "",
        email: "",
        phone: "",
        location: ""
    });

    

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const res = await fetch("api/config");
                if (!res.ok) throw new Error("Failed to fetch config");
                const data = await res.json();
                setConfig(data);
                setHome((prev) => ({
                    ...prev,
                    name: data.Home?.name || "",
                    profession: data.Home?.profession || "",
                    description: data.Home?.description || ""
                }));
                setProfile((prev) => ({
                    ...prev,
                    name: data.profile?.name || "",
                    title: data.profile?.title || "",
                    location: data.profile?.location || "",
                    email: data.profile?.email || "",
                    phone: data.profile?.phone || ""
                }));
                setAbout((prev) => ({
                    ...prev,
                    bio: data.about?.bio || "",
                    hobbies: data.about?.hobbies || "",
                    quickFacts: data.about?.quickFacts || []
                }));
                setSkills((prev) => data.skills || [
                    { title: "", skills: [] }
                ]);
                setProjects((prev) => data.projects || [
                    { title: "", description: "", technologies: [], link: "" }
                ]);
                setEducation((prev) => data.education || [
                    { degree: "", institution: "", year: "" }
                ]);
                setExperience((prev) => data.experience || [
                    { role: "", company: "", duration: "", responsibilities: [] }
                ]);
                setContact((prev) => ({
                    ...prev,
                    heading: data.contact?.heading || "",
                    description: data.contact?.description || "",
                    email: data.contact?.email || "",
                    phone: data.contact?.phone || "",
                    location: data.contact?.location || ""
                }));
            } catch (error) {
                console.error("Error fetching config:", error);
            }
        };

        fetchConfig();
    }, []);

    return { home, setHome, profile, setProfile, about, setAbout, skills, setSkills, projects, setProjects, education, setEducation, experience, setExperience, contact, setContact };
}