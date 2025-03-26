'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function Avatar() {
  const avatarRef = useRef<Mesh>(null);

  useFrame(() => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={avatarRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#4a90e2"
        metalness={0.7}
        roughness={0.3}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export default function Avatar3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Avatar />
    </Canvas>
  );
} 