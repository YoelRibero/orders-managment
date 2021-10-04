import React from 'react';

import Order from './Order';

const Content = () => (
  <section className='content'>
    <h4>Pedidos</h4>
    <div className="orders">
      <Order
        day='Hoy'
        orders='10'
        type='today'
      />
      <Order
        day='Mañana'
        orders='15'
        type='tomorrow'
      />
    </div>
  </section>
)

export default Content;
