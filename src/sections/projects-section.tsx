import Section from "../components/section";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import project1Image from  "/assets/glimpse-preview.png?url";
import project2Image from  "/assets/project-2.png?url";



export default function ProjectsSection() {
    const projects = [
        {
            title: "Glimpse AI",
            description: "Full-stack AI thumbnail generator with MERN & Gemini API. Features a real-time YouTube preview mockup.",
            image: project1Image,
            github: "https://github.com/nik1910-sd/Glimpse-AI-thumbnail-generator",
            live: "https://glimpse-umber.vercel.app/"
        },
        {
            title: "Metro Navigator",
            description: "A Java-based shortest path calculator for metro systems using Dijkstra and BFS/DFS algorithms.",
            image: project2Image,
            github: "https://github.com/nik1910-sd/Metro-Navigator",
            live: "#"
        },
        {
            title: "Smart Med-Tracker",
            description: "OCR-powered medicine tracker that scans expiry dates and sends automated notifications.",
            image: project2Image,
            github: "https://github.com/nik1910-sd/Smart-Med-Tracker",
            live: "#"
        },
    ];

    return (
        <div id='projects-section'>
            <Section title="Projects">
            <div className="table-auto mr-auto">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full mb-12">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group flex flex-col h-full bg-white border border-zinc-300 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative overflow-hidden h-48 border-b border-gray-100">
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src={project.image}
                                    alt={project.title}
                                />
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-lg font-bold text-zinc-900">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-700 text-sm mt-2 line-clamp-3 grow">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-6 mt-6">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-black transition-colors"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-black transition-colors"
                                    >
                                        <ExternalLink size={18} /> Live
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full border-t border-gray-100 pt-8 flex justify-center">
                    <a
                        href="https://github.com/nik1910-sd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md"
                    >
                        <span>More pojects</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </Section>
        </div>
    );
}