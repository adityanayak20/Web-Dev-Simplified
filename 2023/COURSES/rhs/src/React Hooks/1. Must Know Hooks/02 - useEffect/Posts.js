import React, {useState, useEffect} from 'react';

export default function Posts() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType])

  useEffect(() => {
    window.addEventListener('resize', () => {setWindowWidth(window.innerWidth)})
    return () => {
        window.removeEventListener('resize', () => {setWindowWidth(window.innerWidth)})
    }
  })

  return (
    <>
      <div>
      <div>Window Width {windowWidth}</div>
      <br/>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
} 