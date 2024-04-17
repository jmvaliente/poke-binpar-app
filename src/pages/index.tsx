import Head from "next/head";
import Pagination from "~/components/Pagination/Pagination";
import PokemonList from "~/components/PokemonList/PokemonList";
import FilterGeneration from "~/components/Filter/FilterGeneration";
import Search from "~/components/Search/Search";
import FilterType from "~/components/Filter/FilterType";
import useController from "~/hooks/useController";

export default function Home() {
  const pokemonData = useController();
  return (
    <>
      <Head>
        <title>Pokemon App Binpar</title>
      </Head>
      <main className=" flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="flex w-full justify-center pt-10">
          <div className="inline-flex gap-1">
            <Search />
            {pokemonData && <Pagination pokemonData={pokemonData} />}
          </div>
        </div>
        <div className="flex w-full justify-center gap-1 pb-7 pt-3 ">
          <FilterGeneration />
          <FilterType />
        </div>
        {pokemonData && <PokemonList pokemonData={pokemonData} />}
      </main>
    </>
  );
}
