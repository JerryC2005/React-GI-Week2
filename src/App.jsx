import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function countUp() {
    setCount(count + 1)
  }
  console.log(count);
  console.log(setCount);

  function countDown() {
    setCount(count - 1)
  }

  return (
    <div>
        <p>{count}</p>
        <button onClick={countUp}>
        +</button>
        <button onClick={countDown}>-</button>
    </div>
  )
}

export default App
