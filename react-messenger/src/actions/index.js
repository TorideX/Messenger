export const connectActionName = 'CONNECTACTIONNAME'
export const connectAction = (connection) => {
    return {
        type: connectActionName,
        payload: connection
    }
}

export const addChatActionName = 'ADDCHATACTION'
export const addChatAction = (chat) => {
    return {
        type: addChatActionName,
        payload: chat
    }
}

export const loadChatsActionName = 'LOADCHATSACTION'
export const loadChatsAction = (chats) => {
    return {
        type: loadChatsActionName,
        payload: chats
    }
}

export const loadUserActionName = 'LOADUSERACTION'
export const loadUserAction = (userId) => {
    return {
        type: loadUserActionName,
        payload: userId
    }
}

export const loadSelectedPartnerActionName = 'LOADSELECTEDPARTNERACTION'
export const loadSelectedPartnerAction = (userId) => {
    return {
        type: loadSelectedPartnerActionName,
        payload: userId
    }
}
