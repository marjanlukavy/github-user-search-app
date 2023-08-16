const BASE_URL = "https://api.github.com";

export async function fetchGitHubUser(username: string) {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  if (!response.ok) {
    throw new Error("User not found");
  }
  return response.json();
}
