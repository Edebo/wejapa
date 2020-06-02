import axios from "axios";
import { api } from "../constant";
import { isAuth } from "./Auth";

axios.defaults.headers.Authorization = `Bearer ${isAuth().token}`;

export const allJobs = async () => {
  let res = await axios.get(`${api}/job/all`);
  return res;
};

export const getJob = async (id) => {
  let res = await axios.get(`${api}/job/${id}`);
  return res;
};

// export const isAuth = () => {
//   if (typeof window == undefined) {
//     return false;
//   }
//   if (localStorage.getItem("wejapa")) {
//     return JSON.parse(localStorage.getItem("wejapa"));
//   } else {
//     return false;
//   }
// };
