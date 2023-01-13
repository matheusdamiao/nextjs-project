export const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:5077/product/all");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Ocorreu um erro do tipo ${error}`);
  }
};

export const createProduct = async (product) => {
  let info = {
    id: product.id,
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
  console.log(data);
  return data;
};

export const updateProduct = async (product, oldId) => {
  let newProduct = {
    id: product.id,
    name: product.name,
    category: product.category,
    manufacturer: product.manufacturer,
    stock: product.stock,
    price: product.price,
  };

  const res = await fetch(
    `http://localhost:5077/product/${oldId}/${product.name}`,
    {
      method: "PUT",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(newProduct),
    }
  );

  const data = await res.status;
  return data;
};

export const deleteProduct = async (id) => {
  const res = await fetch(`http://localhost:5077/product/${id}/`, {
    method: "DELETE",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });

  const status = res.status;
  return status;
};
