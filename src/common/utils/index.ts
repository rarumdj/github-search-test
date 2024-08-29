export const getSearchName = (key: string) => {
  switch (key) {
    case "q":
      return "Search";
    case "type":
      return "Searched by";
  }
};

export const isObjectEmpty = (obj: object) => {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
};

export const stringifyParameters = (params: any) => {
  return !params || isObjectEmpty(params)
    ? ""
    : `?${Object.keys(params)
        .map((key) => {
          if (typeof params[key] === "object") {
            return params[key]
              .map((item: string) => `${key}[]=${item}`)
              .join("&");
          }
          return `${key}=${params[key]}`;
        })
        .join("&")}`;
};
