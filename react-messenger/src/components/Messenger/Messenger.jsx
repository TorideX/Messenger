import React, { useEffect, useState } from 'react'
import {HubConnectionBuilder} from '@microsoft/signalr'
import { useDispatch, useSelector } from 'react-redux';
import { addChatAction, connectAction, loadChatsAction, loadSelectedPartnerAction, loadUserAction } from '../../actions';
import './Messenger.css'
import { MessageList } from './MessageList/MessageList';

const defaultChats = [
    {
        from:'user1',
        to:'user2',
        message:'Hi Bro',
        date: new Date().toLocaleString()
    },
    {
        from:'user2',
        to:'user1',
        message:'Hey',
        date: new Date().toLocaleString()
    },
    {
        from:'user2',
        to:'user1',
        message:'Whats up man',
        date: new Date().toLocaleString()
    },
    {
        from:'user1',
        to:'user2',
        message:'Im fine bro',
        date: new Date().toLocaleString()
    },
    {
        from:'user1',
        to:'user3',
        message:'Hello? Are you there?',
        date: new Date().toLocaleString()
    },
    {
        from:'user3',
        to:'user1',
        message:'Yes Whats happened??!!',
        date: new Date().toLocaleString()
    }
]

export const Messenger = () => {

    const dispatch = useDispatch()
    const chats = useSelector(state=>state.chats)
    const user = useSelector(state=>state.user)
    const selectedPartner = useSelector(state=>state.selectedPartner)
    const connection = useSelector(state=>state.connection)

    useEffect(() => {
        dispatch(loadUserAction('user1'))
        dispatch(loadSelectedPartnerAction('user2'))

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
            connection.on('RecieveMessage', RecieveMessage)
        } catch (e) {
            console.log('Conenction fail: ', e)
            
            dispatch(loadChatsAction(defaultChats))
            console.log(chats)
        }
    }, [connection])

    const RecieveMessage = (data) => {
        console.log(data)
        dispatch(addChatAction(data))
    }

    return (
        <div className='messenger'>
            <div className="scrollable sidebar">
                {/* <ConversationList /> */}
            </div>

            <div className="scrollable content">
                <MessageList />
            </div>
        </div>
    )
}
