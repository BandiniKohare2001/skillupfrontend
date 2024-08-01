import React, { useState } from "react";
import "./Postcard.css";
import Posts from "../../../utils/postdata";
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SaveIcon from "@mui/icons-material/Bookmark";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";

const PostCard = () => {
  const [userPosts, setUserPosts] = useState(Posts);
  const [likes, setLikes] = useState(Array(Posts.length).fill(false));
  const [anchorEl, setAnchorEl] = useState(Array(Posts.length).fill(null));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  const handleRepost = (index) => {
    console.log(`Post ${index} reposted`);
  };

  const handleMenuClick = (event, index) => {
    const newAnchorEls = [...anchorEl];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEl(newAnchorEls);
  };

  const handleMenuClose = (index) => {
    const newAnchorEls = [...anchorEl];
    newAnchorEls[index] = null;
    setAnchorEl(newAnchorEls);
  };

  return (
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
              <IconButton
                aria-controls={`simple-menu-${index}`}
                aria-haspopup="true"
                onClick={(event) => handleMenuClick(event, index)}
                style={{ marginLeft: 'auto' }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`simple-menu-${index}`}
                anchorEl={anchorEl[index]}
                keepMounted
                open={Boolean(anchorEl[index])}
                onClose={() => handleMenuClose(index)}
              >
                <MenuItem onClick={() => handleMenuClose(index)}>
                  <ListItemIcon>
                    <StarIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Feature on top of profile" />
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(index)}>
                  <ListItemIcon>
                    <SaveIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Save" />
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(index)}>
                  <ListItemIcon>
                    <LinkIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Copy link to post" />
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(index)}>
                  <ListItemIcon>
                    <CodeIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Embed this post" />
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(index)}>
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Edit post" />
                </MenuItem>
                <MenuItem onClick={() => handleMenuClose(index)}>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Delete post" />
                </MenuItem>
              
               
              </Menu>
            </div>
            <div className="para px-3">
              <Typography variant="body1">
                <span className="fs">{desc}</span>
              </Typography>
            </div>
            <img src={postImg} className="post-img mt-3" alt="Post" />
            <br />
            <hr className="hr-home mx-3" />
            <div className="actions pb-2 d-flex justify-content-around p-1">
              <IconButton
                color={likes[index] ? "secondary" : "default"}
                onClick={() => handleLike(index)}
              >
                <FavoriteIcon />
                <span className="fs-6 ms-2">Like</span>
              </IconButton>
              <IconButton>
                <CommentIcon />
                <span className="fs-6 ms-2">Comment</span>
              </IconButton>
              <IconButton>
                <ShareIcon />
                <span className="fs-6 ms-2">Share</span>
              </IconButton>
              <IconButton onClick={() => handleRepost(index)}>
                <RedoIcon />
                <span className="fs-6 ms-2">Repost</span>
              </IconButton>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostCard;
