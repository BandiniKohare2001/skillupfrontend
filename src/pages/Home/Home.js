import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

import PostCard from '../../components/PostCard/PostCard'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
   <>
    <div className='bg margin'>
     <div className='header-height'>
     <Navbar/>
      {/* <Sidebar/> */}
     </div>
      <section className='sec'> 
<div><PostCard/></div>
<div><Footer/></div>
      </section>
    </div>
   </>
  )
}

export default Home
