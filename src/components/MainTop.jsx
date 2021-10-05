import React, { useState } from 'react';

// import VerticallyCenteredModal from './VerticallyCenteredModal';
import OrderForm from './OrderForm';
import PlusIcon from '../../public/img/plus.svg';

const MainTop = () => {
  const [formShow, setformShow] = useState(false);
  return (
    <section className='main-top'>
      <div className='main-top--title'>
        <h4>Que tengas un buen día de trabajo!</h4>
        <p>Los pedidos están esperando por vos</p>
      </div>
      <div className={formShow ? 'main-top--iconForm active' : 'main-top--iconForm'}>
        <button onClick={() => setformShow(!formShow)} type='button'>
          <figure>
            <PlusIcon />
          </figure>
        </button>
      </div>
      <OrderForm classForm={formShow ? 'form show' : 'form'} />
    </section>
  )
}

export default MainTop;
