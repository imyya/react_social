import './sidebar.css';
import { RssFeed,ThumbUpOutlined,Forum,AdfScanner,Group,Event,Bookmark,VideoCall} from '@mui/icons-material';
export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarlist">
                <div className="sidebarlistitem">
                    <RssFeed className="sidebaricon"/>
                    <span className="sidebaritemtext">Feed</span>
                </div>
                <div className="sidebarlistitem">
                    <ThumbUpOutlined className="sidebaricon"/>
                    <span className="sidebaritemtext">Likes</span>
                </div>
                <div className="sidebarlistitem">
                    <Forum className="sidebaricon"/>
                    <span className="sidebaritemtext">Forum</span>
                </div>
                <div className="sidebarlistitem">
                    <AdfScanner className="sidebaricon"/>
                    <span className="sidebaritemtext">Scan</span>
                </div>
                <div className="sidebarlistitem">
                    <Group className="sidebaricon"/>
                    <span className="sidebaritemtext">Groups</span>
                </div>
                <div className="sidebarlistitem">
                    <Event className="sidebaricon"/>
                    <span className="sidebaritemtext">Events</span>
                </div>
                <div className="sidebarlistitem">
                    <Bookmark className="sidebaricon"/>
                    <span className="sidebaritemtext">Bookmark</span>
                </div>
                <div className="sidebarlistitem">
                    <VideoCall className="sidebaricon"/>
                    <span className="sidebaritemtext">Live</span>
                </div>
            </div>
            <button className='sidebarbutton'>show more</button>
            <hr className='sidebarhr' />
            <ul className="sidebarfriendlist">
                <li className="sidebarfriend">
                    <img src="assets/sm2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">John Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="assets/sm2.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">John Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="assets/sm3.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">John Doe</span>
                </li>
                <li className="sidebarfriend">
                    <img src="assets/sm4.jpg" alt="" className="sidebarfriendimg" />
                    <span className="sidebarfriendname">John Doe</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
