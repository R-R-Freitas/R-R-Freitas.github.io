import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import 'App.css';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={ <Main /> } />
      </Routes>
    );
  }
}

export default App;
