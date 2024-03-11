import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ConversationItem from './ConversationItem';
import ChatArea from './ChatArea';
import { useNavigate } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

function Sidebar() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const lighttheme = useSelector((state) => state.themeKey);

    const [conversations,setconversation] = useState([
        {
            name : "Test1",
            lastmessage : "lastmessage 1",
            timestamp : "today"
        },
        {
            name : "Test2",
            lastmessage : "lastmessage 2",
            timestamp : "today"
        },
        {
            name : "Test3",
            lastmessage : "lastmessage 3",
            timestamp : "today"
        },
    ])


  return (
    <div className='sidebar-container'>
        
        <div className={"sb-header" + (lighttheme ? "" : " dark")}>
            <div>
                <IconButton >
                    <AccountCircleIcon
                        className={"icon" + (lighttheme ? "" : " dark")}
                    />
                </IconButton>
            </div>
            <div className='other-icons'>
                <IconButton onClick={()=>{navigate("users")}}>
                    <PersonAddIcon
                         className={"icon" + (lighttheme ? "" : " dark")}
                    />
                </IconButton>
                <IconButton onClick={()=>{navigate("groups")}}>
                    <GroupAddIcon
                         className={"icon" + (lighttheme ? "" : " dark")}
                    />
                </IconButton>
                <IconButton onClick={()=>{navigate("create-groups")}}>
                    <AddCircleIcon
                         className={"icon" + (lighttheme ? "" : " dark")}
                    />
                </IconButton>
                <IconButton onClick={() => {dispatch(toggleTheme());}}
                >
                    {lighttheme && <NightlightIcon  className={"icon" + (lighttheme ? "" : " dark")}/>}
                    {!lighttheme && <LightModeIcon  className={"icon" + (lighttheme ? "" : " dark")}/>}
                </IconButton>
            </div>
        </div>

        <div  className={"sb-search" + (lighttheme ? "" : " dark")}>
            <IconButton >
            <SearchSharpIcon className={"sb-search" + (lighttheme ? "" : " dark")}/>
            </IconButton>
            <input placeholder='search' className={"search-box" + (lighttheme ? "" : " dark")} />
        </div>

        <div className={"sb-conversations" + (lighttheme ? "" : " dark")}>
            {
                conversations.map((conversation) => {
                   return  <ConversationItem props={conversation} key={conversation.name}/>
                })   
            }
        </div>
    </div>
  )
}

export default Sidebar