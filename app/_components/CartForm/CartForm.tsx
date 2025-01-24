'use client'

import QuantityInput from '@/app/_components/QuantityInput/QuantityInput';
import { useState } from 'react';
import { ProductHydrated } from '@flotiq/flotiq-api-sdk';

type CartFormParams = {
  readonly dict: {
    readonly Quantity: string,
    readonly AddToCart: string,
  },
  readonly product: ProductHydrated,
}

export default function CartForm({ dict, product }: CartFormParams) {
  const [quantity, setQuantity] = useState(1);
  const [chosenSize, setChosenSize] = useState(product.sizes?.[0].size);

  return (
    <>
      <div className="flex space-x-2 mt-2">
        {product?.sizes?.map((size) => (
          <button
            type="button"
            key={size.id}
            className={
              `p-3 border border-gray rounded-md cursor-pointer min-w-[48px] text-center ${
                chosenSize === size.size && 'border-2'
              }`
            }
            onClick={() => setChosenSize(size.size)}
          >
            {size.size}
          </button>
        ))}
      </div>
      <div className="flex items-center text-xl font-light py-7 uppercase">
        {dict.Quantity}
        <QuantityInput quantity={quantity} setQuantity={setQuantity}/>
      </div>
      <div>
        <button
          className="inline-flex items-center leading-4 rounded-md bg-primary  hover:bg-primary-600
            transition-colors duration-200 ease-in-out focus:outline-none justify-center text-base font-light
            text-white border shadow-none uppercase px-5 py-4 mt-1"
          onClick={() => alert(`Added to cart, quantity: ${quantity}, size: ${chosenSize}`)}
        >
          {dict.AddToCart}
        </button>
      </div>
    </>
  )
}
