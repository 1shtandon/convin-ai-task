import { combineReducers } from 'redux';
import { bucketReducer } from "./Bucket/bucket.reducer";
import { historyReducer } from "./History/history.reducer";

export const rootReducer = combineReducers({
    // add reducers here
    bucket: bucketReducer, 
    history : historyReducer
});

