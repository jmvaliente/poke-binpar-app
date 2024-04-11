import type { Pokemon } from "~/types/pokemon";
import Card from "./Card";
import { api } from "~/utils/api";

const CardContainer = ({ pokemon }: { pokemon: Pokemon }) => {
  const pokemonDetails = api.pokemon.byName.useQuery({ name: pokemon.name });
  if (pokemonDetails.isLoading) return null;
  if (pokemonDetails.isError) return <div>Error</div>;
  if (pokemonDetails.isSuccess) {
    return <Card pokemonDetails={pokemonDetails} />;
  }
};

export default CardContainer;
