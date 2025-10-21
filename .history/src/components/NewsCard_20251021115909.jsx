import React from 'react';
// Import all necessary icons
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa'; 

// Helper function to format the ISO date string
const formatDate = (isoString) => {
  if (!isoString) return 'Date N/A';
  try {
    const date = new Date(isoString);
    // Format to YYYY-MM-DD to match the screenshot's date style
    return date.toISOString().split('T')[0];
  } catch (e) {
    return 'Date N/A';
  }
};

const NewsCard = ({ news }) => {
    // Destructure all necessary data, including rating and total_view
    const { title, author, image_url, details, tags, rating, total_view } = news;

    // Process the date using the helper function
    const formattedDate = formatDate(author?.published_date);
    
    // Logic for rendering stars
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

                {/* Action Icons */}
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

            {/* Details and Read More Section */}
            <div className="p-4">
                {/* Tags section combined into paragraph text to match the screenshot */}
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
            
            {/* RATING & VIEW COUNT SECTION (Matches Screenshot 2) */}
            <div className="flex items-center justify-between px-4 pb-4 pt-2 border-t border-gray-200">
                
                {/* Star Rating and Score */}
                <div className="flex items-center">
                    <div className="flex items-center text-lg text-yellow-500 mr-2">
                        {/* Render 5 stars, coloring them based on the rating number */}
                        {[...Array(maxStars)].map((_, index) => (
                            <FaStar 
                                key={index}
                                // Apply full yellow color if the index is less than the rating number (4)
                                className={index < numStars ? 'text-yellow-500' : 'text-gray-300'} 
                            />
                        ))}
                    </div>
                    
                    {/* Display the numerical rating score (e.g., 4.0 or 4.9 as in screenshot) */}
                    <span className="text-sm text-gray-700 font-semibold">
                        {rating?.number?.toFixed(1) || 'N/A'}
                    </span>
                </div>
                
                {/* Total Views */}
                <div className="flex items-center text-sm text-gray-700">
                    <FaEye className="mr-1 text-gray-500" />
                    <span className="text-sm">{total_view?.toLocaleString() || '0'}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;