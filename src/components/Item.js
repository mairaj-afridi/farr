import React from 'react';

export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li className='flex items-center justify-center gap-2'>
      <input value={item.packed} type='checkbox' onChange={() => onToggleItems(item.id)} className='w-6 h-6  ' />
      <span className='text-[22px]' style={item.packed ? { textDecorationLine: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className='text-[15px]' onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
