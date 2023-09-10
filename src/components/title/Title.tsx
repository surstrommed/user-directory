"use client";

import { TTitle } from "@models/common";
import { Typography } from "antd";

const Title = ({ title, level }: TTitle) => {
  return (
    <div>
      <Typography.Title level={level}>{title}</Typography.Title>
    </div>
  );
};

export default Title;
