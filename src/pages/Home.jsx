import { useState } from "react";
import './Home.css'

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
        <h1>Counter</h1>
        <section id="container">
            <p>{count}</p>
            <div>
                <button className="count-btn" onClick={countUp}>+</button>
                <button className="count-btn" onClick={countDown}>-</button>
            </div>
            </section>
        </>

    )
} 