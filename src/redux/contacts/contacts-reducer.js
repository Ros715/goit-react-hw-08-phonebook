import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  //addContactRequest,
  addContactSuccess,
  //addContactError,
  //deleteContactRequest,
  deleteContactSuccess,
  //deleteContactError,
  changeFilter,
  //fetchContactsRequest,
  fetchContactsSuccess,
  //fetchContactsError,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  //  [toggleCompletedSuccess]: (state, { payload }) =>
  //    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

/*
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});
*/

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

//const error = createReducer(null, {});

const contactsReducer = combineReducers({
  items,
  filter,
  //loading,
  //error,
});

export default contactsReducer;
