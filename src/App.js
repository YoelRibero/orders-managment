import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import IconPage from '../public/img/avatar.ico';

const App = () => (
  <>
    <Helmet>
      <title>Bettina App 👩‍🍳</title>
      <link rel='icon' type='image/png' sizes='32x32' href={IconPage} />
    </Helmet>
    <Header name='Bettina' />
    <Main />
    <Footer />
  </>
)

export default App;
