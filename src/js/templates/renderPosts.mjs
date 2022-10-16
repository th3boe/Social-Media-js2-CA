// export function postTemplateA(postData) {
//   return `<div class="post" id=${postData.id}>${postData.title}</div>`;
// }

export function postTemplates(postData) {
  const titlePosts = document.createElement("h5");
  titlePosts.classList.add("titlePosts");
  titlePosts.innerText = postData.title;

  const bodyPosts = document.createElement("div");
  bodyPosts.classList.add("bodyPosts");
  bodyPosts.innerText = postData.body;

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("postImg");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    posts.append(img);
  }

  return posts;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplates));
}
