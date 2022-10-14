import { setRegistrationFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

console.log("current path", path);

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegistrationFormListener();
} else {
  // location.href = "404.html";
  console.warn("404");
}
