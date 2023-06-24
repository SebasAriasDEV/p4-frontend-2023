export const getPokemonById = async (id: number): Promise<IPokemon> => {
  const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const responseDetails = await fetch(detailsUrl);
  const jsonDetails: any = await responseDetails.json();

  const { name, stats, sprites } = jsonDetails;
  const pokemonImage = sprites.other.dream_world.front_default;

  const pokemon: IPokemon = {
    id,
    name,
    img: pokemonImage,
    hp: stats[0].base_stat,
    attack: stats[1].base_stat,
    defense: stats[2].base_stat,
    specialAttack: stats[3].base_stat,
    specialDefence: stats[4].base_stat,
    speed: stats[5].base_stat,
  };

  return pokemon;
};
