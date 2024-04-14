import type { PokemonResponse } from "~/types/pokemon";
import CardContainer from "~/ui/Card/CardContainer";
import { api } from "~/utils/api";

const Evolutions = ({ name }: { name: string }) => {
  const evolutions = api.evolution.byName.useQuery({
    name,
  }) as PokemonResponse;
  if (!evolutions.isSuccess) return null;
  const isSelected = (pokemonName: string) => pokemonName === name;
  return (
    <div className="flex w-full justify-center gap-1 pb-7 pt-3 ">
      <div className=" grid grid-cols-4 items-center gap-4 p-5">
        {evolutions.data?.results.map((pokemon) => (
          <CardContainer
            key={pokemon.name}
            pokemon={pokemon}
            selected={isSelected(pokemon.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Evolutions;
