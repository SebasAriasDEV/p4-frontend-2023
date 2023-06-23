export const PokemonThumbnail = () => {
  return (
    <div className='border rounded-md shadow-sm p-4 flex flex-row gap-5'>
      <img
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
        alt=''
      />
      <div className="flex flex-col justify-center gap-2">
        <h3 className='font-bold text-sky-800 text-xl'>Pikachu</h3>
        <p>
          Aliqua minim id dolor enim nisi ipsum commodo laborum sint est
          proident duis enim quis. 
        </p>
      </div>
    </div>
  );
};
