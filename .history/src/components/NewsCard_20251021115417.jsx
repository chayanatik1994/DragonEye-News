import React from 'react';
import { FaBookmark, FaShareAlt } from 'react-icons/fa'; 

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
    // De-structure the necessary data from the 'news' prop
    const { title, author, image_url, details, tags } = news;

    // Process the date using the helper function
    const formattedDate = formatDate(author?.published_date);

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
            <div className="px-4">
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
                {/* Details snippet */}
                <p className="text-sm text-gray-700 mb-4">
                    {details.substring(0, 300)}...
                </p>

                {/* Tags */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {tags?.slice(0, 5).map(tag => (
                            <div key={tag} className="badge badge-outline badge-sm text-primary">
                                {tag.toUpperCase()}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Read More link */}
                <div className="flex justify-start">
                    <button className="btn btn-link btn-sm p-0 text-primary hover:no-underline">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;npm 