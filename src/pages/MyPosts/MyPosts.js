import React from 'react';
import './PostCard.css';
import Navbar from '../../components/Navbar/Navbar';
import PostCard from './PostCard';

const posts = [
  // Dummy data for posts
  { id: 1, user: 'john_doe', imageUrl: 'https://media.licdn.com/dms/image/D5622AQFBz6F5sC23aA/feedshare-shrink_800/0/1719575385336?e=1722470400&v=beta&t=lE-HyfAI8cir_C0jZqXxaTqlJR8-2i0-31IO0wbZVu4', caption: 'Beautiful day!', likes: 120, comments: 4 },
  { id: 2, user: 'jane_smith', imageUrl: 'https://media.licdn.com/dms/image/D5622AQEixeMuI-U4rw/feedshare-shrink_1280/0/1719060921606?e=1722470400&v=beta&t=iIfZkC3vH5raHHV_EHCNF3fx3ZAPxKYyftnxT3PvnV0', caption: 'At the beach!', likes: 89, comments: 12 },
  { id: 3, user: 'jane_smith', imageUrl: 'https://media.licdn.com/dms/image/D5622AQEUK3ptO01oaA/feedshare-shrink_800/0/1718706381184?e=1722470400&v=beta&t=fyZRH1YuE-OMo3c0VUYt2nQU5DfA857WMIlaQB-J9AU', caption: 'At the beach!', likes: 89, comments: 12 },
  { id: 4, user: 'jane_smith', imageUrl: 'https://media.licdn.com/dms/image/D5622AQEUK3ptO01oaA/feedshare-shrink_800/0/1718706381184?e=1722470400&v=beta&t=fyZRH1YuE-OMo3c0VUYt2nQU5DfA857WMIlaQB-J9AU', caption: 'At the beach!', likes: 89, comments: 12 },
  { id: 5, user: 'jane_smith', imageUrl: 'https://media.licdn.com/dms/image/D5622AQEUK3ptO01oaA/feedshare-shrink_800/0/1718706381184?e=1722470400&v=beta&t=fyZRH1YuE-OMo3c0VUYt2nQU5DfA857WMIlaQB-J9AU', caption: 'At the beach!', likes: 89, comments: 12 },
  { id: 6, user: 'jane_smith', imageUrl: 'https://media.licdn.com/dms/image/D5622AQEUK3ptO01oaA/feedshare-shrink_800/0/1718706381184?e=1722470400&v=beta&t=fyZRH1YuE-OMo3c0VUYt2nQU5DfA857WMIlaQB-J9AU', caption: 'At the beach!', likes: 89, comments: 12 },
  
 
];

const MyPosts = () => {
    return (
      <>
      <div className=''>
        <Navbar/>
        <section className='sec'>
        <div className="post-page profile-container">
       
       <div className="post-feed">
         {posts.map((post) => (
           <PostCard key={post.id} post={post}  />
         ))}
       </div>
     </div>
        </section>
      </div>
      </>
    );
};

export default MyPosts;
