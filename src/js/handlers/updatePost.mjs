import { updatePost } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/read.mjs";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  if (form) {
    const makeUpdateButton = form.querySelector("button");
    makeUpdateButton.disabled = true;

    const post = await getPost(id);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;
    form.id.value = parseInt(post.id);

    makeUpdateButton.disabled = false;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      if (!post.tags.length) {
        delete post.tags;
      }

      if (!post.media.length) {
        delete post.media;
      }

      post.id = parseInt(id);

      updatePost(post);
    });
  }
}
