import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

interface IconProps {
  position: [number, number, number];
  icon: React.ReactNode;
  delay?: number;
}

function FloatingIcon({ position, icon, delay = 0 }: IconProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() + delay;
      ref.current.position.y = position[1] + Math.sin(t) * 0.2;
      ref.current.rotation.y = t * 0.5;
    }
  });

  return (
    <motion.group
      ref={ref}
      position={position}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: delay * 0.2, duration: 0.5 }}
    >
      <Html transform>
        <div className="text-3xl">{icon}</div>
      </Html>
    </motion.group>
  );
}

export function FloatingIcons() {
  return (
    <group>
      <FloatingIcon position={[-2, 0, 0]} icon="⚛️" delay={0} />
      <FloatingIcon position={[0, 1, 0]} icon="🎨" delay={1} />
      <FloatingIcon position={[2, 0, 0]} icon="💻" delay={2} />
      <FloatingIcon position={[0, -1, 0]} icon="🚀" delay={3} />
    </group>
  );
}