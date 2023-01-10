export const getAllProducts = async () => {
  const res = await fetch("http://localhost:5077/product/all");
  const data = await res.json();
  return data;
};

export const createProduct = async (product) => {
  info = {
    name: product.name,
    category: product.category,
    manufacturer: product.manufacturer,
    stock: product.stock,
    price: product.price,
  };

  const res = await fetch(`http://localhost:5077/product/${product.name}`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(info),
  });

  const data = await res.json();
  return data;
};
