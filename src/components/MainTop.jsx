import React from 'react';

import PlusIcon from '../../public/img/plus.svg';

const MainTop = () => (
  <section className='main-top'>
    <div className='main-top--title'>
      <h4>Que tengas un buen día de trabajo!</h4>
      <p>Los pedidos están esperando por vos</p>
    </div>
    <div className='main-top--iconForm'>
      <figure>
        <PlusIcon />
      </figure>
    </div>
  </section>
)

export default MainTop;
