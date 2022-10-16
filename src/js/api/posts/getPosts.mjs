import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";
import { renderPosts } from "../../templates/renderPosts.mjs";
import { searchPosts } from "../globals/searchPosts.mjs";
import { sortPosts } from "../globals/sortPosts.mjs";

const action = "/posts";
const method = "GET";

(async function getPosts() {
  const url = `${API_SOCIAL_URL}${action}`;

  try {
    const response = await authFetch(url, method);
    const json = await response.json();

    if (response.status === 200) {
      renderPosts(json);
      searchPosts(json);
      sortPosts(json);
    }

    console.log(json);
  } catch (e) {
    console.log(e);
  }
})();
