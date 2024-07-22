export const BASE_URL = "http://localhost:8080";

const createUrl = (base: string, path: string) => `${base}${path}`;

export const getProducts = () => {
    const request =  new Request(createUrl(BASE_URL, "/products"), {
        method: "GET",
        credentials: "include"
      });

      return request
}