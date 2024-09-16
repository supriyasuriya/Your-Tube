import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../components/Showvideogrid/Showvideogrid'
import vid from "../../components/Video/vid.mp4"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
const Search = () => {
    const {searchquery}=useParams();
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
   // const vids=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase()))

  return (
    <div className="container_Pages_App">
      <Leftsidebar/>
      <div className="container2_Pages_App">
        <Showvideogrid vid={vids}/>
      </div>
    </div>
  )
}

export default Search