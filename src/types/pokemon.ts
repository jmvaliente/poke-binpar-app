//region POKEMON
export interface Pokemon {
  name: string;
}

export interface PokemonListProps {
  pokemons: {
    isLoading: boolean;
    isSuccess: boolean;
    data:
      | {
          results: {
            name: string;
          }[];
        }
      | undefined;
  };
}

export interface PokemonResponse {
  isLoading: boolean;
  isSuccess: boolean;
  data: { results: { name: string }[] } | undefined;
}

export interface pokemonDetailsProps {
  pokemonDetails: {
    data: {
      name: string;
      sprites: {
        front_default: string;
      };
      types: {
        type: {
          name: string;
        };
      }[];
    };
  };
}

//region BUTTON
export interface ButtonContainerProps {
  name: string;
}
