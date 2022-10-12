import React from 'react';
import { getByTestId, getByText, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockData from './mock-data'

describe('Testando a aplicação', () => {

  // beforeEach(() => global.fetch = jest.fn(async () => ({
  //   json: async () => mockData,
  // })));

  it('Vefificando a existencia dos filtros', async () => {
    render(<App></App>);
    // act(() => expect(<App></App>))
    const nameInput = screen.getByTestId('name-filter');
    const columnInput = screen.getByTestId("column-filter");
    const comparisonInput = screen.getByTestId("comparison-filter");
    const valueInput = screen.getByTestId("value-filter")

    const filterButton = screen.getByTestId('button-filter')
    const excludeFiltersButton = screen.getByTestId('button-remove-filters')
    
    expect(nameInput).toBeInTheDocument()
    expect(columnInput).toBeInTheDocument()
    expect(comparisonInput).toBeInTheDocument()
    expect(valueInput).toBeInTheDocument()
    expect(filterButton).toBeInTheDocument()
    expect(excludeFiltersButton).toBeInTheDocument()
  })
})
