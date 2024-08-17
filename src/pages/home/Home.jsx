import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homecontainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/> 
    </div>
    </>
  )
}
