import React from 'react';
import './App.css';
import PlanetTable from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <PlanetTable />
      <span>Hello, App!!!!!</span>

    </PlanetProvider>
  );
}

export default App;
