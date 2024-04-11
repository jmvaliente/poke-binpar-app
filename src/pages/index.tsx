import Head from "next/head";
import PokemonList from "~/components/PokemonList/PokemonList";
import type { PokemonResponse } from "~/types/pokemon";

import { api } from "~/utils/api";

export default function Home() {
  const pokemons: PokemonResponse = api.pokemon.all.useQuery();

  return (
    <>
      <Head>
        <title>Pokemon App Binpar</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className=" grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          <PokemonList pokemons={pokemons} />;
        </div>
      </main>
    </>
  );
}
