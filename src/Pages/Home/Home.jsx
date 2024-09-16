import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import "./Home.css"
import Showvideogrid from '../../components/Showvideogrid/Showvideogrid'
import vid from "../../components/Video/vid.mp4"
const Home = () => {
  const vids = [
    {
      _id: 1,
      video_src: vid,
      chanel: "Couple vlog sks",
      title: "cartoon",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 2,
      video_src: vid,
      chanel: "Couple vlog sks",
      title: "cartoon 1",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 3,
      video_src: vid,
      chanel: "Couple vlog sks",
      title: "cartoon 2",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 4,
      video_src: vid,
      chanel: "Couple vlog sks",
      title: "cartoon 3",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 5,
      video_src: vid,
      chanel: "Couple vlog sks",
      title: "cartoon 4",
      uploader: "SKS",
      description: "video description"
    },
  ]
  const navlist = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animations",
    "Gaming",
    "Comedy"
  ];
  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {navlist.map((m) => {
            return (
              <p key={m} className='btn_nav_home'>{m}</p>
            );
          })}
        </div>
        <Showvideogrid vid={vids}/>
      </div>
    </div>
  )
}

export default Home
