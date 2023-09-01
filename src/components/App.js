import React, { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackagingList from './Packaging'
import { Stats } from './Stats'

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

  function clearList() {
    const confirm = window.confirm('Are you sure you want to delete all items')

    if (confirm) setItems([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDelete={handleDeleteItem}
        clearList={clearList}
        ontoggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
