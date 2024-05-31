import React, { useState } from "react";
import "./Postcard.css";
import Posts from "../../utils/postdata";
import { IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";

const PostCard = () => {
  const [userPosts, setUserPosts] = useState(Posts);
  const [likes, setLikes] = useState(Array(Posts.length).fill(false));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  return (
    <div className="">
    <div className="profile-container">
      {userPosts.map((obj, index) => {
        const { name, desc, post, profile, postImg } = obj;
        return (
          <div className="post-box my-2" key={index}>
            <div className="details d-flex p-3">
              <div className="img">
                <img src={profile} alt="" className="profile-img" />
              </div>
              <div className="name-details ms-2">
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" className="post-text">
                  {post}
                </Typography>
              </div>
            </div>
            <div className="para px-3 ">
              <Typography variant="body1" ><span className="fs">{desc}</span></Typography>
            </div>
            <img src={postImg} className="post-img mt-3" alt="Post" />
            <div className="actions d-flex justify-content-around p-1">
              <IconButton
                color={likes[index] ? "secondary" : "default"}
                onClick={() => handleLike(index)}
              >
                <FavoriteIcon /><span className="fs-6 ms-2">Like</span>
              </IconButton>
              <IconButton>
                <CommentIcon /><span className="fs-6 ms-2">Comment</span>
              </IconButton>
              <IconButton>
                <ShareIcon /><span className="fs-6 ms-2">Share</span>
              </IconButton>
            </div>
          </div>
        );
      })}
    </div></div>  
  );
};

export default PostCard;
