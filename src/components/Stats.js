import React from 'react'

export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className='stats'>
        <em>Start adding some items to your packaging list 🧳</em>
      </footer>
    )
  const numItems = items.length
  const NumPacked = items.filter(item => item.packed).length
  const percent = Math.round((NumPacked / numItems) * 100)
  return (
    <footer className='stats'>
      <em>
        {percent === 100
          ? 'You got everything ! Ready to go ✈️'
          : `💼 You have ${numItems} items on your list; you already packed ${NumPacked} (${percent}%)`}
      </em>
    </footer>
  )
}
