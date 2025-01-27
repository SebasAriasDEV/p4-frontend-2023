import { Link, useParams } from 'react-router-dom';
import { PokemonStatCard } from './components/PokemonStatCard';
import { useEffect, useState } from 'react';
import { getPokemonById } from './helpers/getPokemonById';

export const PokemonDetailsPage = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    getPokemonById(parseInt(pokemonId!)).then((foundPokemon) => {
      setPokemon(foundPokemon);
    });
  }, [pokemonId]);

  return (
    <div className='p-6'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className=' my-5 font-bold text-sky-800 text-5xl'>
          {pokemon?.name.toUpperCase()}
        </h1>
        <Link
          className='text-center bg-red-700 text-white font-bold p-4 rounded-md'
          to='/'
        >
          Go Back
        </Link>
      </div>
      <hr className='mb-7' />
      <div className='flex flex-row'>
        <img
          className='p-5 w-3/12 bg-gray-100 rounded-lg m-4'
          src={pokemon?.img}
          alt=''
        />
        <div className='grid grid-cols-3 gap-4'>
          <PokemonStatCard title='Hp' value={pokemon?.hp!} />
          <PokemonStatCard title='Attack' value={pokemon?.attack!} />
          <PokemonStatCard title='Defense' value={pokemon?.defense!} />
          <PokemonStatCard
            title='Special Attack'
            value={pokemon?.specialAttack!}
          />
          <PokemonStatCard
            title='Special Defense'
            value={pokemon?.specialDefence!}
          />
          <PokemonStatCard title='Speed' value={pokemon?.speed!} />
        </div>
      </div>
    </div>
  );
};
