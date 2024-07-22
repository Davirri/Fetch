import { useEffect, useState } from 'react';

const FakeStoreGallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="gallery">
      <h2 className='gallery-h2'>Fake Store Products</h2>
      <div className="items">
        {products.map(({ id, image, title, price }) => (
          <div key={id} className="item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeStoreGallery;
