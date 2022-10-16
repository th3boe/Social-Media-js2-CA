import { remove } from "../../storage/index.mjs";

export function logoutButton() {
  const button = document.querySelector("#logout");

  if (button) {
    button.onclick = function () {
      remove("token");
      remove("profile");
      location.href = "../../../../profile/login";
    };
  }
}
