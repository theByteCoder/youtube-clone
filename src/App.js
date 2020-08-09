import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Recommended from "./Components/Recommended"
import Search from "./Components/Search"
// import YouTube from "../src/APIs/YouTube";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  const [searchText, setSearchText] = useState('')
  const [isAuthOpen, setAuthOpen] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [profileImageUrl, setProfileImageUrl] = useState("")
  // const [searchedVideosIDListDetails, setSearchedVideosIDListDetails] = useState([])
  // const [recommendedVideos, setRecommendedVideos] = useState([])
  // const [selectedVideos, setSelectedVideos] = useState(null)

  // const KEY = 'AIzaSyDkKNytzgzTfwlK-LCUhhv2yPAe0FWIOaI';
  const handleSearch = async () => {
    // const response = await Promise.resolve(YouTube.get('/search', {
    //   params: {
    //     q: searchText,
    //     key: KEY,
    //   }
    // }))
    // const videoIdList = []
    // response.data.items.map((item) => {
    //   videoIdList.push(item.id.videoId)
    //   return
    // });
    // const searchedVideoDetails = []
    // videoIdList.map(async (item) => {
    //   await fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${item}&key=${KEY}`).then(response => {
    //     return response.json()
    //   }).then(response => {
    //     searchedVideoDetails.push(response.items['0'].snippet);
    //     return
    //   })
    //   return
    // })
    // setSearchedVideosIDListDetails(searchedVideoDetails);
  }

  // const getRecommendedVideos = async () => {
  // https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBbe3sF1foMVb9bMKU7ILVYAmjJvbWDMfo
  // const response = await Promise.resolve(YouTube.get('/videos', {
  //   params: {
  //     part: 'snippet',
  //     chart: 'mostPopular',
  //     key: KEY,
  //     maxResults: 20,
  //   }
  // }))
  // setRecommendedVideos(response.data.items)
  // }

  // useEffect(() => {
  //   getRecommendedVideos()
  // }, [isAuthenticated])

  // const handleVideoSelect = (video) => {
  //   setSelectedVideos(video)
  // }

  const handleLogout = () => {
    setAuthOpen(false)
    setAuthenticated(false)
  }

  const handleClose = (response) => {
    setAuthOpen(false);
    setAuthenticated(true)
    setProfileImageUrl(response.profileObj.imageUrl)
  }

  return (
    <div className="App">
      <Router>
        <Header
          isAuthOpen={isAuthOpen} setAuthOpen={setAuthOpen}
          isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}
          profileImageUrl={profileImageUrl} setProfileImageUrl={setProfileImageUrl}
          handleSearch={handleSearch} handleLogout={handleLogout} handleClose={handleClose}
          searchText={searchText} setSearchText={setSearchText} />
        <Switch>
          <Route path="/search/:searchTerms">
            <div className="app__page">
              <Sidebar isAuthenticated={isAuthenticated} />
              {/* {searchedVideosIDListDetails && <Search profileImageUrl={profileImageUrl} searchedVideosIDListDetails={searchedVideosIDListDetails} />} */}
              <Search profileImageUrl={profileImageUrl} />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar isAuthenticated={isAuthenticated} />
              {/* <Recommended isAuthenticated={isAuthenticated} profileImageUrl={profileImageUrl} recommendedVideos={recommendedVideos} /> */}
              <Recommended isAuthenticated={isAuthenticated} profileImageUrl={profileImageUrl} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
