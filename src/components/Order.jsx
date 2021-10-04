import React from 'react';

import Clock from '../../public/img/clock.svg';
import Calendar from '../../public/img/calendar.svg';

const Order = ({ day, orders, type }) => (
  <article className={ type === 'tomorrow' ? 'order tomorrow' : 'order'}>
    <figure className="order-icon">
      {
        type === 'tomorrow'
          ? <Calendar />
          : <Clock />
      }
    </figure>
    <h5>{ day }</h5>
    <p>{ orders } pedidos</p>
  </article>
)

export default Order;
