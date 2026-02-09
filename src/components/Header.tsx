import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Header = () => {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '2.5rem 4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            mixBlendMode: 'difference'
        }}>
            <div className="logo" style={{
                fontSize: '1.25rem',
                fontWeight: '800',
                letterSpacing: '-0.04em',
                color: '#FFF',
                textTransform: 'lowercase'
            }}>
                akshaya.
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a
                    href="#contact"
                    className="lets-talk"
                    style={{
                        padding: '0.8rem 1.8rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '100px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#FFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#FFF'
                        e.currentTarget.style.color = '#000'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#FFF'
                    }}
                >
                    Let's talk <ArrowUpRight size={16} />
                </a>
            </div>
        </header>
    )
}

export default Header
