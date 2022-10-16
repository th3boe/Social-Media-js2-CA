/* <li class="nav-item">
            <a href="/profile/login/" class="px-4">Login</a>
          </li> */
import { load } from "../../storage/index.mjs";
import { logoutButton } from "./logoutButton.mjs";

function menu() {
  const logoutBtn = document.querySelector(".logout-btn-container");
  const loginBtn = document.querySelector(".signin-btn");

  const token = load("token");

  if (token) {
    logoutBtn.style.display = "block";
    loginBtn.style.display = "none";
  } else {
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
  }

  logoutButton();
}

menu();
