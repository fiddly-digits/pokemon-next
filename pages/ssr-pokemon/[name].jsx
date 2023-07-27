import fetch from 'node-fetch';
import { useRouter } from 'next/router';

export default function PokemonDetail(props) {
  const router = useRouter();
  return (
    <>
      <img
        src={props.pokemon.sprites.other['official-artwork'].front_default}
        alt='pokemon-img'
      />
      <p>Name: {props.pokemon.name}</p>
      <p>name from params: {router.query?.name}</p>
    </>
  );
}

//solamente las paginas pueden usar server side props

export async function getServerSideProps(ctx) {
  console.log(ctx);
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${ctx.params.name}`
  ).then((res) => res.json());

  return {
    props: { pokemon }
  };
}
