import api from "./api";

export const ACTION_UPDATED = 'ACTION_UPDATED';
export const ACTION_UPDATING = 'ACTION_UPDATING';

export const increase = (dispatch) => async (number, current) => {

    dispatch( { type: ACTION_UPDATING });

    const value = await api(number, current);

    dispatch({ type: ACTION_UPDATED, value });
};
