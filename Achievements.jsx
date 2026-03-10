import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaLightbulb, FaUsers } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            icon: <FaTrophy className="text-yellow-400" />,
            title: "4+ Hackathons",
            description: "Active participant in technical hackathons, focusing on building AI and embedded system innovations."
        },
        {
            icon: <FaLightbulb className="text-blue-400" />,
            title: "AI + Embedded Systems",
            description: "Developed and integrated AI-driven insights with real-world STM32 hardware projects."
        },
        {
            icon: <FaUsers className="text-violet-400" />,
            title: "1500+ Students Trained",
            description: "Provided technical leadership and hands-on training for peers in mechanical engineering workshops."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Achievements</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform border border-white/10">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
