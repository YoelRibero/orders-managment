import React from 'react';

import Clock from '../../public/img/clock.svg';

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Setiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]

const Order = ({ name, description, price, phone, date, id, setOrders }) => {
  const newDate = new Date(date);
  const dateFormatter = `${newDate.getDate()} de ${MONTHS[newDate.getMonth()]} del ${newDate.getFullYear()}`;

  const handleClick = (orderId) => {
    const orders = window.localStorage.getItem('orders');
    const ordersFiltered = JSON.parse(orders).filter(order => order.id !== orderId);
    window.localStorage.setItem('orders', JSON.stringify(ordersFiltered));
    setOrders(ordersFiltered);
  }
  return (
    <article className='order'>
      <figure className="order-icon">
        <Clock />
      </figure>
      <div className="order-summary">
        <h5 className='order-name'>{ name }</h5>
        <p className='order-description'>{ description }</p>
        { phone && <small className='order-phone'>Tel: { phone }</small> }
        { date && <p className='order-date'>Fecha de entrega: <strong>{ dateFormatter }</strong></p> }
        <h6 className="order-price">${ price }</h6>
        <div className="order-actions">
          <button type='button' onClick={() => handleClick(id)}>Pedido entregado</button>
          <button type='button' onClick={() => handleClick(id)}>Cancelar Pedido</button>
        </div>
      </div>
    </article>
  )
}

export default Order;
