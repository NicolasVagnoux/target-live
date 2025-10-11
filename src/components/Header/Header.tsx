'use client';
import React from 'react';
import './header.scss';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className='header'>
          <div className='header__inner container'>
            <img src='./assets/target_live_white.png' alt='target-live' />
            <div className='header__inner__links'>
              <div className='header__inner__links__sections'>
                <Link to='concerts' smooth duration={600}>Concerts</Link>
                <Link to='artists' smooth duration={600}>Artistes</Link>
                <Link to='contact' smooth duration={600} id='ct'>Contact</Link>
              </div>
              <div className='header__inner__links__social'>
                <a href='https://www.instagram.com/targetlive.production/' target='_blank'>
                  <img src="./assets/instagram.svg" alt="hearscape" />
                  <span>Rejoignez-nous !</span>
                </a>
              </div>
            </div>
          </div>
        </header>
    );
};

export default Header;