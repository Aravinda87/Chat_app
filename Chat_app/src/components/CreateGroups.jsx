import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

function CreateGroups() {
  return (
    <div className='creategroups-container'> 
        <input placeholder='Enter the group name' className='search-box'/>
          <IconButton>
            <DoneOutlineIcon/>
          </IconButton>
    
    </div>
  )
}

export default CreateGroups