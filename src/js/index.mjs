import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

console.log("current path", path);

if (path === "/profile/login/") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegistrationFormListener();
} else if (path === "/post/create/") {
  listeners.setCreatePostListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostListener();
}
