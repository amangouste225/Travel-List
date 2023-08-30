import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDelete={handleDeleteItem}
        ontoggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  )
}

const Logo = () => {
  return <h1>⛱️ Far Away 🎒</h1>
}

const Form = ({ onAddItems }) => {
  const [description, setDesc] = useState('')
  const [quantity, setQuantity] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return
    const newItem = { description, quantity, packed: false, id: Date.now() }
    onAddItems(newItem)
    // Return to Initial State
    setDesc('')
    setQuantity('')
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😃 trip</h3>

      <select onChange={e => setQuantity(+e.target.value)} value={quantity}>
        {new Array(20)
          .fill()
          .map((_, i) => i + 1)
          .map(num => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={e => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

const PackagingList = ({ items, onDelete, ontoggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            ontoggleItem={ontoggleItem}
          />
        ))}
      </ul>
    </div>
  )
}

function Item({ item, onDelete, ontoggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        className='checkbox'
        value={item.packed}
        onChange={() => {
          ontoggleItem(item.id)
        }}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  )
}

const Stats = ({ items }) => {
  const NumPacked = items.filter(item => item.packed).length
  const percent = Math.round((NumPacked / items.length) * 100)
  return (
    <footer className='stats'>
      <em>
        {percent === 100
          ? 'You got everything ! Ready to go ✈️'
          : `💼 You have ${items.length} items on your list; you already packed ${NumPacked} (${percent}%)`}
      </em>
    </footer>
  )
}

export default App
