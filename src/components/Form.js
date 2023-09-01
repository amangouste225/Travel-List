import React, { useState } from 'react'

export default function Form({ onAddItems }) {
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
