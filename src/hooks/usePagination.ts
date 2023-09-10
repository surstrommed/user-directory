import { PAGE_QUERY, SEARCH_QUERY } from "@consts/index";
import { TUsePagination } from "@models/common";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const usePagination: TUsePagination = ({
  contentPerPage,
  onPageChange,
}) => {
  const params = useSearchParams();
  const pageQuery = Number(params.get(PAGE_QUERY)) || 1;

  const searchQuery = params.get(SEARCH_QUERY);
  const filterQueries = [searchQuery];

  const [page, setPage] = useState<number>(pageQuery);
  const [pageCount, setPageCount] = useState<number>(page + 1);

  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSafe = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1 || pageCount === 0) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  useEffect(() => {
    setPageCount(page + 1);
  }, [page]);

  useEffect(() => {
    if (pageQuery !== 1 && filterQueries.some((query) => !!query)) {
      setPageSafe(1);
    }
  }, [...filterQueries]);

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
