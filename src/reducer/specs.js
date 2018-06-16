import {DEFAULT_SPECS_STATE} from "../state";
import {SPEC_LOOKUPS_SET} from "../action";

const initialState = {...DEFAULT_SPECS_STATE};

export default function specsReducer(state = initialState, action) {
    switch (action.type){
        case (SPEC_LOOKUPS_SET):
            return {
                ...state,
                previews: action.payload
            };
        default:
            return state
    }
}
