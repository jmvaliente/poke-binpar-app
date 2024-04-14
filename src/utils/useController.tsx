import { useStore } from "~/store/pokemonStore";
import { api } from "~/utils/api";

const useController = () => {
  const storage = useStore((state) => state);
  const controller = {
    search: () =>
      api.evolution.byName.useQuery({
        name: storage.search,
      }),
    type: () => api.type.url.useQuery({ url: storage.url }),
    generation: () => api.generation.url.useQuery({ url: storage.url }),
    all: () => api.pokemon.all.useQuery(),
    url: () => api.pokemon.url.useQuery({ url: storage.url }),
  };

  const conditions = [
    { check: () => storage.search, action: controller.search },
    { check: () => !storage.url, action: controller.all },
    { check: () => storage.url.includes("type"), action: controller.type },
    {
      check: () => storage.url.includes("generation"),
      action: controller.generation,
    },
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
