import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {handleSearch, query} = useGlobalContext();
  
  return <section>
    <form action="search" className="search-form" onSubmit={(e) => e.preventDefault()}>
    <h2>Search Hacker News</h2>
      <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)} />
    </form>
  </section>
}

export default SearchForm
