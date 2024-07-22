export const BASE_URL = "http://localhost:8080";

const createUrl = (base: string, path: string) => `${base}${path}`;

export const getProduct = (id: string) => {
    const request =  new Request(createUrl(BASE_URL,`/product/${id}`), {
        method: 'GET',
        headers: {'Content-type': 'application/json'},
        credentials: 'include',
    });

      return request
}