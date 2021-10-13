import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    console.log("credentials=", credentials);
    const { data } = await axios.post("/users/signup", credentials);
    console.log("data=", data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log("error=", error);
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    console.log("credentials=", credentials);
    const { data } = await axios.post("/users/login", credentials);
    console.log("data=", data);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log("error=", error);
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log("No token found, escape from fetchCurrentUser");
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default authOperations;
