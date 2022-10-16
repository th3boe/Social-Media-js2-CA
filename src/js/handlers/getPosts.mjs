// import { getPost } from "../api/posts/index.mjs";
// import * as templates from "./templates/index.mjs";
// import * as methods from "./api/posts/index.mjs";
import * as templates from "/src/js/templates/index.mjs";
import * as methods from "/src/js/api/posts/index.mjs";

export async function getPosts() {
  const posts = await methods.getPosts();
  const container = document.querySelector("#posts");

  templates.renderPostTemplates(posts, container);
}

getPosts();
