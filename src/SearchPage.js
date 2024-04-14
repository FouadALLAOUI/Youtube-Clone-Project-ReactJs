import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon  from '@material-ui/icons/TuneOutlined'

function SearchPage() {
  return (
    <div className='serachPage'>
        <div className='searchPage_filter'>
            <TuneOutlinedIcon/>
            <h2>Filter</h2>
            
        </div>
        <hr/>
        
    </div>
  )
}

export default SearchPage