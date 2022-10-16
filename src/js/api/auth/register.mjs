import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
    });

    const result = await response.json();

    console.log(response);
    if (response.status === 201) {
      location.href = "../../../../profile/login/";
    }

    if (response.status !== 201) {
      alert("Something went wrong - user may already exist. Please try again.");
    }

    return result;
  } catch (error) {
    console.log(error);
  }
}
