import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDownload, FaCode } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Hello, I'm</h2>
                            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight">
                                Gokul S
                            </h1>
                            <h3 className="text-2xl md:text-3xl font-medium text-gray-400">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
                                    AI & Embedded Systems Developer
                                </span>
                                <br className="hidden md:block" /> | Hackathon Innovator
                            </h3>
                        </div>

                        <p className="max-w-xl mx-auto lg:mx-0 text-lg text-gray-400 leading-relaxed">
                            I build intelligent systems combining Artificial Intelligence, STM32 Microcontrollers, and modern web technologies to solve real-world problems.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                                <FaCode /> View Projects
                            </a>
                            <a href="#" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                                <FaDownload /> Download Resume
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                            <a href="https://github.com/gokul7308" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/gokul-s-96ba4a36a/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                                <FaLinkedinIn size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                            <img
                                src="gokul.jpeg"
                                alt="Gokul S"
                                className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl z-10"
                                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Gokul+S&background=random&size=512'; }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
