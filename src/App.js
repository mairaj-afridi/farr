import React, { useState } from 'react';
import './App.css';

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
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <div className='bg-orange-300 w-full flex items-center justify-center'>
      <h1 className='text-red-700 text-[60px] uppercase font-extrabold  ' >🏝 Far Away 🧳 </h1>
    </div>
  )
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className='bg-green-900 w-full h-20 gap-4 flex items-center justify-center'>
      <h1 className='text-white text-[20px]' >What do you need for your 😍 trip? </h1>
      <select className='rounded-xl p-3 px-2' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input className='rounded-xl p-3' type='text' placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className='border-spacing-6 border rounded-xl p-3 text-white bg-green-500 '>add</button>
    </form>
  )
}

function PackingList({ items, onDeleteItem, onToggleItems,onClearList }) {
 const [sortBy, setSortBy] = useState("input"); 

// let sortedItems;
  
// if(sortBy === 'input')setSortBy=items;
// if()
 
  return (
    <div className='bg-orange-400 w-full gap-8 min-h-[450px] h-full justify-start items-center relative flex-col   px-8  flex '>
      <div className='flex w-full  '>
        <ul className='text-[30px] flex-row gap-10 flex  flex-wrap items-center' >
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} onClearList={onClearList} />
          ))}
        </ul>
      </div>
        <div className='flex gap-6 absolute  bottom-10' >
          <select className='uppercase  rounded-lg border p-2 ' value={sortBy} onChange={(e)=> setSortBy(e.target.value) }>
          <option value="input">Sorry by input order </option>
          <option value="description">Sorry by description</option>
          <option value="packed">Sorry by packed status</option>
          </select>
          <button onClick={onClearList}  className='border uppercase  bg-white p-2 rounded-md '>clear list</button>
        </div>
    </div>
  )
}

function Item({ item, onDeleteItem, onToggleItems }) {
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
