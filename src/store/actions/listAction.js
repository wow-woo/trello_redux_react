import {
  ADD_CARD,
  ADD_LIST,
  UPDATE_CARD,
  UPDATE_LIST,
  DELETE_CARD,
  DELETE_LIST,
} from "../type.js";

export const addCard = (list_id, content) => (dispatch) => {
  return dispatch({
    type: ADD_CARD,
    payload: { list_id, content },
  });
};

export const addList = (title) => (dispatch) => {
  return dispatch({
    type: ADD_LIST,
    payload: title,
  });
};

export const updateCard = (content, list_id) => (dispatch) => {
  return dispatch({
    type: UPDATE_CARD,
    payload: { content, list_id },
  });
};

export const updateList = (title) => (dispatch) => {
  return dispatch({
    type: UPDATE_LIST,
    payload: title,
  });
};

export const deleteCard = (list, card) => (dispatch) => {
  return dispatch({
    type: DELETE_CARD,
    payload: { list, card },
  });
};

export const deleteList = (id) => (dispatch) => {
  return dispatch({
    type: DELETE_LIST,
    payload: id,
  });
};
