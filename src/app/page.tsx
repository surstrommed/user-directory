import { Metadata } from "next";
import { getAllUsers } from "./requests";
import UserCard from "@components/user/card/UserCard";
import Title from "@components/title/Title";
import Pagination from "@components/pagination/Pagination";
import { TUsersPageProps } from "@models/users";
import { PAGE_QUERY, SEARCH_QUERY, SORT_QUERY } from "@consts/index";
import UsersSort from "@components/user/sort/UserSort";
import { styles } from ".";

export const metadata: Metadata = {
  description: "This is the all user's page",
};

const UsersPage = async ({ searchParams }: TUsersPageProps) => {
  const currentPage = Number(searchParams?.[PAGE_QUERY]) || 1;
  const sortType = searchParams?.[SORT_QUERY] as string | undefined;
  const searchQuery = searchParams?.[SEARCH_QUERY] as string | undefined;
  const users = await getAllUsers(currentPage, searchQuery, sortType);

  return (
    <div style={styles.container}>
      <div>
        <Title
          title={users.length ? "All users" : "No users were found"}
          level={2}
        />
      </div>
      {!!users.length && (
        <div>
          <UsersSort />
        </div>
      )}
      <div>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      <Pagination show={!!users.length} />
    </div>
  );
};

export default UsersPage;
