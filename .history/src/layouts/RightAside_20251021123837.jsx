import React from 'react';
import SocialLogin from '../components/homelayout/SocialLogin';
import FindUs from '../components/homelayout/FindUs';

const RightAside = () => {
    return (
        <div className='spacae-y-5'>
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
        </div>
    );
};

export default RightAside;