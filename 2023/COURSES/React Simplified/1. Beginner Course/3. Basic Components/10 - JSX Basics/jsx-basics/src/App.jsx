// export default function App() {
//   return (
//     <div className="large" id="largeDiv">
//       Hi
//     </div>
//   )
// }

export default function App() {
  const myCustomLabel = <label htmlFor="inputId"> Count </label>

  return (
    <>
      {myCustomLabel}
      <input type="number" id="inputId" defaultValue={3} />
    </>
  )
}
