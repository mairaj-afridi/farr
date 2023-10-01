import React, { useState } from 'react';
import Item from './Item';

export default function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  // let sortedItems;
  // if(sortBy === 'input')setSortBy=items;
  // if()
  return (
    <div className='bg-orange-400 w-full gap-8 min-h-[450px] h-full justify-start items-center relative flex-col   px-8  flex '>
      <div className='flex w-full  '>
        <ul className='text-[30px] flex-row gap-10 flex  flex-wrap items-center'>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} onClearList={onClearList} />
          ))}
        </ul>
      </div>
      <div className='flex gap-6 md:flex-row flex-col absolute  bottom-10'>
        <select className='uppercase  rounded-lg border p-2 ' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sorry by input order </option>
          <option value="description">Sorry by description</option>
          <option value="packed">Sorry by packed status</option>
        </select>
        <button onClick={onClearList} className='border uppercase  bg-white p-2 rounded-md '>clear list</button>
      </div>
    </div>
  );
}
