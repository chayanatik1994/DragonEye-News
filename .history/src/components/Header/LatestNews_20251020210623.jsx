import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <Marquee>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest News</p>
            <p className='font-bold'>Stay updated with the latest developments, stories, and announcements.
                We bring you fresh updates straight from our team and trusted sources —
               because staying informed shouldn’t feel like a chore.</p>
            </Marquee>
   
        </div>
    );
};

export default LatestNews ;