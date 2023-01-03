import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { hits: stories, isLoading, removeStory } = useGlobalContext();

  if(isLoading) {
    return <div className="loading"></div>
  }
  return (
    <section className="stories">
      {stories.map((story) => {
        const {objectID: id, title, url, points, author, num_comments} = story;
        return (
          <div key={id} className="story">
            <h4>{title}</h4>
            <p className="info">{points} points by <span>{author} | </span> {num_comments} comments </p>
            <div>
              <a href={url} target="_blank" rel="noreferrer" className='read-link'>read more</a>
              <button type='button' className="remove-btn" onClick={() => removeStory(id)}>remove</button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Stories
