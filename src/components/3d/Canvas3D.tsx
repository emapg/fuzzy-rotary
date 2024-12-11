import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { Scene3D } from './Scene3D';
import { LoadingSpinner } from '../common/LoadingSpinner';

export function Canvas3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Scene3D />
      </Suspense>
    </Canvas>
  );
}