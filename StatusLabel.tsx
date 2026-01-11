import { motion } from "framer-motion";
import { Scan, CheckCircle } from "lucide-react";

interface StatusLabelProps {
  isDetected: boolean;
}

const StatusLabel = ({ isDetected }: StatusLabelProps) => {
  return (
    <motion.div
      className="glass-card px-5 py-3 flex items-center gap-3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {isDetected ? (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <CheckCircle className="w-5 h-5 text-success" />
          </motion.div>
          <span className="text-sm font-semibold text-foreground">Plant Detected!</span>
        </>
      ) : (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Scan className="w-5 h-5 text-accent" />
          </motion.div>
          <span className="text-sm font-semibold text-foreground">Align plant in frame...</span>
        </>
      )}
    </motion.div>
  );
};

export default StatusLabel;
