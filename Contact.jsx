import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#050B14]">
            {/* Glow Effects */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Connect</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Open to collaborations, new opportunities, and discussing tech innovations.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Reach Out Anytime</h3>
                            <p className="text-gray-400">Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:gokul7308@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors glass-card p-4 hover:border-blue-500/50 group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Email</p>
                                    <p className="text-sm md:text-base">gokul7308@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/gokul-s-96ba4a36a/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors glass-card p-4 hover:border-blue-500/50 group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <FaLinkedinIn size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">LinkedIn</p>
                                    <p className="text-sm md:text-base">Connect with me</p>
                                </div>
                            </a>

                            <a href="https://github.com/gokul7308" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors glass-card p-4 hover:border-blue-500/50 group">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <FaGithub size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">GitHub</p>
                                    <p className="text-sm md:text-base">View my repositories</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card !bg-[#030712]/50 !p-8"
                    >
                        <form action="https://formspree.io/f/xyzkpvaw" method="POST" className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="john@example.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 uppercase tracking-wide">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="How can I help you?"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                            >
                                Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-sm" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
