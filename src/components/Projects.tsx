import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'

// Placeholder images for project features
const projects = [
    {
        num: "01",
        title: "NEURAL PARKING",
        category: "CV / AI ENGINEER",
        desc: "Advanced parking slot intelligence using geometric gap inference and YOLOv8.",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800"
    },
    {
        num: "02",
        title: "TRANSFORMER HUB",
        category: "NLP / ARCHITECTURE",
        desc: "High-fidelity AI detection system with context-aware text humanization.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        num: "03",
        title: "CYBER CORE",
        category: "CREATIVE CODING",
        desc: "Experimental digital identity engine built with React and Three.js physics.",
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
    }
]

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const revealRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section id="work" style={{ backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ marginBottom: '10rem' }}>
                    <p className="badge" style={{ marginBottom: '2rem' }}>CASE STUDIES</p>
                    <h2 style={{ fontSize: 'clamp(5rem, 15vw, 15rem)', lineHeight: '0.8', fontWeight: '900', textTransform: 'lowercase' }}>
                        works.
                    </h2>
                </div>

                <div className="projects-grid" style={{ position: 'relative' }}>
                    {/* Hover Image Reveal Container */}
                    <AnimatePresence>
                        {hoveredIndex !== null && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                    x: mousePos.x - 200, // Offset for center
                                    y: mousePos.y - 120
                                }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                                style={{
                                    position: 'fixed',
                                    width: '400px',
                                    height: '240px',
                                    zIndex: 100,
                                    pointerEvents: 'none',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
                                }}
                            >
                                <img
                                    src={projects[hoveredIndex].image}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    alt="Project Preview"
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.5))'
                                }} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {projects.map((p, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '100px 1fr auto',
                                padding: '6rem 0',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                alignItems: 'center',
                                cursor: 'none' // Special cursor feeling
                            }}
                        >
                            <span style={{ fontSize: '1.2rem', fontWeight: '800', opacity: 0.2 }}>{p.num}</span>

                            <div>
                                <h3 style={{
                                    fontSize: '5rem',
                                    fontWeight: '900',
                                    color: hoveredIndex === i ? '#FFF' : 'rgba(255,255,255,0.4)',
                                    transition: 'color 0.4s ease'
                                }}>
                                    {p.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.8rem',
                                    letterSpacing: '0.2rem',
                                    opacity: hoveredIndex === i ? 0.8 : 0.2,
                                    transition: 'opacity 0.4s ease'
                                }}>
                                    {p.category}
                                </p>
                            </div>

                            <motion.div
                                animate={{ rotate: hoveredIndex === i ? 45 : 0 }}
                                style={{ opacity: hoveredIndex === i ? 1 : 0.1 }}
                            >
                                <ArrowUpRight size={64} />
                            </motion.div>
                        </div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
                </div>
            </div>
        </section>
    )
}

export default Projects
