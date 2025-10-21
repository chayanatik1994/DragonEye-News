import React from 'react';
// Import icons needed for the component (Rating, Views, Save/Share)
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from 'react-icons/fa'; 

/**
 * NewsCard component displays article information using DaisyUI and Tailwind CSS.
 * @param {object} props
 * @param {object} props.item - The news article data object.
 */
const NewsCard = ({ item }) => {
  const { title, rating, total_view, author, thumbnail_url, details, others }= data;

  // Function to format the published date
  const formatDate = (dateString) => {
    // Converts "2025-04-22T17:00:00.000Z" to "April 22, 2025"
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Truncate the details for a card snippet
  const snippet = details.substring(0, 180) + '...';

  // Determine the star rating display based on the rating.number (1-5)
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;
    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <FaStar
          key={i}
          // Apply 'text-warning' (DaisyUI color) for filled stars, and a neutral color for empty ones
          className={i < rating.number ? 'text-warning' : 'text-gray-300'} 
          size={16}
        />
      );
    }
    return <div className="flex space-x-0.5">{stars}</div>;
  };

  return (
    // 'card' and 'shadow-xl' are DaisyUI/Tailwind classes
    <div className="card w-full bg-base-100 shadow-xl border border-gray-100">
      
      {/* 1. Header Section: Author and Actions */}
      <div className="p-4 flex items-center justify-between border-b border-base-200 bg-base-50">
        
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            {/* DaisyUI rounded-full for the avatar image */}
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{author.name}</p>
            <p className="text-xs text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        
        {/* Actions (Save/Share) */}
        <div className="flex space-x-3 text-gray-500">
          <button className="hover:text-primary tooltip tooltip-bottom" data-tip="Save Article">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-primary tooltip tooltip-bottom" data-tip="Share">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* 2. Main Content: Image and Title */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      <div className="card-body p-4 pt-5">
        
        {/* Title */}
        <h2 className="card-title text-xl font-extrabold text-gray-900 mb-2 leading-tight hover:text-primary transition duration-150 cursor-pointer">
          {title}
        </h2>

        {/* Details Snippet */}
        <p className="text-gray-600 text-sm mb-4">{snippet}</p>

        {/* Read More Link */}
        <div className="card-actions justify-start">
          <a href="#" className="text-primary font-bold text-sm link link-hover">
            Read More &raquo;
          </a>
        </div>
      </div>

      {/* 3. Footer Section: Metrics and Badges */}
      <div className="p-4 flex items-center justify-between border-t border-base-200">
        
        {/* Rating and Badges */}
        <div className="flex items-center space-x-3">
          {/* Stars */}
          {renderStars()}
          <span className="text-sm font-bold text-gray-800">
            {rating.number.toFixed(1)}
          </span>
          
          {/* Badges (Trending/Today's Pick) */}
          {others.is_trending && (
             // 'badge-error' for primary red/trending, 'badge-sm' for size
             <div className="badge badge-error badge-sm font-semibold text-white">
                 TRENDING
             </div>
          )}
          {others.is_today_pick && (
             <div className="badge badge-success badge-sm font-semibold text-white">
                 PICK
             </div>
          )}
        </div>

        {/* Total Views */}
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye size={16} />
          <span className="text-sm font-medium">
            {total_view.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;