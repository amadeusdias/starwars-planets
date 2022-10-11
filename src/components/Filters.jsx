import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetsContext';

function Filters() {
  const [valor, setValor] = useState(0);
  const {
    setName,
    filteredByNumericValues,
    setFilteredByNumericValues,
    selectFilters,
  } = useContext(PlanetContext);
  const [select, setSelect] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [selecF, setSelecF] = useState(selectFilters);

  function handleFilters() {
    setFilteredByNumericValues([...filteredByNumericValues, select]);
    console.log(select);
    console.log(filteredByNumericValues);
    console.log(valor);
  }

  function handleExclusion(index) {
    const cloneFilters = [...filteredByNumericValues];
    cloneFilters.splice(index, 1);
    setFilteredByNumericValues(cloneFilters);
  }

  function handleAllExclusions() {
    setFilteredByNumericValues([]);
  }

  const tratarOpcoes = (opcao) => !filteredByNumericValues
    .find((filtro) => opcao === filtro.column);

  return (
    <div>
      <input
        onChange={ (n) => setName(n.target.value) }
        type="text"
        placeholder="Search Planet"
        data-testid="name-filter"
      />

      <select
      // renderizar esse select usando MAP, ja que ele vai ter que ser dinamico, tendo opções excluidas a medida que sao usadas.
        data-testid="column-filter"
        onChange={ (c) => setSelect({ ...select, column: c.target.value }) }
      >
        {selecF
          .filter(tratarOpcoes)
          .map((item) => (<option value={ item } key={ item }>{item}</option>))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (n) => setSelect({ ...select, comparison: n.target.value }) }
      >
        <option selected value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        // onChange={ (v) => setSelect({ ...select, value: v.target.value }) }
        value={ valor }
        onChange={ (v) => {
          setValor(v.target.value);
          setSelect({ ...select, value: v.target.value });
        } }
      />
      <button
        type="button"
        onClick={ handleFilters }
        data-testid="button-filter"
      >
        Filter

      </button>
      <span>
        {filteredByNumericValues.map((f, i) => (
          <div
            key={ i }
            id={ `fil-${f.column}` }
            data-testid="filter"
          >
            <button
              type="button"
              onClick={ ({ target }) => {
                handleExclusion(target.parentElement.id.split('-')[1]);
              } }
            >
              {`Excluir filtro ${f.column}`}

            </button>
            <p>
              {f.column}
              {f.comparison}
              {f.value}
            </p>
          </div>
        ))}
        <button
          type="button"
          onClick={ handleAllExclusions }
          data-testid="button-remove-filters"
        >
          Excluir todos os filtros
        </button>

      </span>
    </div>
  );
}

export default Filters;
