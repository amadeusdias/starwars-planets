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
  const [selecF] = useState(selectFilters);

  function handleFilters() {
    setFilteredByNumericValues([...filteredByNumericValues, select]);
    console.log(select);
    console.log(filteredByNumericValues);
    console.log(valor);
  }

  //   const filterData = (linha) => {
  //     const bool = [];
  //     filteredByNumericValues.forEach((filt) => {
  //       switch (filt.comparison) {
  //       case 'maior que':
  //         bool.push(Number(linha[filt.column]) > Number(filt.value));
  //         break;

  //       case 'menor que':
  //         bool.push(Number(linha[filt.column]) < Number(filt.value));
  //         break;

  //       case 'igual':
  //         bool.push(Number(linha[filt.column]) === Number(filt.value));
  //         break;
  //       default:
  //         return true;
  //       }
  //     });
  //     return bool.every(((el) => el));
  //   };

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
    </div>
  );
}

export default Filters;
