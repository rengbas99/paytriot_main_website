// component/ lottiePlayer.tsx

import { CSSProperties } from 'react';
import Lottie from 'react-lottie';

interface LottiePlayerProps {
  animationData: any;
  style?: CSSProperties;
  height?: number | string | undefined;
  width?: number | string | undefined;
}

export default function LottiePlayer(Props: LottiePlayerProps) {
  const { animationData, style } = Props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} style={style} />;
}
