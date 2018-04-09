import React from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from '../Navigation';
import Styles from '../../scss/views/header';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

const Header = () => (
  <div className={cx('header')}>
    <div className="container clearfix">
      <h1>
        <NavLink to="/">
          <p>logo</p>
        </NavLink>
      </h1>
      <Navigation />
    </div>
  </div>
);

export default Header;