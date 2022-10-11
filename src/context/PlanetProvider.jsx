import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetsContext';
import getPlanets from '../api/fetchPlanets';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('Maior que');
  const [value, setValue] = useState(0);
  const [filteredByNumericValues, setFilteredByNumericValues] = useState(
    [],
  );
  const selectFilters = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  useEffect(() => {
    const planetData = async () => {
      const data = await getPlanets();
      const data2 = data.results;
      const filteredData = data2.filter((planeta) => delete planeta.residents);
      setPlanets(filteredData);
    };
    planetData();
  }, []);

  return (
    <PlanetContext.Provider
      value={ {
        planets,
        name,
        setName,
        setPlanets,
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        filteredByNumericValues,
        setFilteredByNumericValues,
        selectFilters,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
