import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div>
                <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
                <button className="btn bg-base-100 join-item justify-start"> Twitter</button>
                <button className="btn bg-base-100 join-item justify-start">Instagram</button>
               </div>
            </div>
        </div>
    );
};

export default FindUs;

