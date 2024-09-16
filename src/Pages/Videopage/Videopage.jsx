import React from 'react';
import "./Videopage.css";
import moment from 'moment';
import Likewatchlatersavebtn from './Likewatchlatersavebtn';
import { useParams, Link } from 'react-router-dom';
import Comment from '../../components/comment/comment'
import vidd from "../../components/Video/vid.mp4";

const Videopage = () => {
  const { vid } = useParams(); // Get video ID from the URL parameter
  const vids = [
    {
      _id: 1,
      video_src: vidd,
      chanel: "Couple vlog sks",
      title: "cartoon",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 2,
      video_src: vidd,
      chanel: "Couple vlog sks",
      title: "cartoon 1",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 3,
      video_src: vidd,
      chanel: "Couple vlog sks",
      title: "cartoon 2",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 4,
      video_src: vidd,
      chanel: "Couple vlog sks",
      title: "cartoon 3",
      uploader: "SKS",
      description: "video description"
    },
    {
      _id: 5,
      video_src: vidd,
      chanel: "Couple vlog sks",
      title: "cartoon 4",
      uploader: "SKS",
      description: "video description"
    },
  ];

  const vidNumber = parseInt(vid, 10); // Convert `vid` from URL to a number
  const vv = vids.find((q) => q._id === vidNumber); // Corrected: Use `find` to get the correct video

  const currentuser = {
    result: {
      email: "sks@gmail.com",
      Suppy: "234-567-279"
    }
  };

  // Check if the video is found
  if (!vv) {
    return <p>Video not found.</p>; // Show a message if no video is found
  }

  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video src={vv.video_src} className='video_ShowVideo_videoPage' controls></video> 
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className='video_title_VideoPage'>{vv?.title}</p>
                <div className="views_date_btns_Videopage">
                  <div className="views_videoPage">
                    {vv?.views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdat).fromNow()}
                  </div>
                  <Likewatchlatersavebtn vv={vv} vid={vidd} />
                </div>
              </div>
              <Link to={'/'} className='chanel_details_videoPage'>
                <b className="chanel_logo_videoPage">
                  <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv?.uploader}</p>
              </Link>
              <div className="comments_VideoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comment videoid={vv._id}/>
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More videos</div>
        </div>
      </div>
    </>
  );
};

export default Videopage;
