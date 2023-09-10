import { TSearchParams } from "./common";

export type TAlbum = {
  userId: number;
  id: number;
  title: string;
};

export type TUserAlbumsPageProps = {
  params: { userId: string };
  searchParams: TSearchParams;
};

export type TAlbumsPageProps = {
  searchParams: TSearchParams;
};

export type TAlbumCardProps = {
  album: TAlbum;
  username: string;
};
