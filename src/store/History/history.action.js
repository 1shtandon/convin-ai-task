import { HISTORY_ACTION_TYPES } from "./history.types";
import { createAction } from "../reducers.util";


const setHistoryList = (historyList, card) => {
    const { cardId, name, link, bucketID } = card;
    const date = new Date();
    const time = date.toLocaleTimeString();

    const cardExists = historyList.find((card) => card.id === cardId && card.bucketID === bucketID);
    if (cardExists) {
        cardExists.time = time;
    }
    else {
        historyList.push({
            id: historyList.length ? historyList[historyList.length - 1].id + 1 : 0,
            cardId: cardId,
            name: name,
            link: link,
            bucketID: bucketID,
            time: time
        });
    }
    return [...historyList];
}

const deleteHistoryCard = (historyList, cardId) => {
    const newHistoryList = historyList.filter((card) => card.id !== cardId);
    return [...newHistoryList];
}

export const deleteHistory = (historyList) => {
    return createAction(HISTORY_ACTION_TYPES.SET_HISTORY_LIST, []);
}

export const addToHistory = (card) => {
    return (dispatch, getState) => {
        const { historyList } = getState().history;
        const newHistoryList = setHistoryList(historyList, card);
        dispatch(createAction(HISTORY_ACTION_TYPES.SET_HISTORY_LIST, newHistoryList));
    }
}