import React, { useState} from 'react'
import useNewsSearch from './useNewsSearch'

export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  
  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

   const {
    news,
    hasMore,
    loading,
    error
   } = useNewsSearch(query, pageNumber)

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {news.map(n => {
        return <>
                <div key={query}> {n} </div>
                <br/>
               </> 
      })}
      <div>{loading && '...Loading'}</div>
      <div>{error && 'Error'}</div>
    </>
  )
}

