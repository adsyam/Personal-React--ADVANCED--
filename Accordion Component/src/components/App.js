import { useState } from "react"
import "../index.css"

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
]

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  )
}

function Accordion() {
  const [currOpen, setIsOpen] = useState(null)

  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionList
          num={i}
          title={el.title}
          currOpen={currOpen}
          setIsOpen={setIsOpen}
          key={el.title}
        >
          {el.text}
        </AccordionList>
      ))}
    </div>
  )
}

function AccordionList({ num, title, text, setIsOpen, currOpen, children }) {
  //   const [isOpen, setIsOpen] = useState(false)

  // const nums = isOpen === num
  const isOpen = num === currOpen // i === currOpen

  function accordionToggle() {
    setIsOpen(num)
    if (isOpen === true) setIsOpen(false)
    // if (isOpen === false) setIsOpen(true)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={accordionToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}