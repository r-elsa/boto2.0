import React, {useEffect, useState} from 'react';
import './App.css';
import { Messages } from "./components/Messages";
import { User_input } from "./components/Input_form";
import { Container } from 'semantic-ui-react';

function App() {
  const [message, setMessages] = useState([]);

  useEffect(()=> {
    fetch("/message").then(response=>
      response.json().then(data=>{
        console.log(data.message)
        setMessages(data.message)
      }
      )
      )
  }, [])
  return (
    <div>
      <Container style = {{marginTop: 40}}>
        <h1>Chatbot</h1>
      <User_input onNewMessage={message => setMessages(currentMessages => [...currentMessages, message])}/>
      <Messages message={message}/>
      </Container>
  
    </div>
  );
}

export default App;
