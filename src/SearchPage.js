import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import "./ChannelRow.css"
import "./VideoRow.css"

function SearchPage() {
  return (
    <div className="serachPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/uh8l4I70AViAR_jYzxSDlzQZEIDsoStEJj20EZ_16O-OGuCIt5Yw-vykVBjL-qn4XOUJ181XBg=s176-c-k-c0x00ffffff-no-rj-mo"
        Channel="Tucker Carlson"
        verified
        subs="1.9M"
        noOfVideos={352}
        description="This is the official Tucker Carlson YouTube page. Watch exclusive content on TuckerCarlson.com."
      />

      <hr />

      <VideoRow
        views="336k"
        subs="1.9"
        description="Corporate media is dead, which is why The Babylon Bee is more trusted than CNN. CEO Seth Dillon joins Tucker Carlson to discuss."
        timestamp="3 months"
        channel=" Tucker Carlson"
        title="How The Babylon Bee Predicts the Future"
        image="https://i.ytimg.com/vi/zdbqUoTyReo/maxresdefault.jpg"
      />

      <VideoRow
        views="336k"
        subs="1.9"
        description="Corporate media is dead, which is why The Babylon Bee is more trusted than CNN. CEO Seth Dillon joins Tucker Carlson to discuss."
        timestamp="3 months"
        channel=" Tucker Carlson"
        title="How The Babylon Bee Predicts the Future"
        image="https://i.ytimg.com/vi/zdbqUoTyReo/maxresdefault.jpg"
      />      
      <VideoRow
        views="336k"
        subs="1.9"
        description="Corporate media is dead, which is why The Babylon Bee is more trusted than CNN. CEO Seth Dillon joins Tucker Carlson to discuss."
        timestamp="3 months"
        channel=" Tucker Carlson"
        title="How The Babylon Bee Predicts the Future"
        image="https://i.ytimg.com/vi/zdbqUoTyReo/maxresdefault.jpg"
      />      
      <VideoRow
        views="336k"
        subs="1.9"
        description="Corporate media is dead, which is why The Babylon Bee is more trusted than CNN. CEO Seth Dillon joins Tucker Carlson to discuss."
        timestamp="3 months"
        channel=" Tucker Carlson"
        title="How The Babylon Bee Predicts the Future"
        image="https://i.ytimg.com/vi/zdbqUoTyReo/maxresdefault.jpg"
      />      
      <VideoRow
        views="336k"
        subs="1.9"
        description="Corporate media is dead, which is why The Babylon Bee is more trusted than CNN. CEO Seth Dillon joins Tucker Carlson to discuss."
        timestamp="3 months"
        channel=" Tucker Carlson"
        title="How The Babylon Bee Predicts the Future"
        image="https://i.ytimg.com/vi/zdbqUoTyReo/maxresdefault.jpg"
      />




    </div>
  )
}

export default SearchPage