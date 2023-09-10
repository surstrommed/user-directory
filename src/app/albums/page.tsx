import { Metadata } from "next";
import { getAllAlbums, getUserInfo } from "@/requests";
import AlbumCard from "@components/album/card/AlbumCard";
import Title from "@components/title/Title";
import Pagination from "@components/pagination/Pagination";
import { TAlbumsPageProps } from "@models/albums";
import { PAGE_QUERY } from "@consts/index";
import { styles } from ".";

export const metadata: Metadata = {
  description: "This is a page with all user's albums",
};

const AlbumsPage = async ({ searchParams }: TAlbumsPageProps) => {
  const currentPage = Number(searchParams?.[PAGE_QUERY]) || 1;
  const albums = await getAllAlbums(currentPage);
  const userIds = albums.map((album) => album.userId);
  const usernames: { [userId: number]: string } = {};
  await Promise.all(
    userIds.map(async (userId) => {
      const user = await getUserInfo(userId);
      usernames[userId] = user?.username || "User";
    })
  );

  return (
    <div style={styles.container}>
      <div>
        <Title title="All albums" level={2} />
      </div>
      <div>
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            username={usernames[album.userId]}
          />
        ))}
      </div>
      <Pagination show={!!albums.length} />
    </div>
  );
};

export default AlbumsPage;
