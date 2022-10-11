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
  const [selectColunm, setSelectColunm] = useState(selectFilters);
  const [select, setSelect] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  function handleFilters() {
    setFilteredByNumericValues([...filteredByNumericValues, select]);

    // const test = filteredByNumericValues
    //   .find((element) => element.column.includes(selectColunm));
    // console.log(test);
    console.log(selectColunm);
    console.log(select);
    console.log(filteredByNumericValues);
  }

  //   function handleExclusion(index) {
  //     const cloneFilters = [...filteredByNumericValues];
  //     cloneFilters.splice(index);
  //     setFilteredByNumericValues(cloneFilters);
  //   }

  function handleAllExclusions() {
    setFilteredByNumericValues([]);
    setSelectColunm(selectFilters);
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
        defaultValue={ selectColunm[0] }
        onChange={ (c) => setSelect({ ...select, column: c.target.value }) }
      >
        {selectColunm
          .filter(tratarOpcoes)
          .map((item) => (<option value={ item } key={ item }>{item}</option>))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ select.comparison }
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
            data-testid="filter"
          >
            <button
              type="button"
              onClick={ () => {
                const cloneFilters = [...filteredByNumericValues];
                cloneFilters.splice(i, 1);
                setFilteredByNumericValues(cloneFilters);
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
