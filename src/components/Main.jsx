import React from 'react';

import MainTop from './MainTop';
import Content from './Content';
import useOrders from '../hooks/useOrders';

const Main = () => {
  const {orders, setOrders} = useOrders();

  return (
    <main className='main'>
      <div className='container'>
        <MainTop orders={orders} setOrders={setOrders} />
        <Content orders={orders} setOrders={setOrders} />
      </div>
    </main>
  )
};

export default Main;
