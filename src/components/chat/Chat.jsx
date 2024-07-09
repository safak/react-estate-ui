import { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [Chat, setChat] = useState(true);
  return (
    <div className="Chat">
      <div className="massages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Prince Ojo</span>
          <p>Lorem ipsum dolor sit amet...</p>
          <div className="color"></div>
        </div>
      </div>

      {Chat && (
        <div className="chatBox">
          <div className="top">
            <div className="User">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              Prince Ojo
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatmessage own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>2 hour ago</span>
            </div>
            <div className="chatmessage own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>4 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>8 hour ago</span>
            </div>
            <div className="chatmessage own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>11 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>24 hour ago</span>
            </div>
            <div className="chatmessage">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>1 week ago</span>
            </div>
            <div className="chatmessage own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>2 weeks ago</span>
            </div>
            <div className="chatmessage">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>1 month ago</span>
            </div>
            <div className="chatmessage own">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>2 months ago</span>
            </div>
            <div className="chatmessage">
              <p>Lorem ipsum dolor sit amet...</p>
              <span>1 year ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
