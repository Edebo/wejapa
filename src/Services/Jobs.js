import axios from "axios";
import { api } from "../constant";
import { isAuth } from "./Auth";

// axios.defaults.headers.common["Authorization"] = `Bearer ${isAuth().token}`;

export const allJobs = async () => {
  console.log(isAuth().token);
  let res = await axios.get(`${api}/job/all`, {
    headers: {
      Authorization: `Bearer ${isAuth().token}`,
    },
  });
  return res;
};

export const getJob = async (id) => {
  let res = await axios.get(`${api}/job/${id}`, {
    headers: {
      Authorization: `Bearer ${isAuth().token}`,
    },
  });
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
