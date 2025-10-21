import React from 'react';
import SocialLogin from '../components/homelayout/SocialLogin';
import FindUs from '../components/homelayout/FindUs';
import QZone from '../components/homelayout/QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
          <QZone></QZone>
        </div>
    );
};

export default RightAside;