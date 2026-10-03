import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const HERO_FPS = 30;
export const HERO_DURATION_IN_FRAMES = 210;
export const HERO_WIDTH = 1280;
export const HERO_HEIGHT = 720;
export const HERO_SQUARE = 720;

const NODES = [
  { id: "query", x: 28, y: 34 },
  { id: "chunk", x: 48, y: 20 },
  { id: "rank", x: 70, y: 32 },
  { id: "doc", x: 36, y: 58 },
  { id: "ctx", x: 62, y: 56 },
  { id: "gen", x: 78, y: 48 },
];

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [2, 4],
  [4, 5],
  [2, 5],
];

const LINES = [
  { start: 10, text: "$ rag.query --stream" },
  { start: 58, text: "retrieve   4 passages" },
  { start: 104, text: "rank       context" },
  { start: 148, text: "answer     streaming" },
];

const typed = (text: string, frame: number, start: number) => {
  const count = Math.max(0, Math.floor((frame - start) / 1.6));
  return text.slice(0, Math.min(text.length, count));
};

export const HeroLoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const side = Math.min(width, height);
  const originX = (width - side) / 2;
  const originY = (height - side) / 2;
  const fade = interpolate(frame, [0, 14, 196, 209], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const beam = interpolate(frame, [0, 209], [-30, 110]);

  const point = (node: (typeof NODES)[number]) => ({
    x: originX + (node.x / 100) * side,
    y: originY + (node.y / 100) * side * 0.62 + side * 0.08,
  });

  const edgeProgress = (index: number) =>
    interpolate(frame, [8 + index * 8, 36 + index * 8], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  const tokenEdge = Math.floor(frame / 28) % EDGES.length;
  const tokenT = (frame % 28) / 28;
  const [fromIndex, toIndex] = EDGES[tokenEdge];
  const from = point(NODES[fromIndex]);
  const to = point(NODES[toIndex]);
  const token = {
    x: from.x + (to.x - from.x) * tokenT,
    y: from.y + (to.y - from.y) * tokenT,
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#07060b", fontFamily: "var(--font-mono), ui-monospace, monospace", opacity: fade }}>
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: originY + side * 0.06,
          left: `${beam}%`,
          width: "28%",
          height: 2,
          background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
        }}
      />
      <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
        {EDGES.map(([a, b], index) => {
          const start = point(NODES[a]);
          const end = point(NODES[b]);
          const length = Math.hypot(end.x - start.x, end.y - start.y);
          const drawn = edgeProgress(index);
          return (
            <line
              key={`${a}-${b}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="#a78bfa"
              strokeOpacity={0.75}
              strokeWidth={1.5}
              strokeDasharray={length}
              strokeDashoffset={length * (1 - drawn)}
            />
          );
        })}
        {NODES.map((node, index) => {
          const position = point(node);
          const appear = interpolate(frame, [4 + index * 6, 18 + index * 6], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <g key={node.id} opacity={appear}>
              <circle cx={position.x} cy={position.y} r={16} fill="#12101a" stroke="#7c3aed" strokeWidth={1.5} />
              <circle cx={position.x} cy={position.y} r={3.5} fill="#a78bfa" />
              <text
                x={position.x}
                y={position.y + 32}
                textAnchor="middle"
                fill="#d4d4d8"
                fontSize={13}
              >
                {node.id}
              </text>
            </g>
          );
        })}
        <circle cx={token.x} cy={token.y} r={5} fill="#ffffff" />
        <circle cx={token.x} cy={token.y} r={10} fill="#7c3aed" opacity={0.35} />
      </svg>
      <div
        style={{
          position: "absolute",
          left: originX + side * 0.12,
          width: side * 0.76,
          top: originY + side * 0.72,
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          background: "#12101a",
          padding: "14px 16px",
          color: "#d4d4d8",
          fontSize: 15,
          lineHeight: 1.55,
        }}
      >
        {LINES.map((line, index) => {
          const value = typed(line.text, frame, line.start);
          if (!value) return null;
          const next = LINES[index + 1];
          const active = !next || frame < next.start;
          return (
            <div key={line.text}>
              {value}
              {active && frame % 30 < 16 ? "▍" : ""}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
