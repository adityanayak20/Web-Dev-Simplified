import { useState } from "react"

export function FunctionComponent() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge(age - 1)}>-</button>
      <span>{age}</span>
      <button onClick={() => setAge(age + 1)}>+</button>
      <br />
      <br />
      <span>
        My name is {name} and I am {age} years old
      </span>
    </>
  )
}
