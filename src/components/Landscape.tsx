'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, PlaneGeometry } from 'three';

export default function Landscape() {
  const meshRef = useRef<Mesh>(null);
  const geometry = useMemo(() => {
    const geometry = new PlaneGeometry(100, 100, 100, 100);
    const vertices = geometry.attributes.position.array;
    
    // Create a wave-like terrain
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 2];
      vertices[i + 1] = Math.sin(x * 0.1) * 2 + Math.cos(z * 0.1) * 2;
    }
    
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Animate the terrain
    const time = state.clock.getElapsedTime();
    const vertices = meshRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 2];
      vertices[i + 1] = Math.sin(x * 0.1 + time) * 2 + Math.cos(z * 0.1 + time) * 2;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color="#1a1a1a"
        metalness={0.5}
        roughness={0.5}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
} 