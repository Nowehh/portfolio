import { Code, Terminal, Cpu, Globe, Database, Layers, Gamepad2, MessageCircle } from 'lucide-react';
import projectGameImg from '../assets/project-game-custom.png';
import projectChatbotImg from '../assets/project-hackathon-custom.png';

export const profileData = {
    name: "Noé Rigoletti",
    title: "Engineering Student at ENSEEIHT | Image & Multimedia",
    intro: "2nd-year student at ENSEEIHT, available from early June to late August 2026 for an 8-week technician internship. Passionate about Computer Vision and Software Development.",
    contact: {
        email: "nrigoletti@gmail.com",
        phone: "+33 6 31 95 14 60",
        location: "Toulouse, France",
        socials: {
            linkedin: "https://www.linkedin.com/in/noé-rigoletti",
            github: "https://github.com/Nowehh"
        }
    }
};

export const educationData = [
    {
        school: "ENSEEIHT",
        degree: "Engineering Degree",
        period: "Sept 2024 – Sept 2027",
        location: "Toulouse",
        description: "Specialization: Image & Multimedia",
        details: ["Computer Vision", "Digital Image Processing", "Deep Learning", "Pattern Recognition"]
    },
    {
        school: "La Prépa des INP",
        degree: "CPGE (Preparatory Classes for Grandes Écoles)",
        period: "Sept 2022 – June 2024",
        location: "Grenoble",
        description: "",
        details: []
    },
    {
        school: "Lycée Berthollet",
        degree: "Scientific Baccalaureate",
        year: "2022",
        location: "Annecy",
        description: "Grade: Very Good (Mention Très Bien)",
        details: []
    }
];

export const experienceData = [
    {
        company: "N7 Consulting (Junior-Enterprise)",
        role: "Business Manager",
        date: "March 2025 – March 2026",
        description: "Client needs analysis, drafting technical and commercial proposals, project management, and client relations."
    },
    {
        company: "RM Club",
        role: "Reception Agent",
        date: "Summers 2024 & 2025",
        location: "Annecy",
        description: "Customer reception and information."
    },
    {
        company: "Japy Tech",
        role: "Worker Intern",
        date: "May 2024 – June 2024 (6 weeks)",
        location: "Dijon",
        description: "Participation in the redesign and optimization of workshop operating procedures to simplify manufacturing processes."
    },
    {
        company: "Carrefour",
        role: "Sales Assistant",
        date: "August 2022",
        location: "Annecy",
        description: ""
    }
];

export const projectsData = [
    {
        title: "Video Game Development (Java)",
        description: "4-month academic project. Design of a complete game with MVC architecture.",
        tech: ["Java", "MVC", "Git", "GUI"],
        image: projectGameImg,
        details: "Game loop management, animations, graphical user interface (GUI), teamwork using Git."
    },
    {
        title: "Nuit de l'Info 2025 (Hackathon)",
        description: "Winner of the 'Chatbot' challenge (by Viveris). Development of an interactive web application in one night.",
        tech: ["Web", "Chatbot", "Hackathon"],
        image: projectChatbotImg,
        details: "Creation of an interactive web application."
    }
];

export const mobilityData = {
    upcoming: {
        title: "South America Mobility",
        period: "Next Year (2026)",
        description: "Planned academic exchange in South America (Columbia or Argentina). Pending final results."
    },
    trips: [
        {
            location: "Catalonia, Spain",
            date: "November 2025",
            description: "Cultural trip and exploration of the Catalan region."
        },
        {
            location: "Tuscany, Italy",
            date: "Summer 2025",
            description: "Touring the Tuscan countryside and visiting historical cities."
        },
        {
            location: "Florida, USA",
            date: "Summer 2022",
            description: "Tourism trip discovering the Sunshine State."
        }
    ]
};
