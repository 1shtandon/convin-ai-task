import {combineReducers} from 'redux';
import {bucketReducer} from "./Bucket/bucket.reducer";

export const rootReducer = combineReducers({
    // add reducers here
    bucket : bucketReducer
});

