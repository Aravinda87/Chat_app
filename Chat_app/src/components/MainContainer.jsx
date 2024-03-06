import React , {useState} from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
// import Workarea from './Workarea';

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
      <ChatArea props={conversations[0]}/>
      </div>
  )
}

export default MainContainer 