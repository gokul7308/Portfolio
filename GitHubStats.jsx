import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const GitHubStats = () => {
    return (
        <section className="py-24 bg-[#050B14]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Activity</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* GitHub Graph / Stats wrapper */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <FaGithub className="text-3xl text-white" />
                                <h3 className="text-xl font-bold text-white">@gokul7308</h3>
                            </div>
                            <a href="https://github.com/gokul7308" target="_blank" rel="noreferrer" className="text-sm text-blue-400 hover:text-blue-300">View Profile →</a>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                <FaStar className="text-yellow-400 mx-auto mb-2 text-xl" />
                                <p className="text-2xl font-bold text-white mb-1">20+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Repositories</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                <FaCodeBranch className="text-blue-400 mx-auto mb-2 text-xl" />
                                <p className="text-2xl font-bold text-white mb-1">Contribute</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Open Source</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10 text-center">
                            <img
                                src="https://ghchart.rshah.org/3b82f6/gokul7308"
                                alt="GitHub Contribution Graph"
                                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity filter hue-rotate-15 contrast-125"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                            <p className="text-xs text-gray-500 mt-4">Contribution graph dynamically generated</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Repositories</span></h3>

                        {/* Repo 1 */}
                        <a href="https://github.com/gokul7308/weather-app" target="_blank" rel="noreferrer" className="block glass-card p-5 hover:-translate-y-1 transition-transform group">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-2 group-hover:text-blue-400 transition-colors">
                                <FaGithub /> weather-app
                            </h4>
                            <p className="text-sm text-gray-400 mb-3">Real-time weather application with dark mode UI.</p>
                            <div className="flex gap-4 text-xs">
                                <span className="flex items-center gap-1 text-yellow-400"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> JavaScript</span>
                            </div>
                        </a>

                        {/* Repo 2 */}
                        <a href="https://github.com/gokul7308/stm32-projects" target="_blank" rel="noreferrer" className="block glass-card p-5 hover:-translate-y-1 transition-transform group">
                            <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-2 group-hover:text-blue-400 transition-colors">
                                <FaGithub /> stm32-projects
                            </h4>
                            <p className="text-sm text-gray-400 mb-3">Embedded system applications running on STM32 microcontrollers.</p>
                            <div className="flex gap-4 text-xs">
                                <span className="flex items-center gap-1 text-gray-300"><div className="w-2 h-2 rounded-full bg-gray-400"></div> C</span>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
