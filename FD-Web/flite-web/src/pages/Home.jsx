import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FliteLogo from '../assets/Flite-Logo-SVG.svg';

export default function Home({ onGetStarted }) {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How does Flite obtain its data?",
            answer: "Flite connects to public ADS-B receiver networks globally. It decodes live transponder signals directly from aircraft, bringing real-time telemetry straight to your ambient display."
        },
        {
            question: "What platforms are supported?",
            answer: "Flite is currently available as a progressive web application, as well as a native desktop application for macOS (Apple Silicon/Intel) and Windows 11."
        },
        {
            question: "Can I customize the flight data shown?",
            answer: "Yes. With a free account, you can configure custom filters to only show specific airlines, specific aircraft models, or lock onto a single flight transponder ID."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    };

    const flightDataStream = [
        "AFR123 CDG→JFK 37,000FT", "BAW209 LHR→MIA 35,000FT",
        "DLH430 FRA→ORD 39,000FT", "UAE201 DXB→JFK 41,000FT",
        "SIA322 SIN→LHR 33,000FT", "QFA011 SYD→LAX 36,000FT"
    ];

    return (
        <div className="min-h-screen bg-[#FBF9F6] text-[#111111] font-mono selection:bg-[#FF6B00] selection:text-white overflow-x-hidden">

            {/* Custom Infinite Marquee Styles */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }
            `}</style>

            {/* --- HEADER / NAV --- */}
            <header className="flex justify-between items-center px-6 py-5 md:px-16 bg-[#FBF9F6] border-b border-[#EAE6DF]/60">
                <div className="flex items-center">
                    <img
                        src={FliteLogo}
                        alt="Flite logo"
                        className="w-16 h-8 mr-3"
                    />
                </div>
                <nav className="flex space-x-10 text-xs tracking-widest text-gray-700 font-bold">
                    <a href="#about" className="hover:text-black transition-colors">About</a>
                    <a href="#features" className="hover:text-black transition-colors">Features</a>
                    <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
                </nav>
                <button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white text-sm font-sans font-bold px-6 py-2.5 rounded shadow-sm transition-all">
                    Download
                </button>
            </header>

            {/* --- MAIN CONTENT CONTAINER --- */}
            <main className="max-w-6xl mx-auto px-6 md:px-12 pt-20 pb-24">

                {/* --- HERO SECTION --- */}
                <section className="relative text-center max-w-3xl mx-auto flex flex-col items-center mb-28 pt-8">
                    {/* Premium Ambient Telemetry Grid Underlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-visible">
                        <svg
                            width="640"
                            height="640"
                            viewBox="0 0 640 640"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[320px] h-[320px] md:w-[640px] md:h-[640px] opacity-[0.03] text-[#111111] animate-[spin_180s_linear_infinite] select-none"
                        >
                            {/* Concentric Circles */}
                            <circle cx="320" cy="320" r="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <circle cx="320" cy="320" r="200" stroke="currentColor" strokeWidth="1" />
                            <circle cx="320" cy="320" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <circle cx="320" cy="320" r="40" stroke="currentColor" strokeWidth="1" />

                            {/* Crosshairs */}
                            <line x1="320" y1="0" x2="320" y2="640" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="0" y1="320" x2="640" y2="320" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

                            {/* Technical Grid Marks */}
                            <line x1="120" y1="315" x2="120" y2="325" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="520" y1="315" x2="520" y2="325" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="315" y1="120" x2="325" y2="120" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="315" y1="520" x2="325" y2="520" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Heavyweight Landing Typography */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-center text-[#111111] font-mono leading-[1.05]"
                    >
                        Ambient Flight Tracking.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-base md:text-lg text-gray-600 max-w-xl mx-auto mt-8 leading-relaxed font-sans font-normal"
                    >
                        Turn real-time flight data into a smooth, digital display for your space. Passive information for the modern home.
                    </motion.p>

                    {/* Action Hub */}
                    <div className="mt-10 flex justify-center space-x-4 font-mono font-bold">
                        <button
                            onClick={onGetStarted}
                            className="bg-[#111111] hover:bg-black text-white text-sm tracking-wider px-8 py-4 transition-all"
                        >
                            Get Started
                        </button>
                        <button className="border border-gray-400 hover:border-black text-sm tracking-wider px-8 py-4 transition-all bg-transparent">
                            View Demo
                        </button>
                    </div>
                </section>

                <hr className="border-[#EAE6DF] mb-20" />

                {/* --- TRUE ASYMMETRICAL BENTO GRID --- */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
                >
                    {/* Card 1: Continuous Scrolling (Spans 2 Columns Wide) */}
                    <motion.div
                        variants={fadeIn}
                        className="bg-white border border-[#EAE6DF] p-8 flex flex-col justify-between min-h-[340px] md:col-span-2 overflow-hidden"
                    >
                        <div className="max-w-xl">
                            <h3 className="text-xl font-bold mb-4 tracking-tight">Continuous Scrolling</h3>
                            <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed">
                                Experience a hypnotic, jitter-free data stream. Our custom rendering engine ensures that every transition is mathematically smooth, perfect for background displays.
                            </p>
                        </div>

                        {/* Infinite Marquee Element Loop */}
                        <div className="w-full bg-[#F5F2EB] py-3 overflow-hidden border-y border-gray-200/60 relative my-6">
                            <div className="animate-marquee whitespace-nowrap text-xs tracking-widest text-[#FF6B00] font-bold">
                                {[...flightDataStream, ...flightDataStream].map((text, i) => (
                                    <span key={i} className="mx-6 font-mono">{text}</span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-[#F5F2EB] flex justify-between items-end">
                            <div>
                                <span className="text-[10px] text-gray-400 block tracking-widest font-bold mb-0.5">Refreshed</span>
                                <span className="text-sm font-bold font-mono">0.5s Real-time</span>
                            </div>
                            <div className="w-20 h-11 bg-gray-100 border border-gray-200 overflow-hidden relative grayscale opacity-60">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-transparent rotate-12 transform origin-bottom-left"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Clock Logic */}
                    <motion.div
                        variants={fadeIn}
                        className="bg-white border border-[#EAE6DF] p-8 flex flex-col justify-between min-h-[340px]"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight">Clock Logic</h3>
                            <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed">
                                More than a tracker, it's a timepiece. Information is presented with the precision of a high-end digital clock.
                            </p>
                        </div>
                        <div className="mt-6 bg-[#F5F2EB] text-center py-4 text-sm text-gray-800 tracking-[0.2em] font-bold border border-gray-200/50 font-mono">
                            12:46:08 UTC
                        </div>
                    </motion.div>

                    {/* Card 3: Nearest Flight */}
                    <motion.div
                        variants={fadeIn}
                        className="bg-white border border-[#EAE6DF] p-8 flex flex-col justify-between min-h-[280px]"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight">Nearest Flight</h3>
                            <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed">
                                Automatically detect and display the aircraft currently passing over your coordinates.
                            </p>
                        </div>
                        <div className="mt-6 border-t border-[#F5F2EB] pt-4 flex items-center justify-between text-xs text-gray-500 font-bold tracking-wider">
                            <span>Scanning airspace...</span>
                        </div>
                    </motion.div>

                    {/* --- DARK ACCENT CALLOUT BANNER --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#111111] text-white p-8 md:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 md:col-span-2 shadow-inner"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Passive. Ambient. Precise.</h2>
                            <p className="text-sm md:text-base text-gray-300 font-sans">Download the desktop client for macOS and Windows.</p>
                        </div>
                        <button className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-8 py-4 text-xs font-bold tracking-widest rounded flex flex-col items-center transition-all self-stretch sm:self-auto font-mono">
                            <span className="text-[10px] opacity-60 mb-0.5 lowercase">v1.2.4</span>
                            <span>Download</span>
                        </button>
                    </motion.div>
                </motion.div>

                <hr className="border-[#EAE6DF] my-24" />

                {/* --- LARGE EXPANDED PHILOSOPHY SECTION --- */}
                <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left items-start">
                    <div className="md:col-span-5">
                        <span className="text-xs text-[#FF6B00] font-black tracking-[0.3em] block  mb-4">The Philosophy</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] text-[#111111]">
                            Digital furniture for the information age.
                        </h2>
                    </div>

                    <div className="md:col-span-7 space-y-8 text-base md:text-lg text-gray-700 font-sans leading-relaxed">
                        <p>
                            Flite was born from a desire to see the world's movement without the noise of traditional aviation tools. We don't provide complex maps or cluttered logistics. Instead, we provide a window into the sky.
                        </p>
                        <p>
                            Whether you're tracking a specific callsign or letting the app cycle through the nearest overhead traffic, Flite is designed to be seen from across the room. It's an ambient display that lives on your second monitor or a dedicated tablet, providing a quiet connection to the global flow of travel.
                        </p>

                        {/* Split Data Accents */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#EAE6DF] font-mono">
                            <div className="border-l-2 border-[#FF6B00] pl-5">
                                <h4 className="font-bold text-black text-base mb-2 tracking-tight">Custom IDs</h4>
                                <p className="text-sm md:text-base text-gray-600 font-sans leading-normal">Track any flight in the world by callsign.</p>
                            </div>
                            <div className="border-l-2 border-[#FF6B00] pl-5">
                                <h4 className="font-bold text-black text-base mb-2 tracking-tight">Minimal UI</h4>
                                <p className="text-sm md:text-base text-gray-600 font-sans leading-normal">Zero distractions. Just pure data.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-[#EAE6DF] my-24" />

                {/* --- FAQ SECTION --- */}
                <section id="faq" className="max-w-4xl mx-auto text-left">
                    <span className="text-xs text-[#FF6B00] font-black tracking-[0.3em] block text-center mb-4">Common inquiries</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-[#111111] mb-12">Frequently Asked Questions</h2>

                    <div className="border-t border-[#EAE6DF]">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-[#EAE6DF]">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full py-6 flex justify-between items-center text-left font-mono font-bold text-sm md:text-base tracking-wide hover:text-[#FF6B00] transition-colors"
                                >
                                    <span>{faq.question}</span>
                                    <span className="text-lg text-[#FF6B00] font-bold">
                                        {openFaq === i ? '[-]' : '[+]'}
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'
                                    }`}>
                                    <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* --- FOOTER --- */}
            <footer className="border-t border-zinc-800 bg-[#111111] px-8 py-16 md:px-20 text-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">

                    {/* Dev Studio / Brand Info */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="tracking-widest font-black text-sm text-white">FLITE</span>
                            <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded font-sans font-bold tracking-normal">by SpicaLabs</span>
                        </div>
                        <p className="text-xs text-gray-400 font-sans max-w-sm leading-relaxed">
                            Passive, minimal information displays designed to transform empty screens into digital ambient furniture.
                        </p>
                    </div>

                    {/* Navigation / Socials */}
                    <div className="flex flex-col space-y-3">
                        <span className="text-[10px] text-gray-500 tracking-widest font-bold">Connect</span>
                        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 text-xs font-bold tracking-widest text-zinc-300">
                            <a href="#twitter" className="hover:text-[#FF6B00] transition-colors">Twitter</a>
                            <a href="#instagram" className="hover:text-[#FF6B00] transition-colors">Instagram</a>
                            <a href="#privacy" className="hover:text-[#FF6B00] transition-colors">Privacy</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-500 font-bold tracking-widest gap-4">
                    <div>Flite © 2026. Created by SpicaLabs. All rights reserved.</div>
                    <div>Passive information systems.</div>
                </div>
            </footer>

        </div>
    );
}