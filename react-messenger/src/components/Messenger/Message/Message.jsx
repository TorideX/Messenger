import React from 'react'
import { useSelector } from 'react-redux'
import './Message.css'

export const Message = ({data}) => {
    
    const user = useSelector(state=>state.user)    

    return (
        <div className={`message ${data.from == user ? 'mine' : ''}`}>
            <div className="bubble-container">
                <div className="bubble" title={data.date}>
                    { data.message }
                </div>
            </div>
        </div>
    )
}
