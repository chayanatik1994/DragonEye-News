import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center bg-base-200 p-3'>
      <Marquee pauseOnHover speed={50} gradient={false} className='flex gap-5'>
        <span className='text-base-100 bg-secondary px-3 py-2 rounded'>
          Latest News
        </span>
        <p className='font-semibold'>
          Stay updated with the latest developments, stories, and announcements.
          We bring you fresh updates straight from our team and trusted sources —
          because staying informed shouldn’t feel like a chore.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
