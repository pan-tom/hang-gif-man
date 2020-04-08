import React from 'react';

import Board from './components/Board';
import Header from './components/Header';
import Layout from './components/Layout';

const App = () => (
  <Layout>
    <Header />
    <Board />
  </Layout>
);

export default App;
