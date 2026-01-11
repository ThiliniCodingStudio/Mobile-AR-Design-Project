import { motion } from "framer-motion";
import { ScanSearch, RotateCcw } from "lucide-react";

interface DetectButtonProps {
  isDetected: boolean;
  onToggle: () => void;
}

const DetectButton = ({ isDetected, onToggle }: DetectButtonProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`
        glass-card px-6 py-3 flex items-center gap-3 font-semibold text-sm
        transition-all border-2
        ${isDetected 
          ? "border-muted-foreground/30 text-muted-foreground" 
          : "border-success/50 text-success hover:bg-success/10"
        }
      `}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {isDetected ? (
        <>
          <RotateCcw className="w-4 h-4" />
          Scan Again
        </>
      ) : (
        <>
          <ScanSearch className="w-4 h-4" />
          Simulate Detection
        </>
      )}
    </motion.button>
  );
};

export default DetectButton;
