import { FC, CSSProperties } from 'react';

declare module 'react-typewriter-effect' {
  export interface TypewriterEffectProps {
    textStyle?: CSSProperties;
    multiText: string[];
    multiTextDelay?: number;
    typeSpeed?: number;
    multiTextLoop?: boolean;
    cursorColor?: string;
    cursorWidth?: number;
    hideCursorAfterTextFinishes?: boolean;
  }

  const TypewriterEffect: FC<TypewriterEffectProps>;
  export default TypewriterEffect;
} 