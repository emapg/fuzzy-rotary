import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { FloatingIcons } from './FloatingIcons';

export function Scene3D() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time) * 0.5;
      sphereRef.current.rotation.x = time * 0.5;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.y = time * 0.6;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[-2, 0, 0]}>
        <MeshDistortMaterial
          color="#4f46e5"
          speed={2}
          distort={0.4}
          radius={1}
        />
      </Sphere>

      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[2, 0, 0]}>
        <meshStandardMaterial color="#4f46e5" />
      </Box>

      <FloatingIcons />
    </>
  );
}