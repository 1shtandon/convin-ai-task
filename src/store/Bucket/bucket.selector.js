import {createSelector} from 'reselect';

const selectBucket = state => state.bucket;

export const selectBucketList = createSelector(
    [selectBucket],
    bucket => bucket.bucketList
);