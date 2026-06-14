export async function getGithubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }
  return response.json();
}

export async function getSelectedRepos(username, repoNames = []) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await res.json();
  return repos.filter((repo) => repoNames.includes(repo.name));
}
