export default function SSR(props) {
  return (
    <>
      <h1>Esta es una pagina renderizada en el servidor</h1>
      <p>Lo que significa que se genera al hacer una peticion al servidor</p>
      <p>Name: {props.name}</p>
      {props.pokemon.map((poke) => {
        return <p key={`${poke.name}`}>Name: {poke.name}</p>;
      })}
    </>
  );
}

export async function getServerSideProps() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/').then(
    (res) => res.json()
  );
  console.log(pokemon);
  return {
    props: {
      name: 'Rob',
      pokemon: pokemon.results
    }
  };
}
