import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        year: "2024 — PRESENT",
        role: "AI ENGINEER / CV SPECIALIST",
        company: "Innovation Lab",
        desc: "Leading computer vision projects using YOLOv8 and custom transformer architectures."
    },
    {
        year: "2023 — 2024",
        role: "NLP DEVELOPER",
        company: "Context AI",
        desc: "Engineered LLM-based solutions for text analysis and human-AI interaction systems."
    },
    {
        year: "2022 — 2023",
        role: "PYTORCH RESEARCHER",
        company: "University Project",
        desc: "Researching neural networks and mathematical modeling of predictive systems."
    }
]

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '150px 0', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ marginBottom: '10rem' }}>
                    <p className="badge" style={{ marginBottom: '2rem' }}>JOURNEY</p>
                    <h2 style={{ fontSize: '10rem', lineHeight: '0.8', textTransform: 'uppercase', fontWeight: '900' }}>
                        life.
                    </h2>
                </div>

                <div className="experience-list">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)',
                                padding: '4rem 0',
                                borderTop: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <div style={{ fontSize: '0.9rem', opacity: 0.3, letterSpacing: '0.2em' }}>{exp.year}</div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>{exp.role}</h3>
                                <p style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '1rem', opacity: 0.8 }}>{exp.company}</p>
                                <p style={{ fontSize: '1rem', opacity: 0.5, maxWidth: '600px', lineHeight: '1.8' }}>{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />
                </div>
            </div>
        </section>
    )
}

export default Experience
