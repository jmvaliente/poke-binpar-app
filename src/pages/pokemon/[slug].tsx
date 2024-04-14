import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const Pokemon = () => {
  const router = useRouter();
  const pokemonDetails = api.pokemon.byName.useQuery({
    name: router.query.slug as string,
  });
  if (!pokemonDetails.isSuccess) return null;
  return (
    <>
      <Head>
        <title>{pokemonDetails.data.name}</title>
      </Head>
      <main className=" flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
};

export default Pokemon;
