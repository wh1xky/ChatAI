import './App.css';
import gptLogo from './asset/chatgpt.svg';
import addBtn from './asset/add-30.png';
import msgIcon from './asset/message.svg';
import home from './asset/home.svg';
import saved from './asset/bookmark.svg';
import rocket from './asset/rocket.svg';
import sendBtn from './asset/send.svg';
import userIcon from './asset/user-icon.png';
import gptImgLogo from './asset/chatgptLogo.svg'
import {sendMsgToOpenAI} from "./openai";
import {useEffect, useRef, useState} from "react";

function App() {
    const msgEnd = useRef(null);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAI. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, have conversations, seek information, or even request assistance with various tasks. Just let me know how I can help you!",
            isBot: true,
        }
    ]);

    useEffect(() => {
        msgEnd.current.scrollIntoView()
    }, [messages]);

    const handleSend = async () => {
        const text = input;
        setInput('');
        setMessages([
            ...messages,
            {text, isBot: false}
        ])
        const res = await sendMsgToOpenAI(text);
        setMessages([
            ...messages,
            {text, isBot: false},
            {text: res, isBot: true}
        ]);
    }

    const handleEnter = async (e) => {
        if (e.key === 'Enter') await handleSend();
    }

    const handleQuery = async (e) => {
        const text = e.target.value;
        setMessages([
            ...messages,
            {text, isBot: false}
        ])
        const res = await sendMsgToOpenAI(text);
        setMessages([
            ...messages,
            {text, isBot: false},
            {text: res, isBot: true}
        ]);
    }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"/><span className="brand">ChatGPT</span></div>
          <button className="midBtn" onClick={()=>{window.location.reload()}}><img src={addBtn} alt="New Chat" className="addBtn"/>New Chat</button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value={"What is Programming?"}><img src={msgIcon} alt="Query"/>What is Programming?</button>
            <button className="query" onClick={handleQuery} value={"How to use an API?"}><img src={msgIcon} alt="Query"/>How to use an API?</button>
          </div>
        </div>
          <div className="lowerSide">
              <div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
              <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
              <div className="listItems"><img src={rocket} alt="Rocket" className="listItemsImg"/>Upgrade to Pro</div>
          </div>
      </div>
        <div className="main">
            <div className="chats">
                {messages.map((messages, i) =>
                    <div key={i} className={messages.isBot?"chat bot":"chat"}>
                        <img className='chatImg' src={messages.isBot?gptImgLogo:userIcon} alt=""/><p className="txt">{messages.text}</p>
                    </div>
                )}
                <div ref={msgEnd}/>
            </div>
            <div className="chatFooter">
                <div className="inp">
                    <input type="text" placeholder='Send a message...' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send"/></button>
                </div>
                <p>ChatGPT may produce inaccurate information about people or facts. ChatGPT December 16 Version</p>
            </div>
        </div>
    </div>
  );
}

export default App;
