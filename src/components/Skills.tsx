import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
    { name: "LANGUAGES", items: ["Python", "JavaScript", "C++", "SQL"] },
    { name: "AI / ML", items: ["PyTorch", "TensorFlow", "YOLOv8", "NLTK"] },
    { name: "TOOLS", items: ["Docker", "Git", "AWS", "Vite"] }
]

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '150px 0', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ marginBottom: '10rem', textAlign: 'right' }}>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.3em', opacity: 0.4, marginBottom: '2rem' }}>TECHNICAL STACK</p>
                    <h2 style={{ fontSize: '8rem', lineHeight: '0.9', textTransform: 'uppercase', fontWeight: '900' }}>
                        TOOLS OF <br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>CHOICE.</span>
                    </h2>
                </div>

                <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 style={{ fontSize: '0.8rem', letterSpacing: '0.2em', opacity: 0.3, marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>{cat.name}</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {cat.items.map((item, j) => (
                                    <div key={j} style={{ fontSize: '1.5rem', fontWeight: '400' }}>{item}</div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
