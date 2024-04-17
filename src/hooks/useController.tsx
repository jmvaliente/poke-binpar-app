import { useStore } from "~/store/pokemonStore";
import { api } from "~/utils/api";

const useController = () => {
  const storage = useStore((state) => state);
  const controller = {
    search: () =>
      api.evolution.byName.useQuery({
        name: storage.search,
      }),
    generationAndTypefilter: () =>
      api.filter.byTypeGeneration.useQuery({
        type: storage.type,
        generation: storage.generation,
      }),
    generationFilter: () =>
      api.filter.generationFilter.useQuery({
        generation: storage.generation,
      }),
    typeFilter: () =>
      api.filter.typeFilter.useQuery({
        type: storage.type,
      }),
    type: () => api.type.url.useQuery({ url: storage.url }),
    all: () => api.pokemon.all.useQuery(),
    url: () => api.pokemon.url.useQuery({ url: storage.url }),
  };

  const conditions = [
    { check: () => storage.search, action: controller.search },
    {
      check: () => storage.generation && storage.type,
      action: controller.generationAndTypefilter,
    },
    { check: () => storage.generation, action: controller.generationFilter },
    { check: () => storage.type, action: controller.typeFilter },
    { check: () => !storage.url, action: controller.all },
    { check: () => true, action: controller.url },
  ];

  const extractData = () => {
    for (const condition of conditions) {
      if (condition.check()) return condition.action();
    }
  };
  const result = extractData();
  return result;
};

export default useController;
