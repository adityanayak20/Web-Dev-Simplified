import { useState } from "react"

export function Count() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((prevCount) => prevCount + 1)
  }

  return <div onClick={handleClick}>Function Counter: {count}</div>
}
