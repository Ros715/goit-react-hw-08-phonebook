import axios from "axios";
import * as contactsActions from "./contacts-actions";

// GET @ /contacts
const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    //console.log("data#1=", data);
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

// POST @ /contacts
const addContact = (contact) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  try {
    //console.log("contact#2=", contact);
    const { data } = await axios.post("/contacts", contact);
    //console.log("data#2=", data);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

// DELETE @ /contacts/:id
const deleteContact = (contactId) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    //console.log("contactId#3=", contactId);
    /*const { data } =*/ await axios.delete(`/contacts/${contactId}`);
    //console.log("data#3=", data);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactsOperations;
