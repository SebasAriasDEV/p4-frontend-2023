const getPokemonList = async (): Promise<IPokemon[]> => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const response = await fetch(url);
  const { results } = await response.json();

  console.log(results as IPokemon[]);
  return results as IPokemon[];
};

export { getPokemonList };
