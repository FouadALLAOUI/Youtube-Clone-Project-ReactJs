 import React, { useState } from 'react';
 import MenuIcon from "@material-ui/icons/Menu";
 import SearchIcon from "@material-ui/icons/Search";
 import VideoCallIcon from "@material-ui/icons/VideoCall";
 import AppsIcon from "@material-ui/icons/Apps";
 import NotificationsIcon from "@material-ui/icons/Notifications";
 import Avatar  from '@material-ui/core/Avatar';
 import './Header.css'

function Header() {

  const [inputSearch, setInputSearch] = useState(""); 
  console.log(inputSearch);

  return (
    <div className='header'>
      <div className='header_left'>
        <MenuIcon/>
        <img className='header_logo
        ' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png' 
        alt=''/>
      </div>
      <div className='header_input'>
       <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'/>
       <SearchIcon  className='header_inputButton'/>
      </div>
      <div className='header_icons'>
      <VideoCallIcon className='header_icon'/>
      <AppsIcon className='header_icon'/>
      <NotificationsIcon className='header_icon'/>
      <Avatar 
        alt='Fouad'
        src='https://media.licdn.com/dms/image/D4E03AQHk7x_B9pwFLA/
        profile-displayphoto-shrink_800_800/0/1712458541239?e=1718236800&v
        =beta&t=NG1rTvdDRtBmXZOcviNQGEXNxldTqEYxTBa6ckPFa5c'
      />
      </div>


    </div>
  )
}

export default Header