import type { MenuItem } from "../types";
type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
export function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="flex justify-between p-3 w-full border-2 border-teal-400 hover:bg-teal-200"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  );
}
