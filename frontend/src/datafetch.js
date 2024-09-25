export const fetchDataFromApi = async () => {
  try {
    const response = await fetch('http://localhost:3000/products'); 
    const data = await response.json(); 

    const convertedProducts = convertData(data); 

    return convertedProducts; 
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};

const convertData = (categories) => {
  const products = [];

  categories.forEach(category => {
    if (category.products && category.products.length > 0) {
      category.products.forEach(product => {
        const variantCount = product.variants.length;
        const variantsLabel = `${variantCount} variant${variantCount > 1 ? 's' : ''}`;

        product.variants.forEach(variant => {
          products.push({
            id: product.id,
            img: product.img_url,
            name: product.name,
            variant: variantsLabel,  
            price: parseFloat(variant.price),
            categories: category.name  
          });
        });
      });
    }
  });

  return products;
};

// Call the API and use the converted data in your frontend
fetchDataFromApi().then((products) => {
  console.log(products); // You can map or display the products in your frontend
});
