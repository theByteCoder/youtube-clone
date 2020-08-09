import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "../Styles/videoCard.css"

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" />
            <div className="video__info">
                <Avatar
                    className="videoCard__avatar"
                    src={channelImage}
                    alt={channel} />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}</p>
                    <p>{timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
