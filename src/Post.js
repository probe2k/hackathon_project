import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import "./Post.css";
// import { db } from "./firebase";

const Post = forwardRef(({ name, description, message, photoUrl, likeCount }, ref) => {

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>
      {/* <div className="like__button">
        <button id='like' onClick={handleLike}>Like</button>
        <p>{likeCount}</p>
      </div> */}
      {/* <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
      </div> */}
    </div>
  );
});

export default Post;
