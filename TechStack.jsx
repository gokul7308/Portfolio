import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiStmicroelectronics, SiPython, SiC, SiArduino } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const TechStack = () => {
    const categories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
                { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
                { name: "REST APIs", icon: <FaCode className="text-gray-400" /> },
            ]
        },
        {
            title: "Embedded Systems",
            skills: [
                { name: "STM32", icon: <SiStmicroelectronics className="text-[#03234B] dark:text-[#5B9BDE]" /> },
                { name: "C Programming", icon: <SiC className="text-[#A8B9CC]" /> },
                { name: "IoT", icon: <SiArduino className="text-[#00979D]" /> },
                { name: "Sensors", icon: <FaMicrochip className="text-gray-400" /> },
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Arsenal</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I use to build robust applications and intelligent embedded systems.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="text-xl">{skill.icon}</div>
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Helper icons since they are not imported above
const FaCode = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M121.36 244.37L14.7 341.22l106.66 96.85 24.36-26.83L60.28 341.22l85.44-77.62-24.36-19.23zm269.28 0l-24.36 19.23 85.44 77.62-85.44 70.02 24.36 26.83 106.66-96.85-106.66-96.85zM224 457.08l105.2-385.1-34.4-9.4L189.6 447.68l34.4 9.4z"></path></svg>;
const FaMicrochip = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v-43c0-9.39-7.61-17-17-17h-47V16h-34v30h-35V16h-34v30h-35V16h-34v30h-35V16h-34v30h-35V16h-34v30h-47c-9.39 0-17 7.61-17 17v43h21v35h-21v43h21v35h-21v43h21v35h-21v43h21v35h-21v43c0 9.39 7.61 17 17 17h47v30h34v-30h35v30h34v-30h35v30h34v-30h35v30h34v-30h35v30h34v-30h47c9.39 0 17-7.61 17-17v-43h-21v-35h21v-43h-21v-35h21v-43h-21v-35h21v-43h-21v-35h21z"></path></svg>;

export default TechStack;
