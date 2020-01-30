import React from 'react';

function ChatMessage({ name, message }){
 return(
    <p>
            <strong>{name}</strong> <em>{message}</em>
    </p>
 )}

export default ChatMessage;