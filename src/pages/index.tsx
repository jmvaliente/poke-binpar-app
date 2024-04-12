import Head from "next/head";
import Pagination from "~/components/Pagination/Pagination";
import PokemonList from "~/components/PokemonList/PokemonList";
import Filter from "~/components/Filter/Filter";
import { useStore } from "~/store/pokemonStore";

import { api } from "~/utils/api";

export default function Home() {
  const storage = useStore((state) => state);
  let pokemonData;

  const extractData = () => {
    if (!storage.url) {
      pokemonData = api.pokemon.all.useQuery();
      return;
    }
    const endpoint = new URL(storage.url).pathname;

    if (endpoint.includes("generation")) {
      pokemonData = api.generation.url.useQuery({ url: storage.url });
    } else {
      pokemonData = api.pokemon.url.useQuery({ url: storage.url });
    }
  };

  extractData();
  return (
    <>
      <Head>
        <title>Pokemon App Binpar</title>
      </Head>
      <main className=" flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="flex w-full justify-center pt-10">
          {pokemonData && <Pagination pokemonData={pokemonData} />}
        </div>
        <div className="flex w-full justify-center pb-7 pt-3 ">
          <Filter />
        </div>
        <div className=" grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          {pokemonData && <PokemonList pokemonData={pokemonData} />}
        </div>
      </main>
    </>
  );
}
