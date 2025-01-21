import MenuItem from './components/menuItem';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';
function App() {
  const { addItem } = useOrder();
  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menu</h2>
          <div className='space-y-3 mt-10'>
            {menuItems.map((menu) => (
              <MenuItem key={menu.id} menu={menu} addItem={addItem}></MenuItem>
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
