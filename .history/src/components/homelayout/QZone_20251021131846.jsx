import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/classImage"
import playImage from "../../assets/playImage"

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className=''>
            <img src={swimmingImage} />
            <img src={classImage} />
             <img src={playImage} />
            </div>
        </div>
    );
};

export default QZone;