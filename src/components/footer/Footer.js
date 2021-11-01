import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Guido Abelleira</h1>
                <p>Based in your city</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Desing by Guido Abelleira
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/guidoabelleira" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/guidoabelleira" target="_blank" rel="noreferrer">
                        <i className="fab fa-github github"></i>
                    </a>
                    <a href="https://twitter.com/AbelleiraGuido" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
