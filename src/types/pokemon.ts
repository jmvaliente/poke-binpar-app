import { ReactNode } from "react";

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
          next: string | null;
          previous: string | null;
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
  handleClick: () => void;
}

export interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

//region HEADER

export interface PaginationProps {
  pokemons: PokemonResponse;
  handleSetUrl: (url: string) => void;
}
