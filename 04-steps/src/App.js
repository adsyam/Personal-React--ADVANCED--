import { useState } from "react"

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]

export default function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  //   const step = 1

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1) // safer than just s - 1
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1)
    // if (step < 3) setStep((s) => s + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {" "}
        {/* safer than just !isOpen */}
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            <p>{messages[step - 1]}</p>
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" color="white" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" color="white" onClick={handleNext}>
              Next<span>👉</span>
            </Button>

            {/* <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  )
}

function StepMessage({ step, children }) {
  return (
    <div>
      <p className="message">
        Step: {step}
        {children}
      </p>
    </div>
  )
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
