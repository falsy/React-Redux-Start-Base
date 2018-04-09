import React from 'react';
import Styles from '../../scss/views/footer';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

const Footer = () => (
  <div className={cx('footer')}>
    <div className="container">
      <p>Temp. © 2018</p>
    </div>
  </div>
);

export default Footer;