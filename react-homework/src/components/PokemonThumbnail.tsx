type Props = {
  pokemon: IPokemon;
};

export const PokemonThumbnail = ({ pokemon }: Props) => {
  return (
    <div className='border rounded-md shadow-sm p-4 flex flex-row gap-5'>
      <img className="w-4/12 p-3" src={pokemon.img} alt='' />
      <div className='w-8/12 flex flex-col justify-center gap-2'>
        <h3 className='font-bold text-sky-800 text-xl'>
          {pokemon.name.toUpperCase()}
        </h3>
        <p>
          Aliqua minim id dolor enim nisi ipsum commodo laborum sint est
          proident duis enim quis. 
        </p>
        <button className='bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded'>
          See more
        </button>
      </div>
    </div>
  );
};
