// import { getPost } from "../api/posts/index.mjs";
// import * as templates from "./templates/index.mjs";
// import * as methods from "./api/posts/index.mjs";

import * as templates from "/src/js/templates/index.mjs";
import * as methods from "/src/js/api/posts/index.mjs";

// export async function getPost() {
//   const posts = await methods.getPosts();
//   const singlePost = posts.pop();
//   const container = document.querySelector("#singlePost");

//   templates.renderPostTemplate(singlePost, container);

//   console.log();
// }

// getPost();

export async function getSinglePost(id) {
  const post = await methods.getPost(id);
  const container = document.querySelector("#singlePost");
  templates.renderPostTemplates(post, container);
}

getSinglePost(id);
