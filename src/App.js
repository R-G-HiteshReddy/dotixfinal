import './App.css';
import { chakra } from '@chakra-ui/react';
import Home from './pages/home';
function App() {
  return (
    <chakra.div className="App" bg={'#fff'} margin={'auto'} w={'337px'} borderRadius={'30px'}>
      <Home/>
    </chakra.div>
  );
}

export default App;
