import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {isLoading, page, nbPages, handlePage} = useGlobalContext();
  return (
    <div className="btn-container">
      <button type='button'
      onClick={() => handlePage(-1)}
      disabled={isLoading}
      >
        prev
      </button>
      <p>{page + 1} of {nbPages}</p>
      <button type='button'
      onClick={() => handlePage(+1)}
      disabled={isLoading}
      >
        next
      </button>
    </div>
  )
}

export default Buttons
