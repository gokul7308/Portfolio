import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "Weather Application",
            description: "A real-time weather app fetching live data from OpenWeather API with a modern UI. Features dynamic backgrounds and comprehensive forecasts.",
            image: "https://images.unsplash.com/photo-1592210633466-403c444e137b?q=80&w=800&auto=format&fit=crop",
            tags: ["HTML", "CSS", "JavaScript", "API"],
            liveLink: "#",
            githubLink: "https://github.com/gokul7308"
        },
        {
            title: "Love Calculator",
            description: "A fun interactive web app that calculates the compatibility based on names with witty responses. Smooth animations for a playful experience.",
            image: "https://images.unsplash.com/photo-1518199266791-5374823223f1?q=80&w=800&auto=format&fit=crop",
            tags: ["HTML", "CSS", "JavaScript"],
            liveLink: "#",
            githubLink: "https://github.com/gokul7308"
        },
        {
            title: "Personal Portfolio",
            description: "A professional and responsive developer portfolio showcasing my projects and professional journey, built with modern design principles.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            tags: ["React", "TailwindCSS", "Framer Motion"],
            liveLink: "#",
            githubLink: "https://github.com/gokul7308"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#050B14]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work in web development and software engineering.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass-card p-0"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <FaGithub /> Source
                                    </a>
                                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
