import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "53a9a4254dba4a40a4fa85e1b90aa3f5",
  },
});
