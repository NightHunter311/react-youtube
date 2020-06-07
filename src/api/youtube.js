import axios from "axios";

const KEY = "AIzaSyAqXbjM4LlNVqfRdY-i9QpyDdsxN6TvZ74";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
