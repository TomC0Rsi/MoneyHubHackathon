import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import { MoneyHubProvider } from './hooks/MoneyhubProvider';
import { config } from './config';
import SendReceivePage from './pages/SendReceivePage';
import { ConfirmPage } from './pages/ConfirmPage';

import { AccountsPage } from './pages/AccountsPage';

import AccountReceivePage from './pages/AccountReceivePage';


function App() {
  return (
    <MoneyHubProvider userConfig={config}>
      <div className="App">
        <header className="App-header">
          <SendReceivePage />
          <AccountReceivePage />
          <SendAmountPage />
          <ConfirmPage />
          <AccountsPage />
        </header>
      </div>
    </MoneyHubProvider>
  );
}

export default App;
