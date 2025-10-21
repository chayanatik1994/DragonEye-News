import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div>
                <div className="join join-vertical w-full">
                <button className="btn bg-base-100 join-item justify-start"><FaFacebook></FaFacebook> FaceBook</button>
                <button className="btn bg-base-100 join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn bg-base-100 join-item justify-start"><FaIns Instagram</button>
               </div>
            </div>
        </div>
    );
};

export default FindUs;

