import { createSelector } from 'reselect';

const selectBucket = state => state.bucket;

export const selectBucketList = createSelector(
    [selectBucket],
    bucket => bucket.bucketList
);
export const selectBucketById = (bucketId) =>
    createSelector([selectBucketList],
        (bucketList) =>
            bucketList.find((bucket) => bucket.id === Number(bucketId))
        
    );


export const selectCardById = (bucketId, cardId) =>
    createSelector([selectBucketById(bucketId)], (bucket) =>
        bucket?.cards.find((card) => card.id === (cardId))
    );