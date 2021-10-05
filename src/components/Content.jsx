import React from 'react';

import Order from './Order';
import useOrders from '../hooks/useOrders';

const Content = () => {
  const { orders } = useOrders();
  return (
    <section className='content'>
      <h4>Pedidos</h4>
      <div className="orders">
        {
          orders.length === 0
            ? <p>No hay pedidos</p>
            : orders.map(order => (
              <Order
                key={order.name}
                name={order.name}
                price={order.price}
                description={order.description}
                phone={order.phone}
                date={order.date}
              />
            ))
        }
      </div>
    </section>
  )
}

export default Content;
