//import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log(GITHUB_TOKEN)

// const github = axios.create({
//   baseURL: GITHUB_URL,
//   headers: {
//     Authorization: `token ${GITHUB_TOKEN}`,
//   },
//   //headers: { Authorization: `token ${GITHUB_TOKEN}` },
// });

//get initial users (testing purposes)
//we want to export it so we can call it from the component
export const fetchUsers = async () => {
  console.log("i got here");
  const response = await fetch(`${GITHUB_URL}/users`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  console.log(data)
  return data;
};

//get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
    sort: "followers",
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();
  return items;
  //   const response = await github.get(`/search/users?${params}`);
  //   console.log(response.data.items)
  //   return response.data.items;
};

//get singleuser
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};

//get user repos
export const getUserRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: 10
      });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};

//TODO: Axios not working
// Get user and repos
// export const getUserAndRepos = async (login) => {
//   const [user, repos] = await Promise.all([
//     github.get(`/users/${login}`),
//     github.get(`/users/${login}/repos`),
//   ]);

//   return { user: user.data, repos: repos.data };
// };
