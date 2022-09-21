import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function PlanetTable() {
  const { planets, setName, name } = useContext(PlanetContext);

  function nameFilter(data) {
    return data.filter((p) => p.name.toLowerCase().includes(name));
  }

  return (
    <div>
      <input
        onChange={ (n) => setName(n.target.value) }
        type="text"
        placeholder="Search Planet"
        data-testid="name-filter"
      />
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
          {name.length === 0 ? (planets.map((planet) => (
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
          ))) : (
            nameFilter(planets).map((planet) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;
