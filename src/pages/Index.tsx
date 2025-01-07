import { motion } from "framer-motion";
import { Sword, Shield, Zap, Trophy } from "lucide-react";
import DownloadButton from "@/components/DownloadButton";
import FeatureCard from "@/components/FeatureCard";
import SystemRequirements from "@/components/SystemRequirements";
import ScreenshotGallery from "@/components/ScreenshotGallery";

const Index = () => {
  const features = [
    {
      icon: <Sword />,
      title: "Epic Battles",
      description: "Engage in intense combat with unique fighting mechanics",
    },
    {
      icon: <Shield />,
      title: "Multiple Characters",
      description: "Choose from a diverse roster of fighters",
    },
    {
      icon: <Zap />,
      title: "Special Moves",
      description: "Master devastating combos and special abilities",
    },
    {
      icon: <Trophy />,
      title: "Ranked Matches",
      description: "Compete globally and climb the leaderboards",
    },
  ];

  return (
    <div className="min-h-screen bg-game-dark text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-game-purple/20 to-game-dark" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Fighter Era</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Enter a new age of combat where legends are born and battles are won
            </p>
            <DownloadButton platform="Windows" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-game-charcoal">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Screenshots</h2>
          <ScreenshotGallery />
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="py-24 bg-game-charcoal">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">
            System Requirements
          </h2>
          <SystemRequirements />
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Fight?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download now and become part of the next evolution in fighting games
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <DownloadButton platform="Windows" />
            <DownloadButton platform="Mac" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-game-purple/20">
        <div className="container text-center text-gray-400">
          <p>&copy; 2024 Fighter Era. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;