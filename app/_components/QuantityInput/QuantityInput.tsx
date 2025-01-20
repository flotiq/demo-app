'use client'
import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export default function QuantityInput({}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex items-center md:items-stretch ml-8 font-roboto bg-light-gray ">
      <button
        type="button"
        className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
      >
        <MinusIcon className="h-5 w-5" aria-hidden="true"/>
      </button>
      <button
        type="button"
        className="py-1 px-4 text-lg font-light"
      >
        {quantity}
      </button>
      <button
        type="button"
        className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
        onClick={() => setQuantity(quantity + 1)}
      >
        <PlusIcon className="h-5 w-5" aria-hidden="true"/>
      </button>
    </div>
  );
}
