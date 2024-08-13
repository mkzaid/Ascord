import React, { useEffect, useState } from 'react'
import axios from "axios"
const Chat = () => {
    const [chatName , setChatName] = useState([])
    const fetchChats = async()=>{
        const {data} = await axios.get('http://localhost:5000/api/chats')
        console.log(data);
        setChatName(data)
        return data
    }

useEffect(()=>{

   fetchChats()

},[])


  return (
    <div>
     {chatName.map((chat)=>{
         return <div key={chat._id} >
            {chat.chatName}
            </div>
        })}
    </div>
  )
}

export default Chat