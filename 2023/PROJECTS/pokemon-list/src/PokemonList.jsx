export function PokemonList({pokemons}) {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return <div key={crypto.randomUUID()}>{pokemon.name}</div>
      })}
    </div>
  )
}
