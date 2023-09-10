import { CSSProperties } from "react";

export const styles: { [style: string]: CSSProperties | undefined } = {
  header: {
    width: "100%",
    top: 0,
    position: "sticky",
    zIndex: 1000,
  },
  rowContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
  },
  headerItemContainer: { display: "flex", justifyContent: "center" },
  logo: {
    fontSize: "1.5rem",
  },
  listContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
    gap: "1rem",
  },
  searchForm: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  searchContainer: {
    display: "flex",
    margin: "0 1rem 0 0",
  },
  searchField: {
    width: 200,
  },
};
