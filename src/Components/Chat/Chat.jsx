import React from "react";
import { useState } from "react";
import "./Chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello Mr John I want a resort.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello Mr John I want a resort.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
          />
          <span>John Doe </span>
          <p>Hello Mr John I want a resort.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello Mr John I want a resort.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello Mr John I want a resort.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Hello Mr John I want a resort .</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMsg">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
            <div className="chatMsg own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
            <div className="chatMsg">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
            <div className="chatMsg own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
            <div className="chatMsg">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
            <div className="chatMsg own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
            <div className="chatMsg">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 Hour Ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
