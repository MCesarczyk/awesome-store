import { useState } from "react";
import { NavigationLink } from "@/ui/atoms/navigationLink";
import { type NavigationLinkProps } from "@/types";

interface DropdownProps<T extends string> {
  options: NavigationLinkProps<T>[];
  selected: NavigationLinkProps<T>;
}

export const Dropdown = <T extends string>({options,selected}:DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);  

  const filteredOptions = options.filter((option) => option.href !== selected.href);

  return (
    <>
    <div onMouseEnter={open} onMouseLeave={close}>
      <NavigationLink {...selected} />
      <ul className={`${isOpen ? "flex flex-col" : "hidden"}`}>
        {filteredOptions.map(option => <li key={option.href}>
          <NavigationLink {...option} />
        </li>)}
      </ul>
    </div>
    </>
  );
};
