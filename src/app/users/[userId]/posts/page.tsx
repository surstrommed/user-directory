import { getUserInfo, getUserPosts } from "@/requests";
import Pagination from "@components/pagination/Pagination";
import PostCard from "@components/post/card/PostCard";
import Title from "@components/title/Title";
import { PAGE_QUERY } from "@consts/index";
import { TUserPostsPageProps } from "@models/posts";
import { styles } from ".";

const UserPostsPage = async ({ params, searchParams }: TUserPostsPageProps) => {
  const currentPage = Number(searchParams?.[PAGE_QUERY]) || 1;
  const userId = Number(params.userId);
  const user = await getUserInfo(userId);
  const userPosts = await getUserPosts(currentPage, userId);
  const username = user?.username || "User";

  return (
    <div style={styles.container}>
      <div>
        <Title title={`${username} albums`} level={2} />
      </div>
      <div>
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} username={username} />
        ))}
      </div>
      <Pagination show={!!userPosts.length} />
    </div>
  );
};

export default UserPostsPage;
