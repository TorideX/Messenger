import { HubConnectionBuilder } from "@microsoft/signalr";
import { connectActionName } from "../actions";

const connectionReducer = (state = new HubConnectionBuilder(), action) => {
    switch (action.type) {
        case connectActionName:            
            return action.payload;
    
        default:
            return state
    }
}

export default connectionReducer;