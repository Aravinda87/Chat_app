import React , {useState} from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import User_Groups from './User_Groups'

function MainContainer() {

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
    <div className='main-container'>
      <Sidebar/>
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      {/* <ChatArea props={conversations[0]}/> */}
      <User_Groups/>
      </div>
  )
}

export default MainContainer 