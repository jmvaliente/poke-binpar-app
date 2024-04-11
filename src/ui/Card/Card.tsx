import Image from "next/image";
import type { pokemonDetailsProps } from "~/types/pokemon";

const Card = ({ pokemonDetails }: pokemonDetailsProps) => {
  const pokemon = pokemonDetails.data;
  return (
    <div className="w-auto">
      <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4">
        <div className="mb-2 flex flex-col items-center justify-center">
          <div className="mb-2 text-xl font-bold text-gray-900">
            {pokemon.name.toUpperCase()}
          </div>
          <Image
            src={pokemon.sprites.front_default}
            width={100}
            height={100}
            alt={pokemon.name}
          />
        </div>
        <div className="mt-2 flex gap-2">
          {pokemon.types.map((type) => {
            return (
              <div
                key={type.type.name}
                className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800"
              >
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
