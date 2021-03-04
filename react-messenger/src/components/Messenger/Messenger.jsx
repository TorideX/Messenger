import React, { useEffect, useState } from 'react'
import {HubConnectionBuilder} from '@microsoft/signalr'
import { useDispatch, useSelector } from 'react-redux';
import { addChatAction, connectAction, loadChatsAction, loadChatsActionName, loadSelectedPartnerAction, loadUserAction } from '../../actions';
import './Messenger.css'
import { MessageList } from '../MessageList/MessageList';
import { ConversationList } from '../ConversationList/ConversationList';

export const Messenger = () => {

    const connection = useSelector(state=>state.connection)
    const dispatch = useDispatch()
    const chats = useSelector(state=>state.chats)
    const user = useSelector(state=>state.user)
    const selectedPartner = useSelector(state=>state.selectedPartner)
    const [onlineUsers, setOnlineUsers] = useState([])

    // const  []

    useEffect(() => {
        let newConnection = new HubConnectionBuilder()
                                .withUrl('http://localhost:54876/hubs/chat')
                                .withAutomaticReconnect()
                                .build();
        dispatch(connectAction(newConnection));
    }, [])
                            
    
    useEffect(async () => {
        try {
            await connection.start()
            console.log('connected!')    
            connection.send('ClientJoined', user)
            
            connection.on('RecieveMessage', RecieveMessage)
            connection.on('RecieveClients', RecieveClients)
            connection.on('GetMessagesFromPartner', GetMessagesFromPartner)
        } catch (e) {
            console.log('Conenction fail: ', e)
        }
    }, [connection])

    useEffect(async () => {
        try{
            await connection.send('GetMessages', selectedPartner)
        } catch (e) {
            console.log(e);
        }
    }, [selectedPartner])

    const RecieveMessage = (data) => {
        if(data.from !== selectedPartner)
        {
            console.log('here: ', data)
            return;
        }
        dispatch(addChatAction(data))
    }

    const GetMessagesFromPartner = (data) => {
        dispatch(loadChatsAction(data))
    }

    const RecieveClients = (clients) => {
        setOnlineUsers([...clients])
    }

    return (
        <div className='messenger'>
            <div className="sidebar">
                <ConversationList users={onlineUsers}/>
            </div>

            <div className="content">
                <MessageList />
            </div>
        </div>
    )
}
