import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import SendReceivePage from './pages/SendReceivePage';
import { ConfirmPage } from './pages/ConfirmPage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SendReceivePage />
        <SendAmountPage />
        <ConfirmPage />
      </header>
    </div>
  );
}

export default App;
