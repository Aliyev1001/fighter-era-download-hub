import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-6 rounded-2xl bg-game-charcoal/50 backdrop-blur-md border border-game-purple/20 shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-game-purple/10 to-transparent rounded-2xl" />
      <div className="relative z-10">
        <div className="w-12 h-12 mb-4 text-game-purple">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;