import { create } from "zustand";

interface PokemonStore {
  filter: string;
  url: string;
  search: string;
  updateUrl: (url: string) => void;
  updateFilter: (url: string, type: string) => void;
  updateSearch: (search: string) => void;
}

export const useStore = create<PokemonStore>((set) => ({
  filter: "",
  url: "",
  search: "",
  updateUrl: (url) => set((state) => ({ ...state, url })),
  updateFilter: (url, filter) => set(() => ({ url, filter })),
  updateSearch: (search) => set(() => ({ filter: "", search, url: "" })),
}));
