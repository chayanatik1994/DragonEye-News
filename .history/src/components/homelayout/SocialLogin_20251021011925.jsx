import React from 'react';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div className="flex flex-col items-center mt-5">
            {/* Heading */}
            <h1 className="font-bold text-lg mb-4">Login With</h1>

            {/* Buttons */}
            <div className="flex flex-col gap-4 w-full max-w-xs">
                <button className="btn btn-outline btn-secondary w-full flex items-center justify-center gap-2">
                    <FcGoogle size={24} /> Log in with Google
                </button>
                <button className="btn btn-outline btn-primary w-full flex items-center justify-center">
                    Log in with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
