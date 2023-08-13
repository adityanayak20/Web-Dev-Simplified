import "./user.css"
import user from "./user.json"
import { UserCard } from "./UserCard.jsx"
import { UserCardClass } from "./UserCardClass.jsx"

export default function App() {
  const { name, age, phoneNumber, address } = user

  return (
    <>
      <UserCard
        name={name}
        age={age}
        phoneNumber={phoneNumber}
        address={address}
      />
      <br />
      <UserCardClass
        name={name}
        age={age}
        phoneNumber={phoneNumber}
        address={address}
      />
    </>
  )
}
