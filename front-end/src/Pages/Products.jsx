import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import api from '../services/request';
import CardProduct from '../Components/ProductCard';

function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await api.get('/customer/products');
      // console.log(data.data);
      setProductsList(data.data);
    };
    getProductsData();
  }, []);

  return (
    <div>
      <Header
        array={ [{
          label: 'PRODUTOS',
          route: '/customer/products',
          aria: 'customer-products-button',
          name: 'customer-products-button',
          dataTestId: 'customer_products__element-navbar-link-products',
        },
        {
          label: 'MEUS PEDIDOS',
          route: '/customer/orders',
          aria: 'customer-orders-button',
          name: 'customer-orders-button',
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
        userName={ localStorage.getItem('userName') }
      />
      <h1> PRODUCTS </h1>
      { productsList.map((product) => (
        <CardProduct
          key={ product.name }
          price={ product.price }
          image={ product.urlImage }
          name={ product.name }
          id={ product.id }
        />
      )) }
    </div>
  );
}

export default Products;
