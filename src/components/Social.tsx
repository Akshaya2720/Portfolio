import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

import { config } from '../config'

const socials = [
    { name: "linkedin", url: config.contact.linkedin, icon: <Linkedin size={24} /> },
    { name: "github", url: config.contact.github, icon: <Github size={24} /> },
    { name: "twitter", url: config.contact.twitter, icon: <Twitter size={24} /> },
    { name: "email", url: `mailto:${config.social.email}`, icon: <Mail size={24} /> }
]

const Social = () => {
    return (
        <section id="social" style={{ padding: '100px 0', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                padding: '2rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '20px',
                                color: 'rgba(255,255,255,0.4)',
                                transition: 'all 0.4s ease',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                                e.currentTarget.style.color = '#FFF'
                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                                e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                                e.currentTarget.style.backgroundColor = 'transparent'
                            }}
                        >
                            {social.icon}
                            <span style={{ fontSize: '1.2rem', fontWeight: '700', textTransform: 'lowercase' }}>{social.name}.</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Social
