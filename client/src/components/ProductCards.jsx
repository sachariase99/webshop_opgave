import React, { useEffect, useState } from 'react';

const ProductCards = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4'>
        {data.map((product) => (
          <div key={product.id} className='border-black border-[1px] p-2 rounded '>
            <img src={product.imageUrl} alt={product.name} />
            <h3 className='text-center font-bold text-[80%]'>{product.name}</h3>
            <p className='text-[60%]'>Description: {product.description}</p>
            <p className='font-bold text-[80%] text-right'>Kr {product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductCards;
