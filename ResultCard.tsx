import { motion } from "framer-motion";
import { Droplets, Sun, Leaf, ChevronRight } from "lucide-react";

interface ResultCardProps {
  isVisible: boolean;
}

const ResultCard = ({ isVisible }: ResultCardProps) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 p-4"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="glass-card p-5 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-success" />
              <h2 className="text-xl font-bold text-foreground">Monstera Deliciosa</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Confidence: <span className="text-success font-semibold">98%</span>
            </p>
          </div>
          
          {/* Health Badge */}
          <motion.div
            className="px-3 py-1.5 rounded-full bg-warning/20 border border-warning/30"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
          >
            <span className="text-xs font-bold text-warning">Needs Water</span>
          </motion.div>
        </div>

        {/* Metrics */}
        <div className="space-y-3">
          {/* Moisture */}
          <motion.div
            className="space-y-1.5"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Moisture</span>
              </div>
              <span className="text-sm font-bold text-warning">30%</span>
            </div>
            <div className="progress-track">
              <motion.div
                className="progress-fill bg-warning"
                initial={{ width: 0 }}
                animate={{ width: "30%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Light */}
          <motion.div
            className="space-y-1.5"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-foreground">Light</span>
              </div>
              <span className="text-sm font-bold text-success">Perfect</span>
            </div>
            <div className="progress-track">
              <motion.div
                className="progress-fill bg-success"
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.button
          className="w-full mt-2 py-3 rounded-xl bg-success/20 border border-success/30 flex items-center justify-center gap-2 text-success font-semibold transition-all hover:bg-success/30"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.98 }}
        >
          View Care Guide
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultCard;
