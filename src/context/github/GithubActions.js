import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
  //headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//get initial users (testing purposes)
//we want to export it so we can call it from the component
export const fetchUsers = async () => {
//for fetch
//   const response = await fetch(`${GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   return data;

//for axios
const response = await github.get(`/users`)
return response.data
};

//get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
    sort: "followers",
    per_page: 100,
  });

//   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
  
//   const data = await response.json();

//   return [data.items, data.total_count];

    const response = await github.get(`/search/users?${params}`);
    return [response.data.items, response.data.total_count];
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
    per_page: 10,
  });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
 };

//Axios not working for only this method
//Get user and repos
export const getUserAndRepos = async (login) => {
//   const [user, repos] = await Promise.all([
//     github.get(`/users/${login}`),
//     github.get(`/users/${login}/repos`),
//   ]);

//   return { user: user.data, repos: repos.data };
};
