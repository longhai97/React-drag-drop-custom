import {ACTION_UPDATED, ACTION_UPDATING} from "./actions";

export default (state = { count: 0, updating: false }, { type, value }) => {

    if (type === ACTION_UPDATED) {
        return {
            count: value,
            updating: false
        }
    }

    if (type === ACTION_UPDATING) {
        return  {
            ...state,
            updating: true
        }
    }

    return state;
};
