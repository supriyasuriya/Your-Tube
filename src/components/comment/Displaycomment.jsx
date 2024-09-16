import React, { useState } from 'react'
import "./comment.css"
import moment from 'moment'
const Displaycomment = ({ cid, commentbody, userid, commenton, usercommented }) => { 
    const [edit, setedit] = useState(false)
    const [cmtbody, setcmtbody] = useState("")
    const [cmtid, setcmtid] = useState("")
    const currentuser = {
        result: {
            email: "sks@gmail.com",
            Suppy: "234-567-279"
        }
    }
    const handleedit = (ctid, ctbdy) => {
        setedit(true)
        setcmtid(ctid)
        setcmtbody(ctbdy)
    }
    return (
        <>
            {edit?(
                <>
                    <form className='comments_Sub_form_comments'>
                        <input type="text" onChange={(e) => setcmtbody(e.target.value)} placeholder='Edit comments..' value={cmtbody} className='comment_ibox' />
                        <input type="submit" value="change" className='comment_add_btn_comments' />
                    </form>
                </>
            ):(
                <p className='comment_body'>{commentbody}</p>
            )}
            <p className='user commented'>{" "} {usercommented} commented {moment(commenton).fromNow()}</p>
            {currentuser?.result?._id === userid &&(
              <p className="EditDel_DisplayComment">
                <i onClick={()=>handleedit(cid,commentbody)}></i>
                <i>Delete</i>
              </p>
            )}
        </>
   )
}

export default Displaycomment
