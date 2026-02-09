import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, PerspectiveCamera, Sphere } from '@react-three/drei'
import gsap from 'gsap'
import heroImg from '../assets/hero.jpg'

const AvatarOrb = () => {
    const meshRef = useRef()

    useFrame((state) => {
        const { clock, mouse } = state
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.1
            meshRef.current.rotation.y = mouse.x * 0.2
            meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#ffffff"
                    speed={2}
                    distort={0.2}
                    radius={1}
                >
                    <img
                        src={heroImg}
                        style={{ display: 'none' }} // Hidden but used for texture if we were more advanced
                    />
                </MeshDistortMaterial>
            </Sphere>
        </Float>
    )
}

const Hero = () => {
    const avatarRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } })
        tl.fromTo('.text-reveal span',
            { y: '110%', skewY: 7 },
            { y: '0%', skewY: 0, stagger: 0.1, delay: 0.5 }
        )
            .fromTo('.hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 0.4, y: 0 },
                '-=1'
            )
    }, [])

    return (
        <section className="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ marginBottom: '2rem' }}>
                    <p className="badge hero-sub" style={{ letterSpacing: '0.4em' }}>AI ENGINEER // INNOVATOR</p>
                </div>

                <h1 style={{
                    fontSize: 'clamp(4rem, 12vw, 15rem)',
                    fontWeight: '900',
                    lineHeight: '0.8',
                    textTransform: 'uppercase',
                    color: '#FFF'
                }}>
                    <div className="text-reveal"><span>Akshaya</span></div><br />
                    <div className="text-reveal"><span>Engineer.</span></div>
                </h1>

                {/* The "Avatar" - A 3D Cinematic Photo Disc */}
                <div ref={avatarRef} style={{
                    marginTop: '4rem',
                    position: 'relative',
                    width: '350px',
                    height: '350px',
                    margin: '4rem auto 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        animation: 'pulse 4s ease-in-out infinite'
                    }} />

                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '10px',
                        background: 'rgba(255,255,255,0.02)',
                        backdropFilter: 'blur(10px)',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 2,
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                    }}>
                        <img
                            src={heroImg}
                            alt="Akshaya Avatar"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                filter: 'grayscale(0.8) contrast(1.1)',
                                transform: 'scale(1.1)',
                                transition: 'transform 0.5s ease'
                            }}
                        />
                    </div>

                    {/* Orbiting Ring */}
                    <div style={{
                        position: 'absolute',
                        width: '380px',
                        height: '380px',
                        borderRadius: '50%',
                        border: '1px dashed rgba(255,255,255,0.1)',
                        animation: 'spin 15s linear infinite'
                    }} />
                </div>

                <p style={{
                    marginTop: '4rem',
                    fontSize: '1.1rem',
                    maxWidth: '500px',
                    margin: '4rem auto 0',
                    lineHeight: '1.6',
                    opacity: 0.5,
                    fontWeight: '300',
                    letterSpacing: '0.05em'
                }} className="hero-sub">
                    Designing the future of human-AI collaboration through
                    <span style={{ color: 'white' }}> innovative ecosystems </span>
                    and ethical engineering.
                </p>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0.3; }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    )
}

export default Hero
