import { API_URL } from "./config";

const getAllPosts = async () => {
  const response = await fetch(API_URL);
  return await response.json();
}


export default getAllPosts;
