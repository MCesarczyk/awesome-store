'use client'

import { useState } from "react";
import { type ProductColor } from "@/types";

interface ColorSelectorProps {
  colors: ProductColor[];
}

export const ColorSelector = ({colors}:ColorSelectorProps) => {
  const [_color, setColor] = useState<string>("#8E0000");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setColor(e.target.value);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">Color</h3>
      <ul className="flex flex-wrap gap-2">
        {colors.map(size => (
          <li key={size.id}>
            <label className="flex items-center gap-1" style={{color: size.value}}>
              <input 
                type="radio" 
                name="size" 
                className="rounded-full w-4 h-4 bg-gray-700 text-white text-sm" 
                style={{color: size.value}}
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