import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card mt-3">
      <div className="post-header">
        <img src={`https://i.pravatar.cc/50?u=${post.user}`} alt={`${post.user}'s avatar`} className="post-avatar" />
        <span className="post-user">{post.user}</span>
      </div>
      <img src={post.imageUrl} alt={post.caption} className="post-image" />
      <div className="post-actions">
        <FontAwesomeIcon icon={faHeart} className="action-icon" />
        <FontAwesomeIcon icon={faComment} className="action-icon" />
        <FontAwesomeIcon icon={faShare} className="action-icon" />
      </div>
      <div className="post-likes">{post.likes} likes</div>
      <div className="post-caption">
        <span className="post-user">{post.user}</span> {post.caption}
      </div>
      <div className="post-comments">{post.comments} comments</div>
    </div>
  );
};

export default PostCard;
