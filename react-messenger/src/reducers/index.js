import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import connectionReducer from "./connectionReducer";
import selectedPartnerReducer from "./selectedPartnerReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
    connection: connectionReducer,
    chats: chatReducer,
    user: userReducer,
    selectedPartner: selectedPartnerReducer
})

export default allReducers;