import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts";
const method = "PUT";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("No update available");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method: method,
    body: JSON.stringify(postData),
  });

  location.href = `../../../../post/?id=${postData.id}`;
  return await response.json();
}
