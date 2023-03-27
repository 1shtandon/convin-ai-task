import { BUCKET_ACTION_TYPES } from "./bucket.types";
import { createAction } from "../reducers.util";

const setBucketList = (bucketList, bucketName) => {
    bucketList.push({
        id: bucketList.length ? bucketList[bucketList.length - 1].id + 1 : 0,
        name: bucketName,
        cards: []
    });
    return [...bucketList];
}


const editBucketName = (bucketList, bucketId, newBucketName) => {
    const bucket = bucketList.find(bucket => bucket.id === bucketId);
    bucket.name = newBucketName;
    return [...bucketList];
}

const deleteBucket = (bucketList, bucketId) => {
    const newBucketList = bucketList.filter(bucket => bucket.id !== bucketId);
    return [...newBucketList];
}

const addCardToBucket = (bucketList, bucketId, cardName, cardLink) => {
    const bucket = bucketList.find(bucket => bucket.id === bucketId);
    bucket.cards.push({
        id: bucket.cards.length ? bucket.cards[bucket.cards.length - 1].id + 1 : 0,
        name: cardName,
        link: cardLink,
        bucketID: bucketId
    });
    return [...bucketList];
}

const editCardInBucket = (bucketList, bucketId, cardId, newCardName, newCardLink , newBucketId) => {

    if (bucketId === newBucketId) {
        const bucket = bucketList.find(bucket => bucket.id === bucketId);
        const card = bucket.cards.find(card => card.id === cardId);
        card.name = newCardName;
        card.link = newCardLink;
        return [...bucketList];
    }
    else {
        const newBucketList = deleteCardFromBucket(bucketList, bucketId, cardId);
        const newBucketList2 = addCardToBucket(newBucketList, newBucketId, newCardName, newCardLink);
        return [...newBucketList2];
    }
}


const deleteCardFromBucket = (bucketList, bucketId, cardId) => {
    const bucketIndex = bucketList.findIndex(bucket => bucket.id === bucketId);
    const bucket = bucketList[bucketIndex];
    
    const cardIndex = bucket.cards.findIndex(card => card.id === cardId);

    const newBucketList = [...bucketList];
    newBucketList[bucketIndex] = {
        ...bucket,
        cards: [
            ...bucket.cards.slice(0, cardIndex),
            ...bucket.cards.slice(cardIndex + 1)
        ]
    }
    return newBucketList;
}


export const addBucket = (bucketName, bucketList) => {
    const newBucketList = setBucketList(bucketList, bucketName);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const editBucketAction = (bucketList, bucketId, newBucketName) => {
    const newBucketList = editBucketName(bucketList, bucketId, newBucketName);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const deleteBucketAction = (bucketList, bucketId) => {
    const newBucketList = deleteBucket(bucketList, bucketId);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const addCardAction = (bucketList, bucketId, cardName, cardLink) => {
    const newBucketList = addCardToBucket(bucketList, bucketId, cardName, cardLink);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const editCardAction = (bucketList, bucketId, cardId, newCardName, newCardLink , newBucketId) => {
    const newBucketList = editCardInBucket(bucketList, bucketId, cardId, newCardName, newCardLink , newBucketId);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}

export const deleteCardAction = (bucketList, bucketId, cardId) => {
    const newBucketList = deleteCardFromBucket(bucketList, bucketId, cardId);
    return createAction(BUCKET_ACTION_TYPES.SET_BUCKET_LIST, newBucketList);
}
