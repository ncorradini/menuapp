import MenuState from './context/menu/MenuState';
import Routing from './routes/routes';

function App() {
  return (
    <MenuState>
      <Routing />
    </MenuState>
  );
}

export default App;
