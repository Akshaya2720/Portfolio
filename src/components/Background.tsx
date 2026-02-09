import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const MeshGradient = () => {
    const meshRef = useRef()

    useFrame((state) => {
        const { clock } = state
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.05
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.03
        }
    })

    return (
        <group>
            {/* Focal point gradient mesh */}
            <Sphere ref={meshRef} args={[10, 64, 64]} position={[0, 0, -20]}>
                <MeshDistortMaterial
                    color="#1e1e2e"
                    speed={2}
                    distort={0.5}
                    radius={1}
                    roughness={0.4}
                    metalness={0.2}
                    transparent
                    opacity={0.3}
                />
            </Sphere>
        </group>
    )
}

const Background = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: '#000'
        }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
                <MeshGradient />
            </Canvas>

            {/* Grain Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                opacity: 0.1,
                pointerEvents: 'none',
                zIndex: 1
            }} />
        </div>
    )
}

export default Background
