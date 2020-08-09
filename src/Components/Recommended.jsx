import React from 'react'
import "../Styles/Recommended.css"
import VideoCard from "./VideoCard"
import reactkeycloak from "../Images/REACT-KEYCLOAK.png"
import reactdjango from "../Images/REACT-DJANGO.png"
import reactml from "../Images/mlpython.png"
// import RecommendedList from "./RecommendedList"

function Recommended({ isAuthenticated, profileImageUrl, recommendedVideos }) {

    return (
        <div className="recommended">
            <h3 className="recommended__title">Recommended</h3>
            <div className="recommended__videos">
                {!isAuthenticated && <VideoCard
                    title="React ML Project"
                    views="2.1M views"
                    timestamp="5 days ago"
                    channelImage=""
                    channel="random channel"
                    image={reactml} />}
                {isAuthenticated && <VideoCard
                    title="React Keycloak Project"
                    views="2.9M views"
                    timestamp="3 days ago"
                    channelImage={profileImageUrl}
                    channel="theByteCoder"
                    image={reactkeycloak} />}
                {isAuthenticated && <VideoCard
                    title="React Django Project"
                    views="2.3M views"
                    timestamp="2 days ago"
                    channelImage={profileImageUrl}
                    channel="theByteCoder"
                    image={reactdjango} />}
                {/* <RecommendedList recommendedVideos={recommendedVideos} /> */}
            </div>
        </div>
    )
}

export default Recommended
