import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";

const action = "/posts/";
const method = "DELETE";

export async function deletePost() {
  const id = this.dataset.delete;
  const url = API_SOCIAL_URL + action + id;

  if (id) {
    console.log("URL:", url);

    try {
      const response = await authFetch(url, { method });
      const json = await response.json();

      location.href = "../../../index.html";
    } catch (error) {
      console.log(error);
    }
  }
}
