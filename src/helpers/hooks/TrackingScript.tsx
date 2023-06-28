import React, { useEffect } from 'react';

const TrackingScript: React.FC = () => {
  useEffect(() => {
    const vqTrackId = (): string => 'e2f1458b-ba3d-4fe0-bfea-6adcf2f59cc2';

    const script = document.createElement('script');
    script.id = 'vq_tracking';
    script.src = `//t.visitorqueue.com/p/tracking.min.js?id=${vqTrackId()}`;
    script.async = true;
    script.setAttribute('data-id', vqTrackId());

    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);

  return null;
};

export default TrackingScript;