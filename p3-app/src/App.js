import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import SendReceivePage from './pages/SendReceivePage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SendReceivePage />
        <SendAmountPage />
      </header>
    </div>
  );
}

export default App;
