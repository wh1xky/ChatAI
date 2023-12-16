import './App.css';
import gptLogo from './asset/chatgpt.svg';
import addBtn from './asset/add-30.png';
import msgIcon from './asset/message.svg';
import home from './asset/home.svg';
import saved from './asset/bookmark.svg';
import rocket from './asset/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"/><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="New Chat" className="addBtn"/>New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query"/>What is Programming?</button>
            <button className="query"><img src={msgIcon} alt="Query"/>How to use an API?</button>
          </div>
        </div>
          <div className="lowerSide">
              <div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
              <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
              <div className="listItems"><img src={rocket} alt="Rocket" className="listItemsImg"/>Upgrade to Pro</div>
          </div>
      </div>
        <div className="main">

        </div>
    </div>
  );
}

export default App;
