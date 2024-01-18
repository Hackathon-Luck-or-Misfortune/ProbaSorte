import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Amulets from './pages/Dashboard/Amulets';
import Statistic from './pages/Dashboard/Statistic';
import whiteLogo from './assets/logo/logo-white.svg';
import qrcode from './assets/images/qrcode.png';
import { BalanceProvider } from './context/balance';
import FAQ from './pages/FAQ';

export default function Routes() {
  return (
    <>
      <div className="max-sm:hidden bg-blue_main flex flex-col w-full min-h-screen justify-center items-center text-white">
        <img src={whiteLogo} alt="logo" className="h-auto w-64" />
        <div className="bg-white rounded-lg mt-8 w-60 overflow-hidden">
          <img src={qrcode} alt="QRCODE" className="w-full h-auto" />
        </div>
        <h2 className="mt-8">Acesse nosso site através de seu smartphone</h2>
      </div>
      <div className="sm:hidden min-h-screen flex flex-col bg-white">
        <BalanceProvider>
          <Switch>
            <Route exact path="/" Component={Home} />
            <Route path="/sobre" Component={About} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/dashboard/amulets" Component={Amulets} />
            <Route path="/dashboard/statistic" Component={Statistic} />
            <Route path="/faq" Component={FAQ} />
          </Switch>
        </BalanceProvider>
      </div>
    </>
  );
}
