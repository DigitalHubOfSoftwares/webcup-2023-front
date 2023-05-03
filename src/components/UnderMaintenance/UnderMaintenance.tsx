// components/UnderMaintenance.tsx

import * as React from 'react';
//import { FaSpinner } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stats, Text } from "@react-three/drei";

type UnderMaintenanceProps = {
  message?: string;
};

const UnderMaintenance: React.FC<UnderMaintenanceProps> = ({ message = 'We are currently under maintenance.' }) => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
		<MyText />
		<OrbitControls />
      </Canvas>
      <div style={{ position: 'absolute', zIndex: 1 }}>
		<h1>System Aliens</h1>
        <h1 style={{ fontFamily: 'sans-serif', fontSize: '3rem', color: '#fff', textAlign: 'center' }}>{message}</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {/* <FaSpinner style={{ animation: 'spin 2s infinite linear', fontSize: '2rem', color: '#fff' }} /> */}
        </div>
      </div>
    </div>
  );
};

const Box = () => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const [hovered, setHover] = React.useState(false);

  useFrame(() => {
	if (meshRef.current){
		meshRef.current.rotation.y += 0.01;
	}
  });

  const handlePointerOver = React.useCallback(() => setHover(true), []);
  const handlePointerOut = React.useCallback(() => setHover(false), []);

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'yellow' : 'blue'} />
    </mesh>
  );
};

const MyText = () => {
	return (
		<Text
			scale={[1, 1, 1]}
			position={[0, 2, 0]}
			color="white" // default
		>
        	System Aliens
      	</Text>
	);
}

export default UnderMaintenance;
