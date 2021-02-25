import { loadUserActionName } from "../actions";

const userReducer = (state = '', action) => {
    switch (action.type) {
        case loadUserActionName:            
            return action.payload;
    
        default:
            return state;
    }
}
export default userReducer;