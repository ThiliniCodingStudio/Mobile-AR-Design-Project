import { motion } from "framer-motion";

interface ScanReticleProps {
  isDetected: boolean;
}

const ScanReticle = ({ isDetected }: ScanReticleProps) => {
  const cornerColor = isDetected ? "text-success" : "text-white";

  return (
    <motion.div
      className="relative w-64 h-64"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: isDetected ? 0.95 : 1, 
        opacity: 1 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Reticle Frame */}
      <div className={`absolute inset-0 ${cornerColor} transition-colors duration-300`}>
        {/* Top Left Corner */}
        <div className="reticle-corner reticle-corner--tl top-0 left-0" />
        {/* Top Right Corner */}
        <div className="reticle-corner reticle-corner--tr top-0 right-0" />
        {/* Bottom Left Corner */}
        <div className="reticle-corner reticle-corner--bl bottom-0 left-0" />
        {/* Bottom Right Corner */}
        <div className="reticle-corner reticle-corner--br bottom-0 right-0" />
      </div>

      {/* Scan Line Animation */}
      {!isDetected && (
        <div className="absolute inset-4 overflow-hidden">
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ y: 0 }}
            animate={{ y: [0, 200, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ boxShadow: "0 0 20px 4px hsl(var(--accent))" }}
          />
        </div>
      )}

      {/* Detection Glow Effect */}
      {isDetected && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            boxShadow: "inset 0 0 60px rgba(34, 197, 94, 0.2)",
          }}
        />
      )}

      {/* Center Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className={`w-2 h-2 rounded-full ${isDetected ? "bg-success" : "bg-white/50"}`}
          animate={isDetected ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};

export default ScanReticle;
