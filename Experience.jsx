import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: "2025 - Present",
            title: "Embedded Systems Projects (STM32)",
            description: "Developing robust embedded system projects using STM32 microcontrollers, focusing on bare-metal programming, hardware-software interaction, and building efficient real-time systems."
        },
        {
            year: "2025",
            title: "Mechanical Workshop Training Assistant",
            description: "Led and assisted in training sessions on mechanical lathe operations as a first-year student, guiding approximately 1,500 students. Demonstrated machining fundamentals and safety practices."
        },
        {
            year: "2025 - 2026",
            title: "Hackathon Participant",
            description: "Participated in 4+ hackathons, collaborating with cross-functional teams to design and rapidly prototype innovative software and hardware solutions under strict time constraints."
        }
    ];

    return (
        <section id="experience" className="py-24 bg-[#050B14]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Journey</span></h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:space-y-12 space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full -translate-x-[6px] md:-translate-x-[6px] mt-2 ring-4 ring-blue-500/20"></div>

                            <div className="glass-card md:ml-8">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
                                    {exp.year}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
