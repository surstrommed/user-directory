import { ITEMS_PER_PAGE, API_ROUTES } from "@consts/index";
import { http } from "@lib/utils/api";
import { TAlbum } from "@models/albums";
import { TPost } from "@models/posts";
import { TUser } from "@models/users";

export const getUserInfo = async (userId: number) => {
  try {
    const user = await http.get<TUser>(API_ROUTES.user(userId));

    return user;
  } catch {
    return null;
  }
};

export const getAllUsers = async (
  page: number,
  searchQuery?: string,
  sortType?: string
) => {
  try {
    const start = (page - 1) * ITEMS_PER_PAGE;

    let users = await http.get<TUser[]>(
      API_ROUTES.users(start, ITEMS_PER_PAGE, searchQuery)
    );

    if (sortType === "asc") {
      users = users.sort((u1, u2) => u1.username.localeCompare(u2.username));
    }

    if (sortType === "desc") {
      users = users.sort((u1, u2) => u2.username.localeCompare(u1.username));
    }

    return users;
  } catch {
    return [];
  }
};

export const getAllPosts = async (page: number) => {
  try {
    const start = (page - 1) * ITEMS_PER_PAGE;

    const posts = await http.get<TPost[]>(
      API_ROUTES.posts(start, ITEMS_PER_PAGE)
    );

    return posts;
  } catch {
    return [];
  }
};

export const getAllAlbums = async (page: number) => {
  try {
    const start = (page - 1) * ITEMS_PER_PAGE;

    const albums = await http.get<TAlbum[]>(
      API_ROUTES.albums(start, ITEMS_PER_PAGE)
    );

    return albums;
  } catch {
    return [];
  }
};

export const getUserPosts = async (page: number, userId: number) => {
  try {
    const start = (page - 1) * ITEMS_PER_PAGE;

    const userPosts = await http.get<TPost[]>(
      API_ROUTES.userPosts(start, ITEMS_PER_PAGE, userId)
    );

    return userPosts;
  } catch {
    return [];
  }
};

export const getUserAlbums = async (page: number, userId: number) => {
  try {
    const start = (page - 1) * ITEMS_PER_PAGE;

    const userPosts = await http.get<TPost[]>(
      API_ROUTES.userAlbums(start, ITEMS_PER_PAGE, userId)
    );

    return userPosts;
  } catch {
    return [];
  }
};
