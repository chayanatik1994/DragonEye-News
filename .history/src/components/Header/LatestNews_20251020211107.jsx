import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 p-3">
      <Marquee pauseOnHover speed={50} gradient={false} className="flex gap-8 pause">
        <span className="text-base-100 bg-secondary px-3 py-2 rounded">
          Latest News
        </span>

        <p className="font-semibold">
          Our app just hit 10,000 users worldwide — thank you for being part of it!
        </p>

        <p className="font-semibold">
          We’ve launched a new feature that helps you customize your dashboard effortlessly.
        </p>

        <p className="font-semibold">
          Upcoming maintenance on Sunday, 10 PM–12 AM. Don’t panic; we’ll be back.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
