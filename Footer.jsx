import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#02050D] border-t border-white/5 text-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Gokul S</span>. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">
                    Built with React, TailwindCSS & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
