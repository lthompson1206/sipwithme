import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
  <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
    <h1 className="app__header-h1">The Key to Fine Drinking</h1>
    <p className="p__opensans" style={{ margin: '2rem 0'}}>Book me for PREMIUM HANDCRAFTED COCKTAILS MIXED & MADE BY ISANA</p>
    <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.swmheader} alt="header img" />
    </div>
  </div>
);

export default Header;
