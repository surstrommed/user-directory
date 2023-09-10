import { SORT_QUERY } from "@consts/index";
import { TSearchParams } from "./common";

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type TUsersPageProps = {
  searchParams?: TSearchParams;
};

export type TUserSortData = {
  [SORT_QUERY]: string;
};
