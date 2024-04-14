import Head from "next/head";
import Pagination from "~/components/Pagination/Pagination";
import PokemonList from "~/components/PokemonList/PokemonList";
import Filter from "~/components/Filter/Filter";
import Search from "~/components/Search/Search";
import FilterType from "~/components/Filter/FilterType";
import useController from "~/utils/useController";

export default function Home() {
  const pokemonData = useController().data;

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
          <Filter />
          <FilterType />
        </div>
        <div className=" grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          {pokemonData && <PokemonList pokemonData={pokemonData} />}
        </div>
      </main>
    </>
  );
}
