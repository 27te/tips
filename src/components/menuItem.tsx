import type { MenuItem } from '../types';
type MenuItemProps = {
  menu: MenuItem;
  addItem: () => void;
};
export default function MenuItem({ menu, addItem }: MenuItemProps) {
  return (
    <button
      className='border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200'
      onClick={() => addItem()}
    >
      <p>{menu.name}</p>
      <p className='font-bold'>${menu.price}</p>
    </button>
  );
}
