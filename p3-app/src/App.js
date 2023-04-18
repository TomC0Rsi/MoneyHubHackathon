import logo from './logo.svg';
import './App.css';
import { SendAmountPage } from './pages/SendAmountPage';
import { QRCodeImage } from './components/QRCode';
import { MoneyHubProvider } from './hooks/MoneyhubProvider';
import { config } from './config';

function App() {
  return (
    <MoneyHubProvider userConfig={config}>
      <div className='App'>
        <header className='App-header'>
          <QRCodeImage data="{ data }" />
        </header>
      </div>
    </MoneyHubProvider>
  );
}

export default App;
