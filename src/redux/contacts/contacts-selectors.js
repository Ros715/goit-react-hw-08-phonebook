//import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;

/*
const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    console.log("contacts=", contacts, " filter=", filter);
    return contacts.filter((contact) =>
      contact.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
*/
const getFilteredContacts = (state) => {
  const contacts = getAllContacts(state);
  const filter = getFilter(state);
  //console.log("contacts=", contacts, " filter=", filter);
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const contactsSelectors = {
  getFilter,
  getAllContacts,
  getFilteredContacts,
};
export default contactsSelectors;
