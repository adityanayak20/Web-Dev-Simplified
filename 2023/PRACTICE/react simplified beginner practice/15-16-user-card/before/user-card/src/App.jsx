import "./App.css"
import { UserCard } from "./UserCard.jsx"
import user from "./user.json"

function App() {
  return (
    <>
      <UserCard {...user} />
    </>
  )
}

export default App
