import axios, { AxiosRequestConfig } from "axios";

const baseURL = process.env.NEXTAUTH_URL;

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  baseURL,
});

const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const response = await axiosInstance.request<T>(config);
  return response.data;
};

export const http = {
  get: <T>(
    url: string,
    config: AxiosRequestConfig & RequestInit = {}
  ): Promise<T> => {
    return request<T>({
      url,
      method: "GET",
      ...config,
    });
  },
  post: <T, D>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D> & RequestInit = {}
  ): Promise<T> => {
    return request<T>({
      url,
      method: "POST",
      ...config,
      data,
    });
  },
  put: <T, D>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D> & RequestInit = {}
  ): Promise<T> => {
    return request<T>({
      url,
      method: "PUT",
      ...config,
      data,
    });
  },
  patch: <T, D>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D> & RequestInit = {}
  ): Promise<T> => {
    return request<T>({
      url,
      method: "PATCH",
      ...config,
      data,
    });
  },
  delete: <T, D>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D> & RequestInit = {}
  ): Promise<T> => {
    return request<T>({
      url,
      method: "DELETE",
      ...config,
      data,
    });
  },
};
