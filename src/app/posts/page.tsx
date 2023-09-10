import { Metadata } from "next";
import { getAllPosts, getUserInfo } from "@/requests";
import PostCard from "@components/post/card/PostCard";
import Title from "@components/title/Title";
import Pagination from "@components/pagination/Pagination";
import { TPostsPageProps } from "@models/posts";
import { PAGE_QUERY } from "@consts/index";
import { styles } from ".";

export const metadata: Metadata = {
  description: "This is a page with all user's posts",
};

const PostsPage = async ({ searchParams }: TPostsPageProps) => {
  const currentPage = Number(searchParams?.[PAGE_QUERY]) || 1;
  const posts = await getAllPosts(currentPage);
  const userIds = posts.map((post) => post.userId);
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
        <Title title="All posts" level={2} />
      </div>
      <div>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            username={usernames[post.userId]}
          />
        ))}
      </div>
      <Pagination show={!!posts.length} />
    </div>
  );
};

export default PostsPage;
