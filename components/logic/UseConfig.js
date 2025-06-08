
import { useState, useEffect } from "react";

export function UseConfig() {

    const initialConfig = {
        Home: {
            name: "",
            profession: "",
            description: ""
        },
        profile: {
            name: "",
            title: "",
            location: "",
            email: "",
            phone: ""
        },
        about: {
            bio: "",
            hobbies: "",
            quickFacts: []
        },
        skills: [
            { title: "", skills: [] }
        ],
        projects: [
            { title: "", description: "", technologies: [], link: "" }
        ],
        education: [
            { degree: "", institution: "", year: "" }
        ],
        experience: [
            { role: "", company: "", duration: "", responsibilities: [] }
        ],
        contact: {
            heading: "",
            description: "",
            email: "",
            phone: "",
            location: ""
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