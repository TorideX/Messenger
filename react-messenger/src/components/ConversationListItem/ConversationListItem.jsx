import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadSelectedPartnerAction } from '../../actions'
import './ConversationListItem.css'

export const ConversationListItem = ({userId, lastMessage}) => {

  const dispatch = useDispatch()
  const selectedPartner = useSelector(state=>state.selectedPartner)

  const itemClickHandler = () => {
    dispatch(loadSelectedPartnerAction(userId))
  } 
  
    return (
        <div className="conversation-list-item" onClick={itemClickHandler} style={{backgroundColor: selectedPartner == userId? '#808e9b': ''}}>
        <img className="conversation-photo" src='https://picsum.photos/200' alt="Pic" />
        <div className="conversation-info">
          <h1 className="conversation-title">{userId}</h1>
          <p className="conversation-snippet">{lastMessage}</p>
        </div>
        {/* <div className="conversation-unread">
          <h3>1</h3>
        </div> */}
      </div>
    )
}
