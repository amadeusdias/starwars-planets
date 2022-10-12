import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function PlanetTable() {
  const {
    planets,
    name,
    filteredByNumericValues,
  } = useContext(PlanetContext);

  function nameFilter(data) {
    return data.filter((p) => p.name.toLowerCase().includes(name));
  }

  const filterData = (linha) => {
    const bool = [];
    filteredByNumericValues.forEach((filt) => {
      switch (filt.comparison) {
      case 'maior que':
        bool.push(Number(linha[filt.column]) > Number(filt.value));
        break;

      case 'menor que':
        bool.push(Number(linha[filt.column]) < Number(filt.value));
        break;

      default:
        bool.push(Number(linha[filt.column]) === Number(filt.value));
        break;
      }
    });
    return bool.every(((el) => el));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Orbital Period</th>
            <th>Climate</th>
            <th>Diameter</th>
            <th>Gravity</th>
            <th>Films</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Rotation Period</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {nameFilter(planets).filter(filterData).map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.population}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.climate}</td>
              <td>{planet.diameter}</td>
              <td>{planet.gravity}</td>
              <td>{planet.films}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;
