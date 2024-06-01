import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/accessibility">Accessibility</a>
                <a href="/user-agreement">User Agreement</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/cookie-policy">Cookie Policy</a>
                <a href="/copyright-policy">Copyright Policy</a>
                <a href="/brand-policy">Brand Policy</a>
                <a href="/guest-controls">Guest Controls</a>
                <a href="/community-guidelines">Community Guidelines</a>
            </div>
            <div className="footer-bottom">
                <span>SkillUp © 2024</span>
            </div>
        </footer>
    );
};

export default Footer;
