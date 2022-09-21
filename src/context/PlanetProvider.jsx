import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetsContext';
import getPlanets from '../api/fetchPlanets';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');

  useEffect(() => {
    const planetData = async () => {
      const data = await getPlanets();
      const data2 = data.results;
      const filteredData = data2.filter((planeta) => delete planeta.residents);
      setPlanets(filteredData);
      setLoading(false);
    };
    planetData();
  }, []);

  return (
    <PlanetContext.Provider value={ { planets, loading, name, setName } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
