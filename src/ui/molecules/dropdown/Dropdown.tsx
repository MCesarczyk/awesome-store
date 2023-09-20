"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationLink } from "@/ui/atoms/navigationLink";
import { type NavigationLinkProps } from "@/types";

interface DropdownProps<T extends string> {
  options: NavigationLinkProps<T>[];
}

export const Dropdown = <T extends string>({options}:DropdownProps<T>) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);  

  const selected = options.find((option) => option.href === pathname) || options[0];
  const filteredOptions = options.filter((option) => option !== selected);

  return (
    <>
    <div onMouseEnter={open} onMouseLeave={close}>
      <NavigationLink {...selected} />
      <ul className={`${isOpen ? "absolute flex flex-col" : "hidden"}`}>
        {filteredOptions.map(option => <li key={option.href}>
          <NavigationLink {...option} />
        </li>)}
      </ul>
    </div>
    </>
  );
};
