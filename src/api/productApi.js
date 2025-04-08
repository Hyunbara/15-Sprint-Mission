export const getProducts = async (query = "") => {
  const response = await fetch(`https://panda-market-api.vercel.app/products${query}`);
  const data = await response.json();
  return data;
};
