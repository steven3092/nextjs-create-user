export async function fetchData() {
  const response = await fetch(
    "https://mdn.github.io/dom-examples/fetch/fetch-json/products.json"
  );
  const products = await response.json();

  return products;
}
