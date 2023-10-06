import { useState } from "react"
import "./index.css"

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [slider, setSlider] = useState(1)
  const [count, setCount] = useState(1)
  // const Dates = Date().getUTCDate()
  const dates = new Date()
  dates.setDate(dates.getDate() + count)

  // const stepDown = () => setStep();
  // const stepUp = () => setStep((s) => s + 1);
  const countDown = () => setCount((c) => c - slider)
  const countUp = () => setCount((c) => c + slider)
  const sliderValue = (e) => setSlider(Number(e.target.value))
  const countValue = (e) => setCount(Number(e.target.value))

  // function stepUp() {
  //   setStep((s) => s + 1);
  // }
  // function stepDown() {
  //   setStep((s) => s - 1);
  // }
  // function countUp() {
  //   setCount((c) => c + step);
  // }
  // function countDown() {
  //   setCount((c) => c - step);
  // }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={slider}
          onChange={sliderValue}
        />
        <span>{slider}</span>
      </div>
      <div>
        <button onClick={countDown}>-</button>
        <input value={count} onChange={countValue} />
        <button onClick={countUp}>+</button>
      </div>

      <p>
        {count === 0
          ? ` Today is ${dates.toDateString()}`
          : "" && count > 0
          ? `${count} days from today is ${dates.toDateString()}`
          : `${Math.abs(count)} days ago is ${dates.toDateString()}`}
      </p>
    </div>
  )
}
