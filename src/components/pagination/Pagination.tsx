"use client";

import { Pagination as AntdPagination, PaginationProps } from "antd";
import { usePagination } from "hooks/usePagination";
import { useRouter } from "next/navigation";
import { styles } from ".";
import { ITEMS_PER_PAGE, PAGE_QUERY } from "@consts/index";
import { urlBuilder } from "@lib/utils";
import { TPagination } from "@models/common";
import { useEffect } from "react";

const Pagination = ({ show = true }: TPagination) => {
  const { push } = useRouter();

  const onPageChange = (page: number) => {
    const routeWithPage = urlBuilder(
      window.location.href,
      PAGE_QUERY,
      "add",
      `${page}`
    );
    push(routeWithPage);
  };

  const { page, setPage } = usePagination({
    contentPerPage: ITEMS_PER_PAGE,
    onPageChange,
  });

  const allCount = (page + 1) * ITEMS_PER_PAGE;

  const onPaginationChange: PaginationProps["onChange"] = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    if (!show && page !== 1) {
      setPage(1);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div style={styles.container}>
      <AntdPagination
        onChange={onPaginationChange}
        current={page}
        total={allCount}
        pageSize={ITEMS_PER_PAGE}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Pagination;
