import { PokemonStatCard } from "./components/PokemonStatCard";

export const PokemonDetailsPage = () => {
  return (
    <div className='p-6'>
      <h1 className='font-bold text-sky-800 text-xl'>Pikachu</h1>
      <hr className='mb-7' />
      <div className='flex flex-row'>
        <img
          className='p-5 w-3/12'
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'
          alt=''
        />
        <div className="grid grid-cols-3 gap-4">
          <PokemonStatCard title='Experience' value="90"/>
          <PokemonStatCard title='Experience' value="90"/>
          <PokemonStatCard title='Experience' value="90"/>
          <PokemonStatCard title='Experience' value="90"/>
          <PokemonStatCard title='Experience' value="90"/>
          <PokemonStatCard title='Experience' value="90"/>
        </div>
      </div>
    </div>
  );
};
