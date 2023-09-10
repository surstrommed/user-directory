import { getUserAlbums, getUserInfo } from "@/requests";
import AlbumCard from "@components/album/card/AlbumCard";
import Pagination from "@components/pagination/Pagination";
import Title from "@components/title/Title";
import { PAGE_QUERY } from "@consts/index";
import { TUserAlbumsPageProps } from "@models/albums";
import { styles } from ".";

const UserAlbumsPage = async ({
  params,
  searchParams,
}: TUserAlbumsPageProps) => {
  const currentPage = Number(searchParams?.[PAGE_QUERY]) || 1;
  const userId = Number(params.userId);
  const user = await getUserInfo(userId);
  const userAlbums = await getUserAlbums(currentPage, userId);
  const username = user?.username || "User";

  return (
    <div style={styles.container}>
      <div>
        <Title title={`${username} albums`} level={2} />
      </div>
      <div>
        {userAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} username={username} />
        ))}
      </div>
      <Pagination show={!!userAlbums.length} />
    </div>
  );
};

export default UserAlbumsPage;
