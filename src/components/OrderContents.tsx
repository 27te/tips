import { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers/index";
type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};
export function OrderContents({ order, removeItem }: OrderContentProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="mt-10 space-y-3">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-3 w-full border-t border-slate-300 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="w-8 h-8 font-black text-white bg-red-600 rounded-full"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
