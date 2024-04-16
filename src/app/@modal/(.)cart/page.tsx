import Overlay from "./Overlay";

export default function ModalCart() {
  return <><Overlay/>
    <div className="absolute right-0 z-40 h-screen w-full max-w-sm bg-white text-black">
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
  </div></>;
}
