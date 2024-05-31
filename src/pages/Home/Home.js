import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import PostCard from '../../components/PostCard/PostCard'

function Home() {
  return (
   <>
    <div className='bg margin'>
     <div className='header-height'>
     <Navbar/>
      {/* <Sidebar/> */}
     </div>
      <section>
<PostCard/>
      </section>
    </div>
   </>
  )
}

export default Home
