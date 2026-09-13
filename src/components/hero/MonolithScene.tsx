"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { MathUtils, type Group, type Mesh } from "three";

/* Palette mirrors tailwind.config.ts so the scene belongs to the page. */
const ORANGE = "#B85C3A";
const ORANGE_DEEP = "#8F4029";
const INK = "#171717";
const BONE = "#E8E2D5";

type SlabProps = {
  args: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  edgeColor: string;
  /** Offsets each slab's drift so the cluster never pulses in unison. */
  phase: number;
  drift: number;
  animate: boolean;
};

function Slab({
  args,
  position,
  rotation,
  color,
  edgeColor,
  phase,
  drift,
  animate,
}: SlabProps) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh || !animate) return;
    const t = state.clock.elapsedTime;
    // Mutate in place — allocating a Vector3 here would run 60x/second.
    mesh.position.y = position[1] + Math.sin(t * drift + phase) * 0.14;
    mesh.rotation.z = rotation[2] + Math.sin(t * drift * 0.6 + phase) * 0.05;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={color}
        roughness={0.78}
        metalness={0}
        flatShading
      />
      {/* Hard outlines are what make this read as brutalist rather than generic 3D. */}
      <Edges threshold={15} color={edgeColor} scale={1.002} />
    </mesh>
  );
}

function Composition({ animate }: { animate: boolean }) {
  const group = useRef<Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  /*
   * Pointer is tracked on window rather than via R3F's canvas events: the
   * wrapper is pointer-events-none so the portrait and badge stay clickable,
   * and parallax should respond across the whole hero, not just the canvas.
   */
  useEffect(() => {
    if (!animate) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [animate]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || !animate) return;
    const spin = state.clock.elapsedTime * 0.12;
    g.rotation.y = MathUtils.damp(
      g.rotation.y,
      0.5 + spin + pointer.current.x * 0.34,
      3,
      delta,
    );
    g.rotation.x = MathUtils.damp(
      g.rotation.x,
      0.12 + pointer.current.y * 0.16,
      3,
      delta,
    );
  });

  return (
    <group
      ref={group}
      position={[-1.3, -0.45, 0]}
      rotation={[0.12, 0.5, 0]}
      scale={0.92}
    >
      {/* Central monolith — the focal mass the portrait stands against. */}
      <Slab
        args={[1.7, 3.3, 1.7]}
        position={[0, 0.2, 0]}
        rotation={[0, 0, 0]}
        color={ORANGE}
        edgeColor={INK}
        phase={0}
        drift={0.5}
        animate={animate}
      />
      {/* Tall rule rising past the portrait, echoing the page's hairlines. */}
      <Slab
        args={[0.24, 3.1, 0.24]}
        position={[-1.72, 0.25, -0.5]}
        rotation={[0, 0, -0.06]}
        color={INK}
        edgeColor={BONE}
        phase={2.2}
        drift={0.44}
        animate={animate}
      />
      {/* Counterweight on the open side. */}
      <Slab
        args={[0.82, 1.9, 0.82]}
        position={[1.9, -0.85, 0.3]}
        rotation={[0, 0.42, 0.16]}
        color={INK}
        edgeColor={BONE}
        phase={1.7}
        drift={0.62}
        animate={animate}
      />
      {/* Deep-orange cube — the one warm accent low in the frame. */}
      <Slab
        args={[0.92, 0.92, 0.92]}
        position={[-1.5, -1.65, 0.95]}
        rotation={[0.3, 0.4, 0.22]}
        color={ORANGE_DEEP}
        edgeColor={INK}
        phase={3.1}
        drift={0.7}
        animate={animate}
      />
      {/* Plinth, grounding the stack wider than the portrait. */}
      <Slab
        args={[3.0, 0.3, 1.9]}
        position={[0, -2.25, -0.1]}
        rotation={[0, 0.2, 0]}
        color={INK}
        edgeColor={BONE}
        phase={0.9}
        drift={0.38}
        animate={animate}
      />
    </group>
  );
}

export default function MonolithScene({ animate }: { animate: boolean }) {
  return (
    <Canvas
      /* Capped DPR — uncapped is the main cause of a laggy 3D hero on retina. */
      dpr={[1, 2]}
      camera={{ position: [0, 0, 8.6], fov: 34 }}
      /* No postprocessing in this scene, so MSAA is cheaper and sharper than SMAA. */
      gl={{ antialias: true, powerPreference: "high-performance" }}
      /* Off-screen or reduced-motion: render one frame, then stop entirely. */
      frameloop={animate ? "always" : "demand"}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 6, 5]} intensity={3.1} />
      <directionalLight position={[-5, 1, -3]} intensity={0.45} color={BONE} />
      <Composition animate={animate} />
    </Canvas>
  );
}
