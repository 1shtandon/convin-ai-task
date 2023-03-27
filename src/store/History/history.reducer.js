import {HISTORY_ACTION_TYPES} from "./history.types";

export const HISTORY_INITIAL_STATE = {
    historyList: []
}

export const historyReducer = (state = HISTORY_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;
    if (!payload) {
        return state;
    }

    switch (type) {
        case HISTORY_ACTION_TYPES.SET_HISTORY_LIST:
            return {
                ...state,
                historyList: payload,
            }
        default:
            return state;
    }
}