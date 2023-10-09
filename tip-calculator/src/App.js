import { useState } from "react"

export default function App() {
  const [bill, setBill] = useState("")
  const [rating1, setRating1] = useState(0)
  const [rating2, setRating2] = useState(0)

  //   function tip() {
  //     return ((rating1 + rating2) / 100) * bill
  //   }

  const tip = ((rating1 + rating2) / 2 / 100) * bill
  //   console.log(rating1)
  //   console.log(rating2)
  //   console.log(tip)

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />
      <SelectService bill={bill} rating={rating1} onRating={setRating1}>
        How did you like the service?
      </SelectService>
      <SelectService bill={bill} rating={rating2} onRating={setRating2}>
        How did your friend like the service?
      </SelectService>
      <CalculateBill
        bill={bill}
        onBill={setBill}
        onRating1={setRating1}
        onRating2={setRating2}
        tip={tip}
      />
    </div>
  )
}

function Bill({ bill, onBill }) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBill(Number(e.target.value))}
        placeholder="Enter the bill"
      />
    </div>
  )
}
function SelectService({ rating, onRating, children }) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <div style={{ display: "flex", gap: "5px" }}>
        <label>{children}</label>
        <select
          value={rating}
          onChange={(e) => onRating(Number(e.target.value))}
          id="one"
        >
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
      </div>
    </div>
  )
}

function CalculateBill({ bill, onBill, onRating1, onRating2, tip }) {
  return (
    <div>
      {bill > 0 && (
        <>
          <h1>
            You pay ${bill + tip} (${bill} + ${tip} tip)
          </h1>
          <ResetBtn
            onBill={onBill}
            onRating1={onRating1}
            onRating2={onRating2}
          />
        </>
      )}
    </div>
  )
}

function ResetBtn({ onBill, onRating1, onRating2 }) {
  return (
    <>
      <button
        onClick={() => {
          onBill("")
          onRating1(0)
          onRating2(0)
        }}
      >
        Reset
      </button>
    </>
  )
}
