import Image from "next/image";
import type { pokemonDetailsPropsPage } from "~/types/pokemon";
import KPIContainer from "~/ui/KPI/KPIContainer";

const DetailsPokemon = ({ pokemonData }: pokemonDetailsPropsPage) => {
  return (
    <div className="w-6/12 bg-white ">
      <div className="flex flex-col justify-between rounded bg-white p-4">
        <div className="mb-2 flex flex-col items-center justify-center">
          <div className="mb-2 text-xl font-bold text-gray-900">
            {pokemonData.name.toUpperCase()}
          </div>
          <div className="flex w-full items-center justify-around">
            <div>
              <Image
                src={pokemonData.sprites.front_default || "/placeholder.jpg"}
                width={100}
                height={100}
                alt={pokemonData.name}
              />
            </div>
            <div>
              <KPIContainer value="height">{pokemonData.height}</KPIContainer>
              <KPIContainer value="weight">{pokemonData.weight}</KPIContainer>
              <KPIContainer value="base experience">
                {pokemonData.base_experience}
              </KPIContainer>
              <p>
                <span className="font-semibold">Abilities:</span>{" "}
                {pokemonData.abilities.map((ability) => {
                  return (
                    <p key={ability.ability.name}>{ability.ability.name}</p>
                  );
                })}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Stats:</span>{" "}
                {pokemonData.stats.map((stat) => {
                  return (
                    <p key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          {pokemonData.types.map((type) => {
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

export default DetailsPokemon;
