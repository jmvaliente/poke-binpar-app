import type { ChainType } from "~/types/pokemon";

export const extractEvolutions = (chain: ChainType): { name: string }[] => {
  const evolutions = [];
  if (chain.evolves_to.length === 0) {
    return [{ name: chain.species.name }];
  }

  for (const evolution of chain.evolves_to) {
    evolutions.push(
      { name: chain.species.name },
      ...extractEvolutions(evolution as unknown as ChainType),
    );
  }

  return evolutions as { name: string }[];
};
