import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import { MoneyHubProvider } from './hooks/MoneyhubProvider';
import { config } from './config';
import SendReceivePage from './pages/SendReceivePage';

function App() {
  return (
    <MoneyHubProvider userConfig={config}>
      <div className='App'>
        <header className='App-header'>
          <SendReceivePage />
          <SendAmountPage />
        </header>
      </div>
    </MoneyHubProvider>
  );
}

export default App;
