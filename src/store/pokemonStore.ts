import { create } from "zustand";

interface PokemonStore {
  generation: string;
  type: string;
  url: string;
  search: string;
  updateUrl: (url: string) => void;
  updateSearch: (search: string) => void;
  updateGeneration: (generation: string) => void;
  updateType: (type: string) => void;
}

export const useStore = create<PokemonStore>((set) => ({
  generation: "",
  type: "",
  url: "",
  search: "",
  updateUrl: (url) => set((state) => ({ ...state, url })),
  updateSearch: (search) => set(() => ({ search, url: "" })),
  updateGeneration: (generation) => set(() => ({ generation })),
  updateType: (type) => set(() => ({ type })),
}));
