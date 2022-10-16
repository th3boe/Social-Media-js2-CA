import { renderPosts } from "../../templates/renderPosts.mjs";

export function sortPosts(posts) {
  const sortBtn = document.querySelector(".sort-posts");

  let sortedPosts = [];

  sortBtn.onclick = function () {
    sortedPosts = posts.sort(function (a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    renderPosts(sortedPosts);
  };
}
