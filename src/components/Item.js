import React from 'react'

export default function Item({ item, onDelete, ontoggleItem }) {
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
