import { motion } from "framer-motion";
import { Camera, Settings, Zap } from "lucide-react";

const TopBar = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      {/* Flash Toggle */}
      <button className="glass-card p-2.5 transition-all hover:bg-white/10">
        <Zap className="w-5 h-5 text-foreground" />
      </button>

      {/* App Title */}
      <div className="glass-card px-4 py-2 flex items-center gap-2">
        <Camera className="w-4 h-4 text-success" />
        <span className="text-sm font-bold text-foreground">PlantScan AR</span>
      </div>

      {/* Settings */}
      <button className="glass-card p-2.5 transition-all hover:bg-white/10">
        <Settings className="w-5 h-5 text-foreground" />
      </button>
    </motion.div>
  );
};

export default TopBar;
