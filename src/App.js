import React, { useState } from 'react';
import './App.css';
import Logo from './Logo';
import Form from './Form';
import { PackingList } from './PackingList';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Sock", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ]

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
    const confirmed = window.confirm("are you showr to delete all itemsjjjjjj")
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



export function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li className='flex items-center justify-center gap-2'>
      <input value={item.packed} type='checkbox' onChange={() => onToggleItems(item.id)} className='w-6 h-6  ' />
      <span className='text-[22px]' style={item.packed ? { textDecorationLine: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className='text-[15px]' onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats({items}) {
if(!items.length) return (
  <p className='bg-green-300 py-5 w-full flex items-center justify-center' >
    <em className='text-white text-[26px]'>Start adding some Items to your packing list 🚀</em>
    </p>
)

const numItems = items.length;
const numPaked = items.filter((item) => item.packed).length;
const percentage = Math.round((numPaked/numItems) * 100);

  return (
    <footer className='bg-green-300 py-5 w-full flex items-center justify-center '>
      <em className='text-white text-[26px]'>{percentage === 100 ? "You got everything! Ready to go ✈️" : 
       `💼 You have ${numItems}  items on your list, and you already picked ${numPaked} (${percentage}X%)`
      }
      </em>
    </footer>
  )
}
