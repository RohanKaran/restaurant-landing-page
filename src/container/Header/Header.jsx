import React from 'react';

import TrackVisibility from 'react-on-screen';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import 'animate.css';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{' '}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <img
            src={images.welcome}
            alt="header_img"
            className={
              isVisible
                ? 'animate__animated animate__slideInRight animate__slow'
                : ''
            }
          />
        )}
      </TrackVisibility>
    </div>
  </div>
);

export default Header;
