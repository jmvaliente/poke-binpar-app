import Head from "next/head";
import { useRouter } from "next/router";
import DetailsPokemon from "~/components/DetailsPokemon/DetailsPokemon";
import Evolutions from "~/components/Evolutions/Evolutions";
import type { pokemonDetailsPage } from "~/types/pokemon";
import { api } from "~/utils/api";

const Pokemon = () => {
  const router = useRouter();
  const { slug } = router.query;
  const pokemonDetails = api.pokemon.byName.useQuery({
    name: slug as string,
  });
  if (!pokemonDetails.isSuccess) return null;
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <DetailsPokemon
          pokemonData={pokemonDetails.data as pokemonDetailsPage}
        />
        <Evolutions name={slug as string} />
      </main>
    </>
  );
};

export default Pokemon;
