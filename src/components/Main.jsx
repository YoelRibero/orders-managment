import React from 'react';

import MainTop from './MainTop';
import Content from './Content';

const Main = () => (
  <main className='main'>
    <div className='container'>
      <MainTop />
      <Content />
    </div>
  </main>
);

export default Main;
