import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-7 bg-cyan-700 p-4 text-center text-white">React Props and Hooks</h1>
      
      
      <div class="grid grid-rows-4 grid-flow-col gap-4">
      <div><Card itemName="Kids Jumpsuit" price="490.00" status="In stock" imgUrl="https://images.pexels.com/photos/1619772/pexels-photo-1619772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></div>
      <div><Card itemName="Mens Jumpsuit" price="1250.50" status="out of stock" imgUrl="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></div>
</div>
    
    </>
  );
}

export default App;
