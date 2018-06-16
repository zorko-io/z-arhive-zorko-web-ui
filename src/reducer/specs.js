import {DEFAULT_SPECS_STATE} from "../state";

const initialState = {...DEFAULT_SPECS_STATE};

export default function specsReducer(state = initialState, action) {
    switch (action.type){
        default:
            return state
    }
}
