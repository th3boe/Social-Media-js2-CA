import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "./authFetch.mjs";
import { deletePost } from "./deletePost.mjs";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
if (!id) location.href = "../../../../index.html";

const method = "GET";
const action = "/posts";

const url = `${API_SOCIAL_URL}${action}/${id}`;

const container = document.querySelector("#singlePost");

(async function getSinglePost() {
  try {
    const response = await authFetch(url, { method });
    const json = await response.json();

    const image = json.media
      ? `<img
      src="${json.media}"
      alt="Image for ${json.title}"
      class="post-image"
    />`
      : "";

    container.innerHTML = `
      <h1>${json.title}</h1>
      ${image}
      <p>${json.body}</p>
      <p>${json.tags}</p>

<div class="post-btns d-flex">
      <a href="/post/edit/?id=${json.id}">
        <button class="update-btn w-100 bttn btn-lg" type="button">
          Edit Post
        </button>
      </a>

      <button class="ms-1 w-100 bttn btn-lg" id="delete" type="button" data-delete="${json.id}">
        Delete Post
      </button>
    </div>`;

    const deleteBtn = document.querySelector("#delete");
    deleteBtn.addEventListener("click", deletePost);
  } catch (error) {
    console.log(error);
  }
})();
