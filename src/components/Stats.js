import React from 'react';

export function Stats({ items }) {
  if (!items.length) return (
    <p className='bg-green-300 py-5 w-full flex items-center justify-center'>
      <em className='text-white text-[20px] text-center sm:text-[26px]'>Start adding some Items to your packing list 🚀</em>
    </p>
  );

  const numItems = items.length;
  const numPaked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPaked / numItems) * 100);

  return (
    <footer className='bg-green-300 py-5 w-full flex items-center justify-center '>
      <em className='text-white text-[20px] text-center sm:text-[26px]'>{percentage === 100 ? "You got everything! Ready to go ✈️" :
        `💼 You have ${numItems}  items on your list, and you already picked ${numPaked} (${percentage}X%)`}
      </em>
    </footer>
  );
}
