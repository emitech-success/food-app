import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app_wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsu Dolor Sit amet, Consectetur Adipiscing Elit Auctor Sit.
          </p>
        </div>
        
        <p className="p__opensans">
        Lorem ipsu Dolor Sit amet, Consectetur Adipiscing Elit Auctor Sit.
        {/* Lorem ipsu Dolor Sit amet */}
        {/* Lorem ipsu Dolor Sit amet, Consectetur Adipiscing Elit Auctor Sit. */}
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kelvin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
