import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tag}) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-head">
      {/* name */}
      <div className="app__menuitem-name">
        <p className='p__cormorant' style={{color: 'DCCA87'}}>{title}</p>
      </div>
      {/* the line between the title and price */}
      <div className='app__menuitem-dash'/>
      {/* price */}
      <div className="app__menuitem-price">
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{color: '#AAA'}}>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
