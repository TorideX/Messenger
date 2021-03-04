import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChatAction } from '../../actions'
import { ComposeInput } from '../ComposeInput/ComposeInput'
import { Message } from '../Message/Message'
import './MessageList.css'

const messageType = {
    from: 'userId',
    to: 'userId',
    message: 'message',
    date: 'date'
}

export const MessageList = () => {

    const dispatch = useDispatch()
    const chats = useSelector(state=>state.chats)
    const user = useSelector(state=>state.user)
    const selectedPartner = useSelector(state=>state.selectedPartner)
    
    const connection = useSelector(state=>state.connection)

    useEffect(() => {
        let objDiv = document.getElementsByClassName('message-list-container')[0];
        objDiv.scrollTop = objDiv.scrollHeight;
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

        dispatch(addChatAction(data))
    }

    const showTimeStamp = (i) =>  {   // why can't I use it as props?
        console.log(i)
        console.log(chats)
        try{
            if(chats[i].date.split(' ')[0] == chats[i-1].date.split(' ')[0])
            return false;
        } catch{ }
        return true;
    }

    return (
        <div className='message-list'>
            <div className='message-list-container'>
                {chats.map((message,i) => (
                    selectedPartner !== '' &&
                    <Message key={i} 
                        showTimeStamp={i!=0 && (chats[i].date.split(' ')[0] == chats[i-1].date.split(' ')[0]) ? false : true} 
                        data={message}/>
            ))}
            </div>
            <ComposeInput sendMessageCallback={sendMessage}/>
        </div>
    )
}
