import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetsContext';

function PlanetTable() {
  const {
    planets,
    // setName,
    name,
    // column, setColumn,
    // comparison, setComparison,
    // value, setValue,
    filteredByNumericValues,
    // setFilteredByNumericValues,
    // selectFilters,
  } = useContext(PlanetContext);
  // const [filtros, setFiltros] = ([]);
  // const [selecF, setSelecF] = useState(selectFilters);
  // const [doit, setDoit] = useState(false);

  // const render = doit ? filtros : planets;

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

      case 'igual a':
        bool.push(Number(linha[filt.column]) === Number(filt.value));
        break;
      default:
        return true;
      }
    });
    return bool.every(((el) => el));
  };

  return (
    <div>
      {/* <input
        onChange={ (n) => setName(n.target.value) }
        type="text"
        placeholder="Search Planet"
        data-testid="name-filter"
      />

      <select
      // renderizar esse select usando MAP, ja que ele vai ter que ser dinamico, tendo opções excluidas a medida que sao usadas.
        data-testid="column-filter"
        onChange={ (c) => setColumn(c.target.value) }
        value={ column }
      >
        {selecF
          .map((item) => (<option value={ item } key={ item }>{item}</option>))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (n) => setComparison(n.target.value) }
        value={ comparison }
      >
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option selected value="igual a">Igual a</option>
      </select>
      <input
        type="number"
        placeholder="number"
        value={ value }
        data-testid="value-filter"
        onChange={ (v) => setValue(v.target.value) }
      />
      <button
        type="button"
        onClick={ handleFilters }
        data-testid="button-filter"
      >
        Filter

      </button> */}
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
