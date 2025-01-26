import { useState } from "react";

export default function Home() {
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
        <>
        <p>{count}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
        </>

    )
} 