import { useReducer } from 'react';
import {
  MenuItem,
  OrderContents,
  OrderTotal,
  TipPercentageForm,
} from './components';
import { menuItems } from './data/db';
import { initialState, orderReducer } from './reducers/order.reducer';

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className='py-5 bg-teal-400'>
        <h1 className='text-4xl font-black text-center'>
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className='grid py-20 mx-auto max-w-7xl md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menu</h2>
          <div className='mt-10 space-y-3'>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className='p-5 space-y-10 border-2 border-dashed rounded-lg border-slate-300'>
          {state.order.length > 0 ? (
            <>
              {' '}
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentageForm dispatch={dispatch} tip={state.tip} />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className='text-lg'>No hay elementos en el pedido</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
