import React from 'react';
import { getByTestId, getByText, render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mockData from './mock-data'

describe('Testando a aplicação', () => {

  beforeEach(() => global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData)
  }));

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

  it('Verifica se a tabela é renderizada com todas as categorias', async () => {
    render(<App />)
    
    await waitFor(() => {
      const colunas = screen.getAllByRole('row');
      expect(colunas).toHaveLength(11)
    })

  })

  it('Verifica se é possivel filtrar por nome', async () => {
    render(<App />)

    const nameInput = screen.getByTestId('name-filter');
    userEvent.type(nameInput, 'h' );

    await waitFor(() => {
      const planetHoth = screen.getByText(/Hoth/i);
      const planetDagobah = screen.getByText(/Dagobah/i)
      expect(planetHoth).toBeInTheDocument();
      expect(planetDagobah).toBeInTheDocument()
    })

  })
})
