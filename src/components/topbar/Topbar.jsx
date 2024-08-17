import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarcontainer'>
      <div className="topbarleft">
        <span className='logo'>Lavidocial</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <Search className='searchicon'/>
          <input placeholder='Search for friends, posts or videos' className='searchinput'/>

        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className='topbarlink'>Homepage</span>
          <span className='topbarlink'>Timeline</span>
        </div>

        <div className="topbaricons">
            <div className="topbariconitem">
              <Person/>
              <span className="topbariconbadge">1</span>
            </div>

            <div className="topbariconitem">
              <Chat/>
              <span className="topbariconbadge">2</span>
            </div>

            <div className="topbariconitem">
              <Notifications/>
              <span className="topbariconbadge">3</span>
            </div>
        </div>
        <img src="/assets/sm3.jpg" alt="" className='topbarimg'/>
      </div>

      
    </div>
  )
}
