import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';

// import useOrders from '../hooks/useOrders';

const INITIAL_VALUE_FORM = {
  name: '',
  phone: '',
  price: '',
  description: '',
  date: '',
  id: '',
}

const OrderForm = ({ classForm, orders, setOrders }) => {
  const [submitForm, setSubmitForm] = useState(false);
  return (
    <Formik
    initialValues={INITIAL_VALUE_FORM}
      onSubmit={(values, { resetForm }) => {
        values.id = uuidv4();
        const newOrders = [...orders, values];
        window.localStorage.setItem('orders', JSON.stringify(newOrders));
        setOrders(newOrders);
        setSubmitForm(true);
        resetForm();
        setTimeout(() => {
          setSubmitForm(false)
        }, 3000)
      }}
    >
      {() => (
        <>
          <Form className={ classForm }>
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <Field
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Teléfono</label>
              <Field
                type="number"
                id="phone"
                name="phone"
              />
            </div>
            <div className="form-field">
              <label htmlFor="date">Fecha de entrega</label>
              <Field
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div className="form-field">
              <label htmlFor="price">Precio del pedido</label>
              <Field
                type="number"
                id="price"
                name="price"
                required
              />
            </div>
            <div className="form-field textarea">
              <label htmlFor="description">Descripción del pedido</label>
              <Field
                as='textarea'
                id='description'
                name='description'
                required
              />
            </div>
            <div className="form-action">
              <button type='submit'>Confirmar pedido</button>
            </div>
          </Form>
          {
            submitForm && (
              <div className="form-message">
                    <p>El pedido se realizó con éxito!</p>
              </div>
            )
          }
        </>
      )}
    </Formik>
  )
};

export default OrderForm;
