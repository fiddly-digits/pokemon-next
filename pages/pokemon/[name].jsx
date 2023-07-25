import fetch from 'node-fetch';
export default function PokemonDetail(props) {
  return (
    <>
      <image
        src={props.pokemon.sprites.other['official-artwork'].front_default}
        alt='pokemon-img'
      />
      <p>Name: {props.pokemon.name}</p>
    </>
  );
}
export async function getStaticPaths() {
  const json = await fetch('https://pokeapi.co/api/v2/pokemon/').then((res) =>
    res.json()
  );
  const paths = json.results.map((pokemon) => {
    return { params: { name: pokemon.name } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const pokemon = await fetch(
    `https://pokeapi.com/api/v2/pokemon/${params.name}`
  ).then((res) => res.json());

  return {
    props: { pokemon }
  };
}
