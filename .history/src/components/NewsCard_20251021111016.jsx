
import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <div>
                {news.title}
                <img></img>
            </div>
        </div>
    );
};

export default NewsCard;