import { loadSelectedPartnerActionName } from "../actions";

const selectedPartnerReducer = (state = '', action) => {
    switch(action.type)
    {
        case loadSelectedPartnerActionName:
            return action.payload

        default: 
            return state;
    }
}

export default selectedPartnerReducer;