/*
npm install reselect
*/
import { createSelector } from "reselect";

export const getContacts = (state) => state.contacts;

export const getFilter = (state) => state.filter;

export const getLoggedIn = (state) => state.loggedIn;

/* version without reselection:
export const getFilteredContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
*/

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
