import React, { useEffect, useState } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  
  console.log(products); // Check the structure of the data in the console

  return (
    <div>
      <h1>Products List</h1>
      <div>
        {products.map((category) => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            {category.products.length > 0 ? (
              <ul>
                {category.products.map((product) => (
                  <li key={product.id}>
                    {product.name} - {product.img_url}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products available in this category.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
