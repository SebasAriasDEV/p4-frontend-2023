const getPokemonList = async (): Promise<IPokemon[]> => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';
  const response = await fetch(url);
  const { results } = await response.json();

  const pokemons: IPokemon[] = [];

  for (const pok of results) {
    const detailsUrl = pok.url;
    const responseDetails = await fetch(detailsUrl);
    const jsonDetails: any = await responseDetails.json();

    const { id, base_experience, height, weight, sprites } = jsonDetails;
    const pokemonImage = sprites.other.dream_world.front_default;

    const pokemon: IPokemon = {
      ...pok,
      img: pokemonImage,
    };

    pokemons.push(pokemon);
  }

  console.log(pokemons);
  
  return pokemons;
};

export { getPokemonList };
