import { BUCKET_ACTION_TYPES } from "./bucket.types";

export const BUCKET_INITIAL_STATE = {
    bucketList: [
        {
            id: 1,
            name: "Educational Videos",
            cards: [
                {
                    id: 1,
                    name: "Deepmind Podcast",
                    link: "https://youtu.be/ExrXs7PCQpU",
                    bucketID: 1
                },
                {
                    id: 2,
                    name: "Quantum Computing",
                    link: "https://youtu.be/-UrdExQW0cs",
                    bucketID: 1
                },
                {
                    id: 3,
                    name: "Space Welding",
                    link: "https://youtu.be/Y2nQ8isf55s",
                    bucketID: 1
                }]

        },
        {
            id: 2,
            name: "Music",
            cards: [
                {
                    id: 1,
                    name: "Tu Jaane Na",
                    link: "https://youtu.be/P8PWN1OmZOA",
                    bucketID: 2
                },
                {
                    id: 2,
                    name: "Eyes closed",
                    link: "https://youtu.be/u6wOyMUs74I",
                    bucketID: 2
                }]
        },
        {
            id: 3,
            name: "Sports",
            cards: [
                {
                    id: 1,
                    name: "Best of Cricket",
                    link: "https://youtu.be/OPzriRIiPJk",
                    bucketID: 3
                },
                {
                    id: 2,
                    name: "Ind vs Aus",
                    link: "https://youtu.be/OeSjnKmHF7w",
                    bucketID: 3
                },
                {
                    id: 3,
                    name: "Best of Football",
                    link: "https://youtu.be/HdYB5gSVZ3U",
                    bucketID: 3
                }]
        }
    ]
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