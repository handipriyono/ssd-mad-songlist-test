import axios from "axios";

const instance = axios.create({
  timeout: 40000, // Set timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
