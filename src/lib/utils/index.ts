export const urlBuilder = (
  url: string,
  queryKey: string | string[],
  action: "remove" | "add" = "remove",
  queryValue?: string
) => {
  const urlObject = new URL(url);
  const params = new URLSearchParams(urlObject.search);

  if (action === "remove") {
    if (typeof queryKey === "string") {
      params.delete(queryKey);
    } else {
      queryKey.forEach((qK) => {
        params.delete(qK);
      });
    }
  } else if (queryValue !== undefined) {
    if (typeof queryKey === "string") {
      params.set(queryKey, queryValue);
    }
  } else {
    return url;
  }

  urlObject.search = params.toString();

  return urlObject.toString();
};
