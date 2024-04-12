import { create } from "zustand";

interface PokemonStore {
  filter: string;
  url: string;
  next: string | null;
  previous: string | null;
  updateUrl: (url: string) => void;
  updatePrevious: (previous: string) => void;
  updateNext: (next: string) => void;
}

export const useStore = create<PokemonStore>((set) => ({
  pokemonData: {},
  filter: "",
  url: "",
  next: null,
  previous: null,
  updateUrl: (url) => set((state) => ({ ...state, url })),
  updatePrevious: (previous) => set((state) => ({ ...state, previous })),
  updateNext: (next) => set((state) => ({ ...state, next })),
}));
