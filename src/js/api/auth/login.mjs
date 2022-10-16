import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const { accessToken, ...user } = await response.json();

    console.log(response);

    if (response.status === 200) {
      storage.save("token", accessToken);
      storage.save("profile", user);
      location.href = "../../../../index.html";
    }

    if (response.status !== 200) {
      alert("Username and/or password is incorrect");
    }
  } catch (error) {
    console.log(error);
  }
}
