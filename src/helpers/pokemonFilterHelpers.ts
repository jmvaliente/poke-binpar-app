const base = process.env.API_BASE;

interface PokemonsFetch {
  pokemon_species: { name: string }[];
  pokemon: { pokemon: { name: string } }[];
}

const fetchPokemonData = async (endpoint: string, input: string) => {
  const response = await fetch(`${base}/${endpoint}/${input}`);
  const data = (await response.json()) as PokemonsFetch;
  return data;
};

const getPokemonByGeneration = async (generation: string) => {
  const dataGenerationJson = await fetchPokemonData("generation", generation);
  return dataGenerationJson.pokemon_species.map((pokemon) => ({
    name: pokemon.name,
  }));
};

const getPokemonByType = async (type: string) => {
  const dataTypeJson = await fetchPokemonData("type", type);
  return dataTypeJson.pokemon.map((pokemon) => ({
    name: pokemon.pokemon.name,
  }));
};

const getPokemonByGenerationAndType = async (
  generation: string,
  type: string,
) => {
  const pokemonByGeneration = await getPokemonByGeneration(generation);
  const pokemonByType = await getPokemonByType(type);

  return pokemonByGeneration.filter((pokemonGeneration) =>
    pokemonByType.some(
      (pokemonType) => pokemonType.name === pokemonGeneration.name,
    ),
  );
};

export {
  getPokemonByGenerationAndType,
  getPokemonByType,
  getPokemonByGeneration,
};
