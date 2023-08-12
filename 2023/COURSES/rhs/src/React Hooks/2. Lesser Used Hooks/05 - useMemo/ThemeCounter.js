import React, { useState, useMemo, useEffect} from 'react'

export default function ThemeCounter() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => slowfunction(number), [number])
  const themeStyles = useMemo(() => {
    return {
      backgroundColor : dark ? 'black' : 'white',
      color : dark? 'white' : 'black',
    }
  }, [dark])

  useEffect(() => { console.log('Theme Changed') }, [themeStyles]);

  return (
    <>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowfunction(num) {
  console.log('Calling Slow function')
  for(let i = 0; i <= 100000000; i++) {}
  return num * 2
}
