 import React from 'react';
 import MenuIcon from "@material-ui/icons/Menu";
 import SearchIcon from "@material-ui/icons/Search";
 import VideoCallIcon from "@material-ui/icons/VideoCall";
 import AppsIcon from "@material-ui/icons/Apps";
 import NotificationsIcon from "@material-ui/icons/Notifications";
 import Avatar  from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className='header'>
      <h1>Header</h1>
      <MenuIcon/>
      <img className='header_logo
      ' src='https://upload.wikimedia.org/wikipedia/commons/th
      umb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1920px-
      Logo_of_YouTube_%282015-2017%29.svg.png' 
      alt=''/>
      <input type='text'/>
      <SearchIcon/>
      <VideoCallIcon/>
      <AppsIcon/>
      <NotificationsIcon/>
      <Avatar
        alt='Fouad'
        src='https://media.licdn.com/dms/image/D4E03AQHk7x_B9pwFLA/
        profile-displayphoto-shrink_800_800/0/1712458541239?e=1718236800&v
        =beta&t=NG1rTvdDRtBmXZOcviNQGEXNxldTqEYxTBa6ckPFa5c'
      />
    </div>
  )
}

export default Header