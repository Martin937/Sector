import { API_URL } from "./config";

const getAllPosts = async (start = 0) => {
  const response = await fetch(`${API_URL}&_start=${start}`);
  return await response.json();
}


export default getAllPosts;
