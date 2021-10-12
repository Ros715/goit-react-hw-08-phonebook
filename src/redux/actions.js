import { createAction } from "@reduxjs/toolkit";
//import { types } from "./actions-types";

/*------- authorization -----------*/

export const loginRequest = createAction("login/request");
export const loginSuccess = createAction("login/success");
export const loginError = createAction("login/error");

export const logoutRequest = createAction("logout/request");
export const logoutSuccess = createAction("logout/success");
export const logoutError = createAction("logout/error");

export const registerRequest = createAction("register/request");
export const registerSuccess = createAction("register/success");
export const registerError = createAction("register/error");

/*------- contacts -----------*/

export const fetchContactsRequest = createAction("fetchContacts/request");
export const fetchContactsSuccess = createAction("fetchContacts/success");
export const fetchContactsError = createAction("fetchContacts/error");

export const addContactRequest = createAction("addContact/request");
export const addContactSuccess = createAction("addContact/success");
export const addContactError = createAction("addContact/error");

export const deleteContactRequest = createAction("deleteContact/request");
export const deleteContactSuccess = createAction("deleteContact/success");
export const deleteContactError = createAction("deleteContact/error");

export const changeFilter = createAction("changeFilter");
