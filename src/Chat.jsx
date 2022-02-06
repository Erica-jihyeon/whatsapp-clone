import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from "react-router-dom";
import db from './firebase';

import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined, AttachFile } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  //get the roomId from the url
  //=> find room name from db => setRoomName on chat
  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))
      setSeed(Math.floor(Math.random() * 5000));
    }
  }, [roomId])

  // useEffect(() => {
  //   setSeed(Math.floor(Math.random() * 5000));
  // }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(input);
    setInput("");
  }

  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {/* check user */}
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">{`Erica`}</span>
          Hey Guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
