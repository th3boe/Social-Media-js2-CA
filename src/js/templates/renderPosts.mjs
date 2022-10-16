export function renderPosts(posts) {
  const container = document.querySelector("#posts");

  container.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (i === 10) break;

    const image = post.media
      ? `<img
        src="${post.media}"
        alt="Image for ${post.title}"
        class="post-image"
      />`
      : "";

    container.innerHTML += `
      <a href="post/?id=${post.id}">
        <div class="card m-2 single-post">
          <h2 class="card-title m-2">${post.title}</h2>
          ${image}
          <p class="card-text m-2">${post.body}</p>
          <p>${post.tags}</p>
        </div>
      </a>
      `;
  }
}
