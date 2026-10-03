"use client";

import { Player } from "@remotion/player";
import {
  HERO_DURATION_IN_FRAMES,
  HERO_FPS,
  HERO_HEIGHT,
  HERO_WIDTH,
  HeroLoop,
} from "@/remotion/HeroLoop";

export default function HeroPlayer() {
  return (
    <Player
      component={HeroLoop}
      durationInFrames={HERO_DURATION_IN_FRAMES}
      compositionWidth={HERO_WIDTH}
      compositionHeight={HERO_HEIGHT}
      fps={HERO_FPS}
      loop
      autoPlay
      controls={false}
      clickToPlay={false}
      doubleClickToFullscreen={false}
      allowFullscreen={false}
      showVolumeControls={false}
      initiallyMuted
      numberOfSharedAudioTags={0}
      acknowledgeRemotionLicense
      style={{ width: "100%", height: "100%" }}
    />
  );
}
