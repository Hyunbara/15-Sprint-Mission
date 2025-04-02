export const getProduct = () => {
  return fetch("https://panda-market-api.vercel.app/products")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};
