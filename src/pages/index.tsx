import Head from "next/head";
import Pagination from "~/components/Pagination/Pagination";
import PokemonList from "~/components/PokemonList/PokemonList";
import { useState } from "react";

import { api } from "~/utils/api";

export default function Home() {
  const [url, setUrl] = useState("");
  const pokemons = api.pokemon.url.useQuery({ url: url });

  const handleSetUrl = (url: string) => setUrl(url);

  return (
    <>
      <Head>
        <title>Pokemon App Binpar</title>
      </Head>
      <main className=" flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="flex w-full justify-center p-10">
          <Pagination pokemons={pokemons} handleSetUrl={handleSetUrl} />
        </div>
        <div className=" grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          <PokemonList pokemons={pokemons} />;
        </div>
      </main>
    </>
  );
}
