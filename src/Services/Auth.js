import axios from "axios";
import { api } from "../constant";

export const signin = async (data) => {
  axios
    .post(`${api}/developer/login`, data)
    .then((res) => {
      console.log(res.data);
      authenticate(res.data);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const authenticate = (data) => {
  if (typeof window !== undefined) {
    let store = {
      developer: data.data.developer,
      token: data.data.token,
    };
    localStorage.setItem("wejapa", JSON.stringify(store));
  }
};

export const isAuth = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("wejapa")) {
    return JSON.parse(localStorage.getItem("wejapa"));
  } else {
    return false;
  }
};

export const logout = () => {
  if (typeof window !== undefined) {
    window.localStorage.removeItem("wejapa");
  }
};
