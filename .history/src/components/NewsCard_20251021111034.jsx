
import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <div>
                {news.title}
                <img src={news.image.}>
            </div>
        </div>
    );
};

export default NewsCard;