import { motion } from "framer-motion";

const flights = [
    "EK 502 → DXB |",
    "AI 203 → DEL |",
    "QR 477 → DOH |",
    "6E 221 → BOM |",
    "SQ 245 → SIN |",
    "BA 139 → LHR |",
    "LH 756 → FRA |",
    "CX 695 → HKG |"
];

export default function FlightTicker({ onBack }) {
    return (
        <div className="w-screen min-h-screen bg-[#0C0C0C] flex flex-col justify-center items-center overflow-hidden relative font-mono selection:bg-[#FF6B00] selection:text-white">
            {/* Minimalist Back Navigation Button */}
            {/* Top Status Bar */}
            <div className="absolute top-8 left-8 right-8 flex items-center justify-between">

                {/* Left Controls */}
                <div className="flex items-center gap-4">

                    {onBack && (
                        <button
                            onClick={onBack}
                            className="
                    text-xs
                    font-bold
                    tracking-widest
                    text-zinc-500
                    hover:text-zinc-300
                    border
                    border-zinc-800
                    hover:border-zinc-700
                    px-4
                    py-2
                    rounded
                    transition-all
                    duration-300
                "
                        >
                            ← BACK
                        </button>
                    )}
                </div>

                {/* Right Side Status */}
                <div className="flex items-center gap-4">
                    <div
                        className="
            text-xs
            font-bold
            tracking-widest
            text-zinc-500
            hover:text-zinc-300
            border
            border-zinc-800
            hover:border-zinc-700
            px-4
            py-2
            rounded
            transition-all
            duration-300
            cursor-pointer
        "
                    >
                        Radius 2KM
                    </div>
                </div>
            </div>

            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 160,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
            >
                <TickerRow />
                <TickerRow />
            </motion.div>
        </div >
    );
}

function TickerRow() {
    return (
        <div className="flex gap-64 pr-64">
            {flights.map((flight, index) => (
                <TickerText key={index} text={flight} />
            ))}
        </div>
    );
}

function TickerText({ text }) {
    return (
        <h1 className="text-[#FF6B00] text-[12rem] md:text-[16rem] tracking-[10px] font-extrabold whitespace-nowrap">
            {text}
        </h1>
    );
}