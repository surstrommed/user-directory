import { TSearchParams } from "./common";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TUserPostsPageProps = {
  params: { userId: string };
  searchParams?: TSearchParams;
};

export type TPostsPageProps = {
  searchParams: TSearchParams;
};

export type TPostCardProps = {
  post: TPost;
  username: string;
};
