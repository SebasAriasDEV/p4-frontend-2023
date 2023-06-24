type Props = {
  title: string;
  value: number;
};

export const PokemonStatCard = ({ title, value }: Props) => {
  return (
    <div className='text-center p-16 border rounded-md shadow-md'>
      <h4 className='text-zinc-500 mb-3'>{title}</h4>
      <p className='font-bold text-5xl'>{value}</p>
    </div>
  );
};
