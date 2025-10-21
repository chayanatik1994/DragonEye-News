import React from "react";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
    tags,
  } = news;

  // Format date and time
  const publishedDate = new Date(author.published_date);
  const formattedDateTime = publishedDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={thumbnail_url}
            alt={title}
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="block mt-1 text-lg leading-tight font-semibold text-gray-900">
              {title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              {details.length > 150 ? `${details.slice(0, 150)}...` : details}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <img
                src={author.img}
                alt={author.name}
                className="h-8 w-8 rounded-full"
              />
              <span>{author.name}</span>
              <span>{formattedDateTime}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span>{rating.number}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaEye />
                <span>{total_view}</span>
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
