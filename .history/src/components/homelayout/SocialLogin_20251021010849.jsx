import React from 'react';

const SocialLogin = () => {
    return (
        <div className="flex flex-col items-center mt-5">
            {/* Heading */}
            <h1 className="font-bold text-lg mb-4">Login With</h1>

            {/* Buttons */}
            <div className=" gap-5 space-y-5">
                <button className="btn w-full">Log in with Google</button>
                <button className="btn w-full">Log in with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;
