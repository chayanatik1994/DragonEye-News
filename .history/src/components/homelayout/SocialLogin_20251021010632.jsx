import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold -mb-56'>Login With</h1>
         <div className='space-y-5'>
            <button className='btn'>Log in with Google</button>
            <button className='btn'>Log in with GitHub</button>
         </div>
        </div>
    );
};

export default SocialLogin;