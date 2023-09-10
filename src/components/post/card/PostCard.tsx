"use client";

import { TPostCardProps } from "@models/posts";
import { Card } from "antd";

const PostCard = ({ post, username }: TPostCardProps) => {
  return (
    <Card title={post.title} bordered={false} style={{ width: 300 }}>
      <p>{post.body}</p>
      <p>Author: {username}</p>
    </Card>
  );
};

export default PostCard;
