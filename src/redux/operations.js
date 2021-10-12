import * as contactsApi from "./contacts-api";
import * as contactsActions from "./actions";
//import axios from "axios";

/*------- authorization -----------*/

export const login = (credentials) => async (dispatch) => {
  /*{email,password}*/
  dispatch(contactsActions.loginRequest());
  try {
    const { data } = await contactsApi.login();
    contactsApi.token.set(data.token);
    dispatch(contactsActions.loginSuccess(credentials));
  } catch (error) {
    dispatch(contactsActions.loginError(error));
  }
};

export const logout = () => async (dispatch) => {
  dispatch(contactsActions.logoutRequest());
  try {
    await contactsApi.logout();
    dispatch(contactsActions.logoutSuccess());
  } catch (error) {
    dispatch(contactsActions.logoutError(error));
  }
};

export const register = (credentials) => async (dispatch) => {
  /*{name,email,password}*/
  dispatch(contactsActions.registerRequest());
  try {
    const { data } = await contactsApi.register(credentials);
    console.log("data=", data);
    contactsApi.token.set(data.token);
    dispatch(contactsActions.registerSuccess(credentials));
  } catch (error) {
    console.log("error type=", typeof error);
    console.log("error=", error);
    //dispatch(contactsActions.registerError(error));
  }
};

/*---------------- contacts --------------*/

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest(contact));
  try {
    /*const contacts =*/ await contactsApi.addContact(contact);
    dispatch(contactsActions.addContactSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest(contactId));
  try {
    /*const contacts =*/ await contactsApi.deleteContact(contactId);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};
