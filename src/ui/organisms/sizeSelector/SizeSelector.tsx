'use client'

import { useState } from "react";
import { type ProductSize } from "@/types";

interface SizeSelectorProps {
  sizes: ProductSize[];
}

export const SizeSelector = ({sizes}:SizeSelectorProps) => {
  const [_size, setSize] = useState<string>("1");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSize(e.target.value);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Size</h3>
      <ul className="flex flex-wrap gap-2">
        {sizes.map(size => (
          <li key={size.id}>
            <label className="flex items-center gap-1">
              <input 
                type="radio" 
                name="size" 
                className="rounded-full w-4 h-4 bg-gray-700 text-white text-sm" 
                value={size.value} 
                checked={size.value === size.value}
                onChange={onChange}
              />
              {size.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};