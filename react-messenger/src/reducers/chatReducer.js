import { addChatActionName, loadChatsActionName } from "../actions";

const chatReducer = (state = [], action) => {
    switch(action.type)
    {
        case addChatActionName:
            return [...state, action.payload]
        
        case loadChatsActionName:
            return action.payload

        default: 
            return state;
    }
}

export default chatReducer;