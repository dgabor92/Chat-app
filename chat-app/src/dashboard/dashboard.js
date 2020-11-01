import React from "react";
import ChatlistComponent from "../chatlist/chatList";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chat: [],
    };
  }

  render() {
    return (
      <div>
        <ChatlistComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectedChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
      </div>
    );
  }

  selectedChat = (chatIndex) => {
    console.log("selected", chatIndex);
  };

  newChatBtnClicked = () =>
    this.setState({ newChatFormVisible: null, selectedChat: null });

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async (_usr) => {
      if (!_usr) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async (res) => {
            const chats = res.docs.map((_doc) => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
            });
          });
        console.log(this.state);
      }
    });
  };
}

export default DashboardComponent;
