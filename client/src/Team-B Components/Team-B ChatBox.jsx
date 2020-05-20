import React from "react";
import '../Styles/Team-B-ChatBox.css';

class ChatBox extends React.Component {
  render() {
    return (
      <div className="Team-B-ChatBox">
        <div className="Team-B-ChatBox-Upper">Mentor ChatBox</div>
        <div className="Team-B-MessageBox">Mentor ChatBox</div>
        <input className="Team-B-TextBox"></input>
      </div>
    );
  }
}
export default ChatBox;
