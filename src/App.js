import React, { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList  from './components/PackingList';
import { Stats } from './components/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  };
  
  // function to clear the list
  function handleClearList(){
    const confirmed = window.confirm("Are you showr to delete all items.")
    if (confirmed) setItems([]);
  }

  return (
    <div className='flex items-center justify-center flex-col '>
      <Logo/>
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}




