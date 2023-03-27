import { createSelector } from "reselect";

const selectHistory = (state) => state.history;

export const selectHistoryList = createSelector(
    [selectHistory],
    (history) => history.historyList
);
