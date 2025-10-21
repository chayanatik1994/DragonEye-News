import React from 'react';
// Import necessary icons from a React Icons library, e.g., react-icons/fa or react-icons/hi
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from 'react-icons/fa';

// Define the shape of a single news item for TypeScript/JSDoc clarity
/**
 * @typedef {object} NewsItem
 * @property {string} id
 * @property {string} title
 * @property {object} rating
 * @property {number} rating.number
 * @property {string} rating.badge
 * @property {number} total_view
 * @property {object} author
 * @property {string} author.name
 * @property {string} author.published_date
 * @property {string} author.img
 * @property {string} thumbnail_url
 * @property {string} details
 * @property {string[]} tags
 */

/**
 * A component to display a single news article card.
 * @param {{item: NewsItem}} props
 * @returns {JSX.Element}
 */
const NewsCard = ({ item }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = item;

  // Function to format the date to a readable string (e.g., August 21, 2025)
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Truncate the details for the card snippet
  const snippet = details.substring(0, 150) + '...';

  // Determine the star rating display
  const renderStars = () => {
    const stars = [];
    const maxStars = 5;
    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating.number ? 'text-warning' : 'text-gray-300'} // DaisyUI 'warning' color is often a good yellow/orange
        />
      );
    }
    return <div className="flex space-x-0.5">{stars}</div>;
  };

  return (
    // 'card' is a DaisyUI class
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 transition duration-300 hover:shadow-2xl">
      {/* Header Section: Author and Actions */}
      <div className="p-4 flex items-center justify-between border-b">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
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
          <button className="hover:text-primary tooltip tooltip-bottom" data-tip="Save">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-primary tooltip tooltip-bottom" data-tip="Share">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Main Content: Image, Title, Details */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h2>

        {/* Details Snippet */}
        <p className="text-gray-700 text-sm mb-4">{snippet}</p>

        {/* Read More Link */}
        <div className="card-actions justify-start">
          <a href="#" className="text-primary hover:text-primary-focus font-medium text-sm link link-hover">
            Read More
          </a>
        </div>
      </div>

      {/* Footer Section: Rating and Views */}
      <div className="p-4 flex items-center justify-between border-t">
        {/* Rating */}
        <div className="flex items-center space-x-2">
          {renderStars()}
          <span className="text-sm font-medium text-gray-700">
            {rating.number.toFixed(1)}
          </span>
          {/* Optional: Trending Badge */}
          {rating.badge === 'trending' && (
             <div className="badge badge-error badge-outline text-xs">
                 {rating.badge.toUpperCase()}
             </div>
          )}
        </div>

        {/* Total Views */}
        <div className="flex items-center space-x-1 text-gray-500">
          <FaEye size={16} />
          <span className="text-sm">
            {total_view.toLocaleString()} views
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;