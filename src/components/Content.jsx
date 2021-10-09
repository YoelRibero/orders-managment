import React from 'react';

import Order from './Order';
// import useOrders from '../hooks/useOrders';

const Content = ({ orders, setOrders }) => (
  <section className='content'>
    <h4>Pedidos</h4>
    <div className="orders">
      {
        orders.length === 0
          ? <p>No hay pedidos, agregá uno con el botón <span>+</span></p>
          : orders.map(order => (
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              description={order.description}
              phone={order.phone}
              date={order.date}
              id={order.id}
              setOrders={setOrders}
            />
          ))
      }
    </div>
  </section>
)

export default Content;
