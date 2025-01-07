import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface DownloadButtonProps {
  platform: string;
  onClick?: () => void;
}

const DownloadButton = ({ platform, onClick }: DownloadButtonProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // You would replace these URLs with your actual game file URLs
    const downloadUrls = {
      Windows: "/game-files/fighter-era-windows.zip",
      Mac: "/game-files/fighter-era-mac.zip"
    };

    const url = downloadUrls[platform as keyof typeof downloadUrls];
    
    if (url) {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = `FighterEra-${platform}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Started",
        description: `Your download for ${platform} will begin shortly.`,
      });
    }

    if (onClick) onClick();
  };

  return (
    <Button
      onClick={handleDownload}
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