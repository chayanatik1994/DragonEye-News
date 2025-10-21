
import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            <div>
                {news.title}
                <img src={news.image._url} alt/>
            </div>
        </div>
    );
};

export default NewsCard;