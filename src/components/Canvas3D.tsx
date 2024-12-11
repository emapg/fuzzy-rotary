import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export function Canvas3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      className="w-full h-full"
    >
      <Scene />
    </Canvas>
  );
}