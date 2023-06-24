import { useEffect, useState } from 'react';
import { PokemonThumbnail } from './components/PokemonThumbnail';
import { getPokemonList } from './helpers/getPokemonList';

export const App = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  useEffect(() => {
    getPokemonList().then((foundPokemons) => {
      setPokemons(foundPokemons);
    });
  }, []);

  //const pokemons = ['Pickachu', 'Bulbasour', 'Rinho', 'Other'];
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold leading-7 text-sky-900'>Pokemon Reference</h1>
      <hr className='my-8'/>
      <div className='grid grid-cols-4 gap-4'>
        {pokemons.map((pokemon) => (
          <PokemonThumbnail key={pokemon.name} pokemon={pokemon}/>
        ))}
      </div>
    </div>
  );
};
