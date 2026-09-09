"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Grid, Lightformer, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// Brushed-brass kinetic sculpture. Abstract geometry only, no logos.
const GOLD = "#d4a853";
const DARK_GOLD = "#8b7535";
const RIM = "#4d6cff";

type Piece = {
  kind: "knot" | "ring" | "box" | "sphere";
  pos: [number, number, number];
  rot?: [number, number, number];
  scale?: number;
  color?: string;
  mobile?: boolean; // survives the phone cut
};

const PIECES: Piece[] = [
  { kind: "knot", pos: [0, 0, 0], scale: 1, mobile: true },
  { kind: "ring", pos: [0, 0, 0], rot: [1.2, 0.3, 0], scale: 2.2, mobile: true },
  { kind: "ring", pos: [0, 0, 0], rot: [0.4, 1.1, 0.6], scale: 2.8, color: DARK_GOLD },
  { kind: "box", pos: [1.9, 1.2, -0.6], rot: [0.5, 0.4, 0.2], scale: 0.55, mobile: true },
  { kind: "box", pos: [-2.1, -0.9, 0.4], rot: [0.2, 0.8, 0.5], scale: 0.45 },
  { kind: "box", pos: [0.6, -2.0, 0.9], rot: [0.9, 0.1, 0.3], scale: 0.35, color: DARK_GOLD },
  { kind: "sphere", pos: [-1.4, 1.8, 0.8], scale: 0.28, mobile: true },
  { kind: "sphere", pos: [2.3, -1.4, -1.2], scale: 0.18, color: DARK_GOLD },
];

function Brass({ color = GOLD }: { color?: string }) {
  return <meshStandardMaterial color={color} metalness={1} roughness={0.28} envMapIntensity={1.4} />;
}

function PieceMesh({ p }: { p: Piece }) {
  const s = p.scale ?? 1;
  switch (p.kind) {
    case "knot":
      return (
        <mesh scale={s} castShadow>
          <torusKnotGeometry args={[0.8, 0.26, 200, 32, 2, 3]} />
          <Brass color={p.color} />
        </mesh>
      );
    case "ring":
      return (
        <mesh rotation={p.rot} scale={s}>
          <torusGeometry args={[1, 0.035, 16, 120]} />
          <Brass color={p.color} />
        </mesh>
      );
    case "box":
      return (
        <RoundedBox args={[1, 1, 1]} radius={0.12} smoothness={4} rotation={p.rot} scale={s}>
          <Brass color={p.color} />
        </RoundedBox>
      );
    case "sphere":
      return (
        <mesh scale={s}>
          <sphereGeometry args={[1, 48, 48]} />
          <Brass color={p.color} />
        </mesh>
      );
  }
}

function Cluster({ pieces, pointer }: { pieces: Piece[]; pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const spreadRefs = useRef<(THREE.Group | null)[]>([]);
  const { viewport } = useThree();
  const dirs = useMemo(
    () => pieces.map((p) => new THREE.Vector3(...p.pos).normalize()),
    [pieces],
  );

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    // scroll 0..1 across the first viewport height
    const scroll = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    // idle spin + pointer tilt + scroll twist, all spring-damped
    const targetY = t * 0.12 + pointer.current.x * 0.45 + scroll * 1.6;
    const targetX = pointer.current.y * -0.35 + scroll * 0.5;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 3, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 3, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, -scroll * 1.2, 3, dt);
    // pieces drift apart along their own radial direction as you scroll
    spreadRefs.current.forEach((s, i) => {
      if (!s) return;
      const d = dirs[i];
      const k = scroll * 1.4;
      s.position.set(d.x * k, d.y * k, d.z * k);
    });
  });

  const fit = Math.min(viewport.width, viewport.height) / 7;

  return (
    <group ref={group} scale={fit}>
      {pieces.map((p, i) => (
        <group key={i} ref={(el) => { spreadRefs.current[i] = el; }}>
          <Float speed={1.2} rotationIntensity={p.kind === "knot" ? 0.15 : 0.6} floatIntensity={0.6}>
            <group position={p.pos}>
              <PieceMesh p={p} />
            </group>
          </Float>
        </group>
      ))}
    </group>
  );
}

function Scene({ mobile }: { mobile: boolean }) {
  const pointer = useRef({ x: 0, y: 0 });
  const pieces = useMemo(() => (mobile ? PIECES.filter((p) => p.mobile) : PIECES), [mobile]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    // ponytail: no iOS permission prompt for gyro; if events never fire, touch drag (pointermove) still drives tilt.
    const onTilt = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      pointer.current.x = THREE.MathUtils.clamp(e.gamma / 30, -1, 1);
      pointer.current.y = THREE.MathUtils.clamp((e.beta - 45) / 30, -1, 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    if (mobile) window.addEventListener("deviceorientation", onTilt);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, [mobile]);

  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />
      <fog attach="fog" args={["#0a0a0a", 9, 16]} />
      <ambientLight intensity={0.15} />
      <spotLight position={[4, 6, 5]} angle={0.5} penumbra={1} intensity={60} color={GOLD} />
      <directionalLight position={[-5, 2, -4]} intensity={2.5} color={RIM} />
      {!mobile && (
        <Environment resolution={256}>
          <Lightformer intensity={3} color="#fff2d0" position={[0, 5, -3]} scale={[8, 2, 1]} />
          <Lightformer intensity={1.2} color={RIM} position={[-6, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 1, 1]} />
          <Lightformer intensity={2} color={GOLD} position={[6, -2, 2]} rotation-y={-Math.PI / 2} scale={[6, 1, 1]} />
        </Environment>
      )}
      <Cluster pieces={pieces} pointer={pointer} />
      <Grid
        position={[0, -3.2, 0]}
        args={[30, 30]}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor={DARK_GOLD}
        sectionSize={3}
        sectionThickness={1}
        sectionColor={GOLD}
        fadeDistance={14}
        fadeStrength={1.5}
        infiniteGrid
      />
    </>
  );
}

function Fallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url(/sculpture.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default function Sculpture({ active = true }: { active?: boolean }) {
  const [mode, setMode] = useState<"pending" | "webgl" | "static">("pending");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = document.createElement("canvas").getContext("webgl2");
    setMobile(window.matchMedia("(pointer: coarse)").matches);
    setMode(!reduced && gl ? "webgl" : "static");
  }, []);

  if (mode === "pending") return null;
  if (mode === "static") return <Fallback />;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 8], fov: 35 }}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Scene mobile={mobile} />
    </Canvas>
  );
}
