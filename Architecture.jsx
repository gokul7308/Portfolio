import React from 'react';
import { motion } from 'framer-motion';

const Architecture = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Architecture</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">High-level overview of how my systems are structured logically.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                    {/* Subtle bg glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 text-center group"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 mix-blend-screen border border-blue-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-medium">Frontend</h4>
                            <p className="text-xs text-gray-400 mt-1">React / Web UI</p>
                        </motion.div>

                        {/* Arrow */}
                        <div className="hidden md:block w-8 text-blue-500/50">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 rotate-90 md:rotate-0"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                        </div>

                        {/* Mobile Arrow */}
                        <div className="md:hidden w-6 text-blue-500/50 rotate-90">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                        </div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex-1 text-center group"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 mix-blend-screen border border-indigo-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h4 className="text-white font-medium">Backend</h4>
                            <p className="text-xs text-gray-400 mt-1">Node API</p>
                        </motion.div>

                        {/* Arrow */}
                        <div className="hidden md:block w-8 text-indigo-500/50">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                        </div>

                        {/* Mobile Arrow */}
                        <div className="md:hidden w-6 text-indigo-500/50 rotate-90">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                        </div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex-1 text-center group"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-violet-500/20 to-violet-600/20 mix-blend-screen border border-violet-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                                <svg className="w-8 h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-white font-medium">AI / Logic</h4>
                            <p className="text-xs text-gray-400 mt-1">Python / Control</p>
                        </motion.div>

                        {/* Arrow */}
                        <div className="hidden md:block w-8 text-violet-500/50">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                        </div>

                        {/* Mobile Arrow */}
                        <div className="md:hidden w-6 text-violet-500/50 rotate-90">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg>
                        </div>

                        {/* Step 4 */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex-1 text-center group"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-600/20 mix-blend-screen border border-purple-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                            </div>
                            <h4 className="text-white font-medium">Database</h4>
                            <p className="text-xs text-gray-400 mt-1">Data Storage</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
