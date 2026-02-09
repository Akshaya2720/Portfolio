import React from 'react'

const Footer = () => {
    return (
        <footer style={{
            padding: '180px 0 60px',
            backgroundColor: '#000',
            color: '#FFF',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '120px' }}>
                    <p style={{ fontSize: '0.8rem', letterSpacing: '0.3em', opacity: 0.4, marginBottom: '2rem' }}>READY TO START?</p>
                    <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', letterSpacing: '-0.05em', lineHeight: '0.9', fontWeight: '900', textTransform: 'uppercase' }}>
                        INTERESTED IN <br />
                        <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>COLLABORATING?</span>
                    </h2>

                    <div style={{ marginTop: '5rem' }}>
                        <a
                            href="mailto:akshaya@example.com"
                            style={{
                                fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                                fontWeight: '300',
                                borderBottom: '1px solid rgba(255,255,255,0.2)',
                                paddingBottom: '0.5rem',
                                color: '#FFF'
                            }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'white'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'}
                        >
                            akshaya@example.com
                        </a>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '4rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    opacity: 0.3,
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em'
                }}>
                    <div>© {new Date().getFullYear()} AKSHAYA. DIGITAL ENGINEER.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="https://linkedin.com/in/akshaya-r-92a062298/">LINKEDIN</a>
                        <a href="https://github.com/Akshaya2720">GITHUB</a>
                        <a href="#">X / TWITTER</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
