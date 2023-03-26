import { BUCKET_ACTION_TYPES } from "./bucket.types";
import { createAction } from "../reducers.util";

const setBucketList = (bucketList, bucketName) => {
    bucketList.push({
        id: bucketList.length ? bucketList[bucketList.length - 1].id + 1 : 0,
        name: bucketName,
        cards : []
    });
    return [...bucketList];
}


const editBucketName = (bucketList , bucketId , newBucketName) => {
    const bucket = bucketList.find(bucket => bucket.id === bucketId);
    bucket.name = newBucketName;
    return [...bucketList];
}

const deleteBucket = (bucketList , bucketId) => {
    const newBucketList = bucketList.filter(bucket => bucket.id !== bucketId);
    return [...newBucketList];
}


export const addBucket = (bucketName , bucketList) => {
    const newBucketList = setBucketList(bucketList, bucketName);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const editBucketAction = (bucketList , bucketId , newBucketName) => {
    const newBucketList = editBucketName(bucketList , bucketId , newBucketName);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const deleteBucketAction = (bucketList , bucketId) => {
    const newBucketList = deleteBucket(bucketList , bucketId);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}
