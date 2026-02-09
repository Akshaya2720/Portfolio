import React from 'react'
import { motion } from 'framer-motion'

const Identity = () => {
    return (
        <section id="about" style={{ padding: '150px 0', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ marginBottom: '10rem' }}>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.3em', opacity: 0.4, marginBottom: '2rem' }}>ABOUT ME</p>
                    <h2 style={{ fontSize: '8rem', lineHeight: '0.9', textTransform: 'uppercase', fontWeight: '900' }}>
                        I BUILD <br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>INTELLIGENCE.</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '4rem' }}>
                    <div style={{ fontSize: '0.8rem', opacity: 0.3, letterSpacing: '0.2em' }}>THE STORY</div>
                    <div>
                        <p style={{ fontSize: '2.5rem', lineHeight: '1.4', fontWeight: '300', marginBottom: '3rem' }}>
                            Based in the digital frontier, I specialize in crafting
                            <span style={{ color: 'white', fontWeight: '500' }}> Artificial Intelligence </span>
                            solutions that feel intuitive yet powerful.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.6, maxWidth: '600px' }}>
                            My engineering philosophy is simple: prioritize clarity and impact.
                            Whether it's deploying YOLO models for computer vision or fine-tuning
                            Large Language Models, I ensure every architectural decision serves
                            the end-user's experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Identity
