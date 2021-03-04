import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { ConversationListItem } from '../ConversationListItem/ConversationListItem'
import './ConversationList.css'

export const ConversationList = ({users}) => {

    const user = useSelector(state=>state.user)

    useEffect(() => {
        console.log('list', users)
    }, [users])
    return (
        <div className="conversation-list">
            <h1>Online Users</h1>
            {
                users.map((u, i)=>(
                    u !== user &&
                    <ConversationListItem key={i} userId={u} lastMessage='.....'/>
                ))
            }
            <h3 className='you'>
                <ConversationListItem userId={user+' → You'} lastMessage=''/>
            </h3>
        </div>
    )
}
