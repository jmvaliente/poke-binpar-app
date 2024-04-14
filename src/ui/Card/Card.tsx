import Image from "next/image";
import Link from "next/link";
import type { pokemonDetailsProps } from "~/types/pokemon";

const Card = ({ pokemonDetails, selected }: pokemonDetailsProps) => {
  const pokemon = pokemonDetails.data;
  const isSelected = selected
    ? "border-blue-500 border-4"
    : "border-transparent border-4";
  return (
    <Link
      href={{
        pathname: "/pokemon/[slug]",
        query: { slug: pokemon.name },
      }}
    >
      <div className="w-auto">
        <div
          className={`${isSelected} flex flex-col justify-between rounded bg-white p-4`}
        >
          <div className="mb-2 flex flex-col items-center justify-center">
            <div className="mb-2 text-xl font-bold text-gray-900">
              {pokemon.name.toUpperCase()}
            </div>
            <Image
              src={pokemon.sprites.front_default || "/placeholder.jpg"}
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
    </Link>
  );
};

export default Card;
