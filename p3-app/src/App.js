import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import { MoneyHubProvider } from './hooks/MoneyhubProvider';
import { config } from './config';
import SendReceivePage from './pages/SendReceivePage';
import { ConfirmPage } from './pages/ConfirmPage';

import { AccountsPage } from './pages/AccountsPage';

import AccountReceivePage from './pages/AccountReceivePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MoneyHubProvider userConfig={config}>
      <BrowserRouter>
        <Routes>
          <Route path='receive' element={<AccountReceivePage />} />
          <Route path='send-amount' element={<SendAmountPage />} />
        </Routes>
      </BrowserRouter>
    </MoneyHubProvider>
  );
}

export default App;
