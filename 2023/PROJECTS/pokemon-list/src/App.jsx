import { useState, useEffect } from "react"
import { PokemonList } from "./PokemonList"
import { Pagination } from "./Pagination"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  )
  const [previousPageUrl, setPreviousPageUrl] = useState()
  const [nextPageUrl, setNextPageUrl] = useState()

  useEffect(() => {
    setIsLoading(true)
    const controller = new AbortController()
    fetch(currentPageUrl, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setPreviousPageUrl(data.previous)
        setNextPageUrl(data.next)
        setPokemons(data.results)
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [currentPageUrl])

  function gotoPreviousPage() {
    setCurrentPageUrl(previousPageUrl)
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  return (
    <>
      {isLoading ? <h2>Loading...</h2> : <PokemonList pokemons={pokemons} />}
      <Pagination
        gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
      />
    </>
  )
}

export default App
