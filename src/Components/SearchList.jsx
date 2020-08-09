import React from 'react'
import VideoCard from "./VideoCard"

function SearchList({ searchedVideosIDListDetails }) {

    // useEffect(() => {
    //     console.log(searchedVideosIDListDetails);
    // }, [searchedVideosIDListDetails])

    return searchedVideosIDListDetails.map((item, index) =>
        <VideoCard
            key={index}
            title={item.title}
            views="2.3M views"
            timestamp={new Date(item.publishedAt).getHours()
                + ":"
                + new Date(item.publishedAt).getMinutes()
                + ", "
                + new Date(item.publishedAt).toDateString()}
            channelImage={item.thumbnails.default.url}
            channel="theByteCoder"
            image={item.thumbnails.medium.url}
        />)
}

export default SearchList
