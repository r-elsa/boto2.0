import React from 'react';
import { List, Header } from "semantic-ui-react";


export const Messages = ({message})=> {
  
    return (
        <div>
        
         <List>
             {message.map(lines =>{
                 return (
                     <List.Item key={lines.line}>
                         <Header>{lines.line}</Header>
                     </List.Item>
                 )
             }   
             )
             }
        </List>
 
        </div>
    )
}