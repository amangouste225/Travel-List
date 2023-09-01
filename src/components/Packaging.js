import { useState } from 'react'
import Item from './Item'

export default function PackagingList({
  items,
  onDelete,
  ontoggleItem,
  clearList,
}) {
  const [sortBy, setSortby] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = items
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed))

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            ontoggleItem={ontoggleItem}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={e => setSortby(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>

        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  )
}
