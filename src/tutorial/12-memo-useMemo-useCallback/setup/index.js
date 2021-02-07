import React, { useState, useEffect } from 'react';
import { useFetch } from '../../9-custom-hooks/setup/2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log('hello');
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) total = price;
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2 style={{ marginTop: '3rem' }}>
        Most Expensive : ${calculateMostExpensive(products)}
      </h2>
      <BigList products={products} />
    </>
  );
};

const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log('Call');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;
