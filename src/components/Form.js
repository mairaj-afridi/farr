import React, { useState } from 'react';

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

  export default Form