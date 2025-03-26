'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, PlaneGeometry, MeshStandardMaterial, Vector3 } from 'three';

// Define professional milestones
const milestones = [
  { x: -20, y: -20, height: 3, label: 'First Job' },
  { x: 20, y: -15, height: 4, label: 'Major Project' },
  { x: -15, y: 20, height: 5, label: 'Career Growth' },
  { x: 15, y: 15, height: 6, label: 'Current Role' },
];

export default function Landscape() {
  const meshRef = useRef<Mesh>(null);
  const timeRef = useRef(0);

  // Create a more interesting terrain using vertices
  const geometry = useMemo(() => {
    const geometry = new PlaneGeometry(100, 100, 50, 50);
    const vertices = geometry.attributes.position.array;
    
    // Create terrain features
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      
      // Create a valley in the center
      const distanceFromCenter = Math.sqrt(x * x + y * y);
      const valleyHeight = Math.max(0, 1 - distanceFromCenter / 30);
      
      // Add milestone peaks
      let milestoneHeight = 0;
      milestones.forEach(milestone => {
        const distance = Math.sqrt(
          Math.pow(x - milestone.x, 2) + 
          Math.pow(y - milestone.y, 2)
        );
        const peakHeight = Math.max(0, milestone.height * (1 - distance / 10));
        milestoneHeight = Math.max(milestoneHeight, peakHeight);
      });
      
      // Add some random variation
      const randomHeight = Math.random() * 0.5 - 0.25;
      
      // Combine all height factors
      vertices[i + 2] = valleyHeight * 2 + milestoneHeight + randomHeight;
    }
    
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  const material = useMemo(() => {
    return new MeshStandardMaterial({
      color: '#4a90e2',
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      metalness: 0.5,
      roughness: 0.5,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      timeRef.current += 0.01;
      
      // Gentle rotation
      meshRef.current.rotation.y += 0.001;
      
      // Subtle wave animation
      const vertices = geometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];
        const distance = Math.sqrt(x * x + y * y);
        
        // Add wave motion
        vertices[i + 2] += Math.sin(distance * 0.1 + timeRef.current) * 0.01;
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} />
  );
} 