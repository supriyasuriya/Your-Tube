import React, { useState } from 'react';
import "./comment.css";
import Displaycomment from './Displaycomment';

const Comment = ({ videoid }) => {
  const [commenttext, setCommentText] = useState("");
  const currentuser = 1;
  const commentlist = [
    {
      _id: "1",
      commentbody: "hello",
      usercommented: "Nice cartoon"
    },
    {
      _id: "2",
      commentbody: "hello2",
      usercommented: "MY fav"
    }
  ];

  const handleonsubmit = (e) => {
    e.preventDefault();
    if (currentuser) {
      if (!commenttext) {
        alert("Please type your comment !!");
      } else {
        setCommentText("")
      }
    } else {
      alert("Please login to enter the comment");
    }
  };

  return (
    <>
      <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
        <input
          type="text"
          onChange={(e) => setCommentText(e.target.value)}
          placeholder='Add comment...'
          value={commenttext}
          className='comment_ibox'
        />
        <input type="submit" value="Add" className='comment_add_btn_comments' />
      </form>
      <div className="display_comment_container">
        {(() => {
          console.log(commentlist);  // Log comment list to console
          
          // Display the filtered comments using a for loop
          const filteredComments = commentlist.filter((q) => videoid === q?.videoid).reverse();
          const commentElements = []; // Array to store JSX elements

          for (let i = 0; i < filteredComments.length; i++) {
            const m = filteredComments[i];
            commentElements.push(
              <Displaycomment
                key={m._id}  // Adding a unique key for each element
                cid={m._id}
                userid={m.userid}
                commentbody={m.commentbody}
                commenton={m.commenton}
                usercommented={m.usercommented}
              />
            );
          }

          return commentElements;  // Return the array of JSX elements
        })()}

        {/* Display the comment list as JSON for debugging purposes */}
        <pre>{JSON.stringify(commentlist, null, 2)}</pre> 
      </div>
    </>
  );
};

export default Comment;  
