import NavBar from './Components/navbar';
import Counters from './Components/counters';
import './App.css';
import Counter from './Components/counter';
import React, { Fragment } from 'react';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
