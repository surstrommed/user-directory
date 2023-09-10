"use client";

import { TUser } from "@models/users";
import { Card, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";
import { ContainerOutlined, IdcardOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { ROUTES } from "@consts/index";

const UserCard = (user: TUser) => {
  const { push } = useRouter();

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <Tooltip title={`${user.name} posts`} key="userPosts">
          <ContainerOutlined
            key="userPosts"
            onClick={() => {
              push(`${ROUTES.users}/${user.id}/posts`);
            }}
          />
        </Tooltip>,
        <Tooltip title={`${user.name} albums`} key="userAlbums">
          <IdcardOutlined
            key="userAlbums"
            onClick={() => {
              push(`${ROUTES.users}/${user.id}/albums`);
            }}
          />
        </Tooltip>,
      ]}
    >
      <Meta title={user.username} description={user.name} />
    </Card>
  );
};

export default UserCard;
