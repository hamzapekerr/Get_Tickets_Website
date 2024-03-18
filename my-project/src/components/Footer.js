import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    En hızlı ve güvenilir bilet fırsatlarımızı almak için bültene katılın.
                </p>
                <p className='footer-subscription-text'>
                    İstediğin zaman üyelikten çıkabilirsin.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='E-mail adresiniz' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Üye Ol</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Tumbilet Hakkında</h2>
                        <Link to="/">Hakkımızda</Link>
                        <Link to="/">Kariyer</Link>
                        <Link to="/">İletişim</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Bilet</h2>
                        <Link to="/ucak">Uçak Bileti</Link>
                        <Link to="/otobus">Otobüs Bileti</Link>
                        <Link to="/sinema">Sinema Bileti</Link>
                        <Link to="/tiyatro">Tiyatro Bileti</Link>
                        <Link to="/konser">Konser Bileti</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Sosyal Medya</h2>
                        <Link to="/">İnstagram</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to="/" style={{ textDecoration: "none", borderBottom: "none" }} className='social-logo'>
                            TUMBILET <i className="fas fa-ticket-alt"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>TUMBILET © 2024</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link instagram'
                            to="/"
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to="/"
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer