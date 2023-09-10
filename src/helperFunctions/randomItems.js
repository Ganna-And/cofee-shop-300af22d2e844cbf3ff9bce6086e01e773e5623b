// Your array of 6 products
const products = [
  { id: 1, title: "Classic Roast" },
  { id: 2, title: "Caramel Delight" },
  { id: 3, title: "Espresso Supreme" },
  { id: 4, title: "Nutty Bliss" },
  { id: 5, title: "French Vanilla Dream" },
  { id: 6, title: "Dark Roast" },
];

export function getRandomProducts(products, count) {

  const copy = [...products];
  const selectedProducts = [];

  while (selectedProducts.length < count) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    const selectedProduct = copy[randomIndex];
    selectedProducts.push(selectedProduct);
    copy.splice(randomIndex, 1);
  }

  return selectedProducts;
}



 