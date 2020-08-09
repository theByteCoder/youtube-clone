import React from 'react'
import VideoCard from "./VideoCard"

function RecommendedList({ recommendedVideos }) {

    return recommendedVideos.map((item, index) =>
        <VideoCard
            key={index}
            title={item.snippet.title}
            views="2.3M views"
            timestamp={new Date(item.snippet.publishedAt).getHours()
                + ":"
                + new Date(item.snippet.publishedAt).getMinutes()
                + ", "
                + new Date(item.snippet.publishedAt).toDateString()}
            channelImage={item.snippet.thumbnails.default.url}
            channel="theByteCoder"
            image={item.snippet.thumbnails.medium.url} />)

}

export default RecommendedList
