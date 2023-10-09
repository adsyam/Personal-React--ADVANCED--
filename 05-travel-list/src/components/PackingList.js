import { useState } from "react"
import Item from './Item'

export default function PackingList({ items, onDeleteItems, onToggleItems, setItems }) {
  const [sortBy, setSortBy] = useState("input")

  let sortedItems
  //   console.log(sortedItems)

  if (sortBy === "input") sortedItems = items
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want ot delete all items?"
    )
    if (confirmed) setItems([])
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          className="actions"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  )
}
