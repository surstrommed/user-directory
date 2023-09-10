"use client";

import { TAlbumCardProps } from "@models/albums";
import { Card } from "antd";

const AlbumCard = ({ album, username }: TAlbumCardProps) => {
  return (
    <Card title={album.title} bordered={false} style={{ width: 300 }}>
      <p>Author: {username}</p>
    </Card>
  );
};

export default AlbumCard;
