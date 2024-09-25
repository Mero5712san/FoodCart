const convertData = (categories) => {
  const products = [];

  categories.forEach(category => {
    if (category.products && category.products.length > 0) {
      category.products.forEach(product => {
        product.product_variants.forEach(variant => {
          products.push({
            id: product.id,
            img: product.img_url,
            name: product.name,
            variant: variant.name,
            price: parseFloat(variant.price),
            categories: category.name + " " + (categories.find(c => c.id !== category.id) ? categories.find(c => c.id !== category.id).name : '')
          });
        });
      });
    }
  });

  return products;
};

export const fetchDataFromApi = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/products'); 
    const data = await response.json();

    const convertedProducts = convertData(data);

    // console.log(convertedProducts);
    return convertedProducts;
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};

fetchDataFromApi();

