import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import "./Likewatchlatersavebtn.css"
const Likewatchlatersavebtn = ({ vv, vid }) => {
    const [savevideo, setsavevideo] = useState(false)
    const [dislikebtn, setdislikebtn] = useState(false)
    const [likebtn, setlikebtn] = useState(false)
    const currentuser = {
        result: {
            email: "abcd@gmail.com",
            Suppy: "234-567-279"
        }
    }
    const togglesavedvideo = () => {
        if (currentuser) {
            if (savevideo) {
                setsavevideo(false);
            } else {
                setsavevideo(true);
            }
        } else {
            alert("Please login to save video")
        }

    }
    const togglelikevideo = () => {
        if (currentuser) {
            if (likebtn) {
                setlikebtn(false);
            } else {
                setlikebtn(true);
                setdislikebtn(false);
            }
        } else {
            alert("Please login to save video")
        }

    }
    const toggledislikevideo = () => {
        if (currentuser) {
            if (dislikebtn) {
                setdislikebtn(false);
            } else {
                setdislikebtn(true);
                setlikebtn(false);
            }
        } else {
            alert("Please login to save video")
        }

    }
    return (
        <div className='btns_cont_videoPage'>
            <div className="btn_VideoPage">
                <BsThreeDots />
            </div>
            <div className="btn_VideoPage">
                <div className="like_videoPage" onClick={(e)=>togglelikevideo(e)}>
                    {likebtn ? (
                        <>
                            <AiFillLike size={22} className='btns_videoPage' />
                        </>
                    ) : (
                        <>
                            <AiOutlineLike size={22} className='btns_videoPage' />
                        </>
                    )}
                    <b>LIKE</b>
                </div>
                <div className="like_videoPage" onClick={(e)=>toggledislikevideo(e)}>
                    {dislikebtn ? (<>
                        <AiFillDislike size={22} className='btns_videoPage' />
                    </>) : (
                        <>
                            <AiOutlineDislike size={22} className='btns_videoPage' />
                        </>
                    )}
                    <b>DISLIKE</b>
                </div>
                <div className="like_videoPage" onClick={(e)=>togglesavedvideo(e)}>  
                    {savevideo ? (<>
                        <MdPlaylistAddCheck size={22} className='btns_videoPage' />
                        <b>Saved</b>
                    </>) : (
                        <>
                            <RiPlayListAddFill size={22} className='btns_videoPage' />
                            <b>Save</b>
                        </>
                    )}
                </div>
                <div className="like_videoPage">
                    <>
                        <RiHeartAddFill size={22} className='btns_videoPage' />
                        <b>Thanks</b>
                    </>
                    <>
                        <RiShareForwardLine size={22} className='btns_videoPage' />
                        <b>Share</b>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Likewatchlatersavebtn
