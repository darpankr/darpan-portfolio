
// app/api/config/route.js
// Next.js API route — acts as a proxy between the frontend and Spring Boot
// Frontend calls → /api/config → this route → Spring Boot /api/portfolio

export async function GET() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  try {
    const res = await fetch(`${backendUrl}/api/portfolio`, {
      headers: { "Content-Type": "application/json" },
      // Cache for 60 seconds in production, always fresh in dev
      next: { revalidate: process.env.NODE_ENV === "production" ? 60 : 0 },
    });

    if (!res.ok) {
      throw new Error(`Backend responded with ${res.status}`);
    }

    const json = await res.json();

    // Spring Boot returns: { success: true, data: { profile, skills, projects, experience, education } }
    // We extract `data` and reshape it to match what UseConfig.js expects
    const data = json.data;

    const config = {
      Home: {
        name: data.profile?.name || "",
        profession: data.profile?.title || "",
        description: "Passionate about creating beautiful, functional, and user-centered digital experiences.",
      },
      profile: {
        name: data.profile?.name || "",
        title: data.profile?.title || "",
        location: data.profile?.location || "",
        email: data.profile?.email || "",
        phone: data.profile?.phone || "",
        github: data.profile?.githubUrl || "",
        linkedin: data.profile?.linkedinUrl || "",
        profileImageUrl: data.profile?.profileImageUrl || "",
        available: data.profile?.available ?? true,
      },
      about: {
        bio: data.profile?.bio || "",
        hobbies: data.profile?.hobbies || "",
        quickFacts: [
          "Computer Science Graduate",
          "2+ Years of Professional Experience",
          `Based in ${data.profile?.location || "Bangalore"}`,
          "Full Stack Enthusiast",
          "Open Source Contributor",
        ],
      },
      // skills comes as { "Frontend": ["React", "Next.js"], "Backend": [...] }
      // reshape to array of { title, skills[] } for the Skills component
      skills: Object.entries(data.skills || {}).map(([title, skills]) => ({
        title,
        skills,
      })),
      // projects from DB have githubUrl/demoUrl — map to github/demo
      projects: (data.projects || []).map((p) => ({
        title: p.title,
        description: p.description,
        technologies: p.technologies || [],
        github: p.githubUrl || "#",
        demo: p.demoUrl || "#",
        image: p.imageUrl || "",
      })),
      experience: (data.experience || []).map((e) => ({
        role: e.role,
        company: e.company,
        duration: e.duration,
        responsibilities: e.responsibilities || [],
      })),
      education: (data.education || []).map((e) => ({
        degree: e.degree,
        institution: e.institution,
        year: e.year,
        description: e.description || "",
      })),
      contact: {
        heading: "Let's work together",
        description:
          "I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to hire, or a fellow developer wanting to collaborate, I'd love to hear from you.",
        email: data.profile?.email || "",
        phone: data.profile?.phone || "",
        location: data.profile?.location || "",
      },
    };

    return Response.json(config);
  } catch (error) {
    console.error("Failed to fetch from Spring Boot backend:", error.message);
    return Response.json(
      { error: "Failed to load portfolio data" },
      { status: 503 }
    );
  }
}