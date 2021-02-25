import React, { useState } from 'react'
import './ComposeInput.css'

export const ComposeInput = ({sendMessageCallback}) => {

    const [message, setMessage] = useState('')

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if(message == '') return;
        console.log('Sending...', message)
        
        sendMessageCallback(message)
        setMessage('')
    }

    return (
        <div className="compose">
            <form onSubmit={formSubmitHandler} className='compose-form'>
                <input type="text" className="compose-input" placeholder="Type a message" value={message} onChange={e=>setMessage(e.target.value)}/>
                <button type='submit' className='compose-btn'>Send</button>
            </form>
      </div>
    )
}
