import { useEffect } from 'react';

// Declare adsbygoogle on Window interface
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

const AdSense = ({ 
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: 'block' }
}: AdSenseProps) => {
  useEffect(() => {
    try {
      // Check if adsbygoogle is available
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins 
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-2520212230353217"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
};

export default AdSense;