import { BUCKET_ACTION_TYPES } from "./bucket.types";

export const BUCKET_INITIAL_STATE = {
    bucketList: []
}

export const bucketReducer = (state = BUCKET_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    if (!payload) {
        return state;
    }

    switch (type) {
        case BUCKET_ACTION_TYPES.SET_BUCKET_LIST:
            return {
                ...state,
                bucketList: payload,
            }
        default:
            return state;
    }
}