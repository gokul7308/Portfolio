import React from 'react';
import { motion } from 'framer-motion';

const CurrentlyWorking = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="glass-card !bg-blue-900/10 !border-blue-500/20 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-4"
                        >
                            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">Currently Working On</h2>
                            <h3 className="text-3xl font-bold mb-4 leading-tight">Innovation & Next-Gen Systems</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Constantly learning and building advanced technical solutions bridging hardware and artificial intelligence.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
                                    <span className="text-sm text-gray-300"><strong>AI Vehicle Monitoring System</strong>: Real-time traffic anomaly detection.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-2.5 h-2.5 bg-violet-500 rounded-full shadow-[0_0_10px_#8b5cf6]"></div>
                                    <span className="text-sm text-gray-300"><strong>Advanced STM32 Logic</strong>: Bare-metal sensor interfacing & IoT nodes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"></div>
                                    <span className="text-sm text-gray-300"><strong>Hackathon Concepts</strong>: Prototyping software/hardware integration for social good.</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden h-full min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                                alt="Hardware and software integration"
                                className="w-full h-full object-cover filter brightness-50 contrast-125 hover:brightness-75 transition-all duration-700"
                            />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentlyWorking;
