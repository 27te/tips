import { Dispatch } from 'react';
import type { MenuItem } from '../types';
import { OrderActions } from '../reducers/order.reducer';
type MenuItemProps = {
  item: MenuItem;

  dispatch: Dispatch<OrderActions>;
};
export function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button
      className='flex justify-between w-full p-3 border-2 border-teal-400 hover:bg-teal-200'
      onClick={() => dispatch({ type: 'add-item', payload: { item: item } })}
    >
      <p>{item.name}</p>
      <p className='font-bold'>${item.price}</p>
    </button>
  );
}
