import { useCallback } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
  const subtotalAmount = useCallback(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order]);
  const totalAmount = useCallback(
    () => subtotalAmount() + tipAmount(),
    [tip, order]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propina:</h2>
        <p className="">
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
        </p>
        <p className="">
          Propina sugerida (10%):{" "}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>
        <p className="">
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button
        className="p-3 mt-10 w-full font-bold text-white uppercase bg-black disabled:opacity-10"
        disabled={totalAmount() === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
