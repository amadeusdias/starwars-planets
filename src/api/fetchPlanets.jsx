async function getPlanets() {
  const ENDPOINT = 'https://swapi.dev/api/planets';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}

export default getPlanets;
