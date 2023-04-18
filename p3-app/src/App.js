import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import { MoneyHubProvider } from './hooks/MoneyhubProvider';
import { config } from './config';
import SendReceivePage from './pages/SendReceivePage';
import { ConfirmPage } from './pages/ConfirmPage';
import { AccountsPage } from './pages/AccountsPage';

function App() {
  return (
    <MoneyHubProvider userConfig={config}>
      <div className='App'>
        <header className='App-header'>
          <SendReceivePage />
          <SendAmountPage />
          <ConfirmPage />
          <AccountsPage />
        </header>
      </div>
    </MoneyHubProvider>
  );
}

export default App;
