import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            {news.title}
            <img src={img} alt="/>
        </div>
    );
};

export default NewsCard;

