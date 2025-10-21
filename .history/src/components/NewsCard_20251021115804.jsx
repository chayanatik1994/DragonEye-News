import React from 'react';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa'; 

// Helper function to format the ISO date string
const formatDate = (isoString) => {
  if (!isoString) return 'Date N/A';
  try {
    const date = new Date(isoString);
    return date.toISOString().split('T')[0];
  } catch (e) {
    return 'Date N/A';
  }
};

const NewsCard = ({ news }) => {
    // De-structure all data, including rating and total_view
    const { title, author, image_url, details, tags, rating, total_view } = news;

    // Process the date using the helper function
    const formattedDate = formatDate(author?.published_date);
    
    // Determine the number of solid stars to render (from 0 to 5)
    const numStars = rating?.number || 0;
    const maxStars = 5;

    return (
        <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
            {/* Header Section: Author, Date, Icons */}
            <div className="flex items-center p-4">
                {/* Author Info */}
                <div className="flex items-center flex-grow">
                    <div className="avatar mr-3">
                        <div className="w-10 rounded-full">
                            <img src={author?.img} alt={author?.name} /> 
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-800">{author?.name}</p>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                {/* Action Icons: Bookmark and Share */}
                <div className="flex gap-4 text-gray-600">
                    <button className="text-lg hover:text-primary transition-colors">
                        <FaBookmark />
                    </button>
                    <button className="text-lg hover:text-primary transition-colors">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* Title Section */}
            <div className="px-4 pt-1">
                <h2 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                    {title}
                </h2>
            </div>

            {/* Image Section */}
            <figure className="px-4">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-lg w-full h-auto object-cover"
                />
            </figure>

            {/* Details and Tags Section (Matches Screenshot) */}
            <div className="p-4">
                {/* The tags and date are formatted together like in the screenshot */}
                <p className="text-xs text-gray-500 mb-2">
                    {formattedDate} | Tag Cloud Tags: {tags?.join(', ')}
                </p>

                {/* Details snippet */}
                <p className="text-sm text-gray-700 mb-2">
                    {details.substring(0, 300)}...
                </p>

                {/* Read More link */}
                <div className="flex justify-start">
                    <button className="btn btn-link btn-sm p-0 text-primary hover:no-underline">
                        Read More
                    </button>
                </div>
            </div>
            
            {/* ----------------- RATING INTEGRATION (Matches Screenshot) ----------------- */}
            <div className="flex items-center justify-between p-4 pt-0 border-t border-gray-200">
                <div className="flex items-center text-lg text-yellow-500">
                    {/* Render solid stars based on rating.number */}
                    {[...Array(maxStars)].map((_, index) => (
                        <FaStar 
                            key={index}
                            // Apply full color if the index is less than the rating number
                            className={index < numStars ? 'text-yellow-500' : 'text-gray-300'} 
                        />
                    ))}
                    {/* Display the numerical rating score */}
                    <span className="text-sm text-gray-700 font-semibold ml-2">
                        {rating?.number?.toFixed(1) || 'N/A'}
                    </span>
                </div>
                
                {/* Total Views */}
                <div className="flex items-center text-sm text-gray-700">
                    <FaEye className="mr-1 text-gray-500" />
                    <span>{total_view?.toLocaleString() || '0'}</span>
                </div>
            </div>
            {/* ----------------- RATING INTEGRATION END ----------------- */}
        </div>
    );
};

export default NewsCard;