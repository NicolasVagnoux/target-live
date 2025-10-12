import React from 'react';
import './footer.scss';
import Section from '../Section/Section';

const Footer = () => {
  return (
    <Section color='black'>
      <footer className='footer container'>
        <div className='separator'></div>
        <div className='footer__inner'>
          <div></div>
          <div className='footer__inner__copyright'>
            <p>Copyright © 2025 Target Live | Powered by NVP</p>
            <p>Copyright © 2025 Target Live</p>
            <p>Powered by NVP</p>
          </div>
          <a
            href='https://www.instagram.com/targetlive.production/'
            target='_blank'
          >
            <img src='./assets/instagram.svg' alt='hearscape' />
            <span>Rejoignez-nous !</span>
          </a>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
