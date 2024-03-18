import React from 'react'
import '../../App.css';
import "../styles/Iletisim.css";
import Footer from '../Footer';

export default function SignUp() {
    return (
        <div className="signup-page">
            <div className="contact">
                <div
                    className="leftSide"
                    style={{ backgroundImage: 'url("./images/img-home.jpg")' }}
                ></div>

                <div className="rightSide');">
                    <h1> İletişim</h1>

                    <form id="contact-form" method="POST">
                        <label htmlFor="name">Ad</label>
                        <input name="name" placeholder="Adınızı Giriniz..." type="text" />
                        <label htmlFor="name">Soyad</label>
                        <input name="name" placeholder="Soyadınızı Giriniz..." type="text" />
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="E-mailinizi Giriniz..." type="email" />
                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Mesajı Giriniz..."
                            name="message"
                            required
                        ></textarea>
                        <button type="submit"> ÜYE OL</button>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
}

