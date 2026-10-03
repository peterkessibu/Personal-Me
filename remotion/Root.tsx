import React from "react";
import { Composition } from "remotion";
import {
  HERO_DURATION_IN_FRAMES,
  HERO_FPS,
  HERO_HEIGHT,
  HERO_SQUARE,
  HERO_WIDTH,
  HeroLoop,
} from "./HeroLoop";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroLoop"
        component={HeroLoop}
        durationInFrames={HERO_DURATION_IN_FRAMES}
        fps={HERO_FPS}
        width={HERO_WIDTH}
        height={HERO_HEIGHT}
      />
      <Composition
        id="HeroLoopSquare"
        component={HeroLoop}
        durationInFrames={HERO_DURATION_IN_FRAMES}
        fps={HERO_FPS}
        width={HERO_SQUARE}
        height={HERO_SQUARE}
      />
    </>
  );
};
