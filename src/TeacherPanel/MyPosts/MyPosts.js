import React, { useState } from "react";
import "./MyPosts.css";
import Navbar from "../../components/Navbar/Navbar";
import PostCard from './PostCard/PostCard';

import PostModal from "./PostModal";

const MyPosts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div className='bg margin'>
        <div className='header-height'>
          <Navbar />
        </div>
        <section className='sec'>
          <div className="post-feed">
            <PostCard />
          </div>
          <div>
            <div className='side-content px-4'>
              <span className='Plus px-2 pb-1 me-2' onClick={handleOpenModal}>+</span>
              Create new Post
            </div>
          </div>
        </section>
      </div>
      <PostModal open={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default MyPosts;
