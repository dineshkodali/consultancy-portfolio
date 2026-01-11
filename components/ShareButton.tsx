
import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  className?: string;
  title?: string;
  url?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ className, title, url }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: title || 'Nexus Strategy Group Project',
      url: url || window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyToClipboard(shareData.url);
      }
    } else {
      copyToClipboard(shareData.url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className={`relative flex items-center justify-center transition-all ${className}`}
      title="Share link"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2 text-green-500" />
          <span className="text-xs font-bold text-green-500">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4 mr-2" />
          <span className="text-xs font-bold">Share</span>
        </>
      )}
    </button>
  );
};

export default ShareButton;
