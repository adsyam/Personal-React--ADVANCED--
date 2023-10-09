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
  const [step, setstep] = useState(0)
  const [count, setCount] = useState(1)
  // const Dates = Date().getUTCDate()
  const dates = new Date()
  dates.setDate(dates.getDate() + count)

  // const stepDown = () => setStep();
  // const stepUp = () => setStep((s) => s + 1);
  //   const countDown = () => setCount((c) => c - step)
  //   const countUp = () => setCount((c) => c + step)
  //   const stepValue = (e) => setstep(Number(e.target.value))
  //   const countValue = (e) => setCount(Number(e.target.value))

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
          value={step}
          onChange={(e) => setstep(Number(e.target.value))}
        />
        <span>step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        {count === 0
          ? ` Today is ${dates.toDateString()}`
          : "" && count > 0
          ? `${count} days from today is ${dates.toDateString()}`
          : `${Math.abs(count)} days ago is ${dates.toDateString()}`}
      </p>

      {count !== 0 && (
        <button
          onClick={(e) => {
            setCount(0)
            setstep(1)
          }}
        >
          RESET
        </button>
      )}
    </div>
  )
}
