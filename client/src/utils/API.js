import axios from "axios";
export default {
  apiKey: (data) => {
    return axios.get("/api/key", data);
  },
  inquire: (data) => {
    return axios.post("/api/inquire", data);
  },
};
