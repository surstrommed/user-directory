export const ROUTES = {
  main: "/",
  events: "/events",
  users: "/users",
  posts: "/posts",
  albums: "/albums",
  api: "https://jsonplaceholder.typicode.com",
};

export const API_ROUTES = {
  user: (userId: number) => `${ROUTES.api}/users/${userId}`,
  users: (start: number, limit: number, searchQuery?: string) =>
    `${ROUTES.api}/users?_start=${start}&_limit=${limit}${
      searchQuery ? `&username_like=${searchQuery}` : ""
    }`,
  posts: (start: number, limit: number) =>
    `${ROUTES.api}/posts?_start=${start}&_limit=${limit}`,
  albums: (start: number, limit: number) =>
    `${ROUTES.api}/albums?_start=${start}&_limit=${limit}`,
  userPosts: (start: number, limit: number, userId: number) =>
    `${ROUTES.api}/users/${userId}/posts?_start=${start}&_limit=${limit}`,
  userAlbums: (start: number, limit: number, userId: number) =>
    `${ROUTES.api}/users/${userId}/albums?_start=${start}&_limit=${limit}`,
};

export const PROJECT_NAME = "User Directory";

export const ITEMS_PER_PAGE = 5;
export const PAGE_QUERY = "page";
export const SEARCH_QUERY = "search";
export const SORT_QUERY = "sort";

export const SORT_TYPES = [
  { value: "asc", text: "From A to Z" },
  { value: "desc", text: "From Z to A" },
];
