import { useState } from "react"
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
// import Item from './Item'
import Stats from './Stats'

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ]

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems(id) {
    // console.log(id)
    setItems(items.filter((item) => item.id !== id))
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  )
}








