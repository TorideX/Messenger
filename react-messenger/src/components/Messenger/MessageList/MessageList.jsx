import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ComposeInput } from '../../ComposeInput/ComposeInput'
import { Message } from '../Message/Message'
import './MessageList.css'

const messageType = {
    from: 'userId',
    to: 'userId',
    message: 'message',
    date: 'date'
}

export const MessageList = () => {

    const chats = useSelector(state=>state.chats)
    const user = useSelector(state=>state.user)
    const selectedPartner = useSelector(state=>state.selectedPartner)
    
    const connection = useSelector(state=>state.connection)

    const [messages, setMessages] = useState([])

    useEffect(() => {
        let newMessages = []
        console.log(selectedPartner)
        for(let i=0; i<chats.length; i++)
        {
            if(chats[i].from == selectedPartner || chats[i].to == selectedPartner) newMessages.push(chats[i]);
        }
        setMessages(newMessages)
    }, [chats])

    const sendMessage = async (message) => {
        let data = {
            from: user,
            to: selectedPartner,
            message: message,
            date: new Date().toLocaleString()
        }
        
        if(!connection.connectionStarted) { console.log('Connection hasnt been started!'); return; }
        await connection.send('SendMessage', data);
    }

    return (
        <div className='message-list'>
            <div className='message-list-container'>
                {messages.map((message,i) => (
                    <Message key={i} data={message}/>
            ))}
            </div>
            <ComposeInput sendMessageCallback={sendMessage}/>
        </div>
    )
}
