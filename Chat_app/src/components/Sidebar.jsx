import { IconButton } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';


function Sidebar() {
  return (
    <div className='sidebar-container'>
        <div className='sb-header'>
            <div>
                <IconButton>
                    <AccountCircleIcon/>
                </IconButton>
            </div>

            <div>
                <IconButton>
                    <PersonAddIcon/>
                </IconButton>
                <IconButton>
                    <GroupAddIcon/>
                </IconButton>
                <IconButton>
                    <AddCircleIcon/>
                </IconButton>
                <IconButton>
                    <NightlightIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sb-search'>
            <IconButton>
            <SearchSharpIcon/>
            </IconButton>
            <input placeholder='search' className='search-box' />
        </div>
        <div className='sb-conversations'>
            
        </div>
    </div>
  )
}

export default Sidebar