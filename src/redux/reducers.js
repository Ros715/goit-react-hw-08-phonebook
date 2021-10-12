import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "./actions";

const contacts = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

const loggedIn = createReducer(false, {
  [contactsActions.loginSuccess]: (state, action) => true,
  [contactsActions.loginError]: (state, action) => false,
  [contactsActions.registerSuccess]: (state, action) => true,
  [contactsActions.registerError]: (state, action) => false,
  [contactsActions.logoutSuccess]: (state, action) => false,
});

const rootReducer = combineReducers({
  contacts,
  filter,
  loggedIn,
});

export default rootReducer;
