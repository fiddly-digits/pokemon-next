export default function SSG(props) {
  return (
    <>
      <h1>Esta es una pagina renderizada estaticamente</h1>
      <p>Lo que significa que se genera al correr el build de este proyecto</p>
      <p>Name: {props.name}</p>
      {props.pokemon.map((poke) => {
        return <p key={`${poke.name}`}>Name: {poke.name}</p>;
      })}
    </>
  );
}

export async function getStaticProps() {
  const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/').then(
    (res) => res.json()
  );
  return {
    props: {
      name: 'Rob',
      pokemon: pokemon.results
    }
  };
}
