import { MenuItem, OrderItem } from '../types';

export type OrderActions =
  | { type: 'add-item'; payload: { item: MenuItem } }
  | { type: 'remove-item'; payload: { item: MenuItem['id'] } }
  | { type: 'place-order' }
  | { type: 'add-tip'; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

// const initialCart = (): OrderItem[] => {
//   const localStorageCart = localStorage.getItem('order');
//   return localStorageCart ? JSON.parse(localStorageCart) : [];
// };

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderActions,
) => {
  if (action.type === 'add-item') {
    let order: OrderItem[] = [];
    const itemExt = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id,
    );

    if (itemExt) {
      order = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      order = [...state.order, newItem];
    }

    return {
      ...state,
      order,
    };
  }

  if (action.type === 'remove-item') {
    const order = state.order.filter((item) => item.id !== action.payload.item);

    return {
      ...state,
      order,
    };
  }

  if (action.type === 'add-tip') {
    const tip = action.payload.value;
    return {
      ...state,
      tip,
    };
  }

  if (action.type === 'place-order') {
    return {
      order: [],
      tip: 0,
    };
  }

  return state;
};
