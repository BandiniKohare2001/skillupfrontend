import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import PostCard from '../../components/PostCard/PostCard'

function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <section>
<PostCard/>
      </section>
    </div>
  )
}

export default Home
