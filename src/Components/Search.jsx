import React from 'react'
import '../Styles/Search.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "../Styles/Recommended.css"
// import SearchList from "./SearchList"
import VideoCard from "./VideoCard"
// import reactkeycloak from "../Images/REACT-KEYCLOAK.png"
import reactdjango from "../Images/REACT-DJANGO.png"

function Search({ searchedVideosIDListDetails, profileImageUrl }) {

    // return (
    //     <div className="searchPage">
    //         <div className="searchPage__filter">
    //             <TuneOutlinedIcon />
    //             <h2>Filter</h2>
    //         </div>
    //         <hr />
    //         <div className="recommended__videos">
    //             <SearchList searchedVideosIDListDetails={searchedVideosIDListDetails} />
    //         </div>
    //     </div>
    // )

    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <VideoCard
                title="React Django Project"
                views="2.3M views"
                timestamp="2 days ago"
                channelImage={profileImageUrl}
                channel="theByteCoder"
                image={reactdjango} />
        </div>
    )
}

export default Search
