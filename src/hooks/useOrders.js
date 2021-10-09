import { useState, useEffect } from 'react';

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const cacheOrders = window.localStorage.getItem('orders');
    if (cacheOrders) {
      setOrders(JSON.parse(cacheOrders));
    }
  }, [])

  return { orders, setOrders }
}

export default useOrders;
