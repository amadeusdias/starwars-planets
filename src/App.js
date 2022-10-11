import React from 'react';
import './App.css';
import Filters from './components/Filters';
import PlanetTable from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Filters />
      <PlanetTable />
    </PlanetProvider>
  );
}

export default App;
