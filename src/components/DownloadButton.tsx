import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  platform: string;
  onClick?: () => void;
}

const DownloadButton = ({ platform, onClick }: DownloadButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="relative overflow-hidden bg-game-purple hover:bg-game-purple/90 text-white px-8 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
      <span className="flex items-center gap-2 text-lg font-semibold">
        <Download className="w-6 h-6" />
        Download for {platform}
      </span>
    </Button>
  );
};

export default DownloadButton;