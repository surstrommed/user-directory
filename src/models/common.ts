export type TSearchParams = { [key: string]: string | string[] | undefined };

export type TPagination = {
  show?: boolean;
};

export type TUsePagination = (props: {
  contentPerPage: number;
  onPageChange: (page: number) => void;
}) => {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};

export type TTitle = {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5;
};
