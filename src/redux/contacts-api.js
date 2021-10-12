/*
npm install axios
npm install -g json-server
json-server --watch db.json
*/

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

/*------- authorization -----------*/

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
token.unset();

export async function login(credentials) {
  const { data } = await axios.post("/users/login", credentials);
  return data;
}

export async function logout() {
  const { data } = await axios.post("/users/logout");
  return data;
}

export const register = async (credentials) => {
  console.log("credentials=", credentials);
  const { data } = await axios.post("/users/signup", credentials);
  console.log("return=", data);
  return data;
};

/*------- contacts -----------*/

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
