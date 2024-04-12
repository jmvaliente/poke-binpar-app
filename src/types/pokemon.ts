import type { ReactNode } from "react";

//region POKEMON
export interface Pokemon {
  name: string;
}

export interface PokemonListProps {
  pokemonData: {
    isLoading: boolean;
    isSuccess: boolean;
    data: {
      pokemon_species: { name: string }[];
      next: string | null;
      previous: string | null;
      results: {
        name: string;
      }[];
    };
  };
}

export interface PokemonResponse {
  isLoading: boolean;
  isSuccess: boolean;
  data:
    | {
        next: string | null;
        previous: string | null;
        results: {
          name: string;
        }[];
      }
    | undefined;
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
  url: string | null | undefined;
}

export interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
  disabled: boolean;
}

//region HEADER

export interface PaginationProps {
  pokemonData: PokemonResponse;
}

export interface SelectContainerProps {
  generation: {
    results: {
      name: string;
      url: string;
    }[];
  };
}

export interface generationResults {
  results: {
    name: string;
    url: string;
  }[];
}

export interface SelectProps {
  generation: {
    name: string;
    url: string;
  };
}
