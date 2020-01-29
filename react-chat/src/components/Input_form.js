import React, {useState} from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

export const User_input = ({onNewMessage}) => {
 const [line, setLine] = useState("");


  return ( 
    <Form>
      <Form.Field>
      <Input placeholder="Hi Boto" value = {line} onChange = {e => setLine(e.target.value)}/>
      </Form.Field>

      <Form.Field>

        <Button 
        onClick= {async () => {
          const message = JSON.stringify({line});
          const response = await fetch('http://localhost:5000/add_chat',{
            method : 'POST',
            headers:{
              'Content-Type': 'application/json'   
            },
            body:message
          })

          if (response.ok){
            console.log('response worked')
            console.log(message)
            onNewMessage(message)
            setLine('')

          }else{
            console.log(message)
            console.log('did not work')
       

          }}

        }>submit</Button>
      </Form.Field>
      </Form>


  )
  };
