
import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
      {/* Header Section: Author, Date, Icons */}
      <div className="flex items-center p-4">
        {/* Author Info */}
        <div className="flex items-center flex-grow">
          <div className="avatar mr-3">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{author.name}</p>
            {/* Using the formatted date */}
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
    );
};

export default NewsCard;