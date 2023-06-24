import { Link } from "react-router-dom";

type Props = {
  pokemon: IPokemon;
};

export const PokemonThumbnail = ({ pokemon }: Props) => {
  return (
    <div className='border rounded-md shadow-sm p-4 flex flex-row gap-5'>
      <img className="w-6/12 p-3" src={pokemon.img} alt='' />
      <div className='w-6/12 flex flex-col justify-center gap-2'>
        <h3 className='font-bold text-sky-800 text-xl'>
          {pokemon.name.toUpperCase()}
        </h3>

        <Link to={`pokemons/${pokemon.id}`} className=' text-center bg-sky-800 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded'>
          See more
        </Link>
      </div>
    </div>
  );
};
