export const extractFilterId = (url: string) => {
  const urlSegments = url.split("/");
  const id = urlSegments.at(-2) ?? "";
  return id;
};
