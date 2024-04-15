import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import "./ChannelRow.css"

function SearchPage() {
  return (
    <div className="serachPage">
        <div className="searchPage_filter">
            <TuneOutlinedIcon/>
            <h2>Filter</h2>            
        </div>
        <hr/>
      
      <ChannelRow
        image="https://yt3.ggpht.com/uh8l4I70AViAR_jYzxSDlzQZEIDsoStEJj20EZ_16O-OGuCIt5Yw-vykVBjL-qn4XOUJ181XBg=s176-c-k-c0x00ffffff-no-rj-mo"
        Channel="Tucker Carlson"
        verified
        subs="1.9M"
        noOfVideos={352}
        description="This is the official Tucker Carlson YouTube page. Watch exclusive content on TuckerCarlson.com."            
      />

        
    </div>
  )
}

export default SearchPage