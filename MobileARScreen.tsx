import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import plantBackground from "@/assets/plant-background.jpg";
import TopBar from "./TopBar";
import ScanReticle from "./ScanReticle";
import StatusLabel from "./StatusLabel";
import DetectButton from "./DetectButton";
import ResultCard from "./ResultCard";

const MobileARScreen = () => {
  const [isDetected, setIsDetected] = useState(false);

  const handleToggleDetection = () => {
    setIsDetected(!isDetected);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Phone Frame */}
      <motion.div
        className="relative w-full max-w-[375px] h-[812px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-neutral-800"
        style={{
          boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.7), 0 30px 60px -30px rgba(0, 0, 0, 0.6)",
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-800 rounded-b-2xl z-50" />

        {/* Camera Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
          <img 
            src={plantBackground} 
            alt="Plant camera view" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </div>

        {/* Top Bar */}
        <TopBar />

        {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-between pt-20 pb-8">
          {/* Top Spacer */}
          <div className="h-12" />
          
          {/* Scan Reticle - Centered */}
          <div className="flex-shrink-0">
            <ScanReticle isDetected={isDetected} />
          </div>

          {/* Controls Section */}
          <div className="flex flex-col items-center gap-4 pb-4">
            {/* Status Label */}
            <StatusLabel isDetected={isDetected} />

            {/* Detection Toggle Button */}
            <DetectButton isDetected={isDetected} onToggle={handleToggleDetection} />
          </div>
        </div>

        {/* Result Card Overlay */}
        <AnimatePresence>
          {isDetected && <ResultCard isVisible={isDetected} />}
        </AnimatePresence>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/50 rounded-full" />
      </motion.div>
    </div>
  );
};

export default MobileARScreen;
