import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Amulets from './pages/Dashboard/Amulets';

export default function Routes() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Switch>
        <Route exact path="/" Component={Home} />
        <Route path="/sobre" Component={About} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/dashboard/amulets" Component={Amulets} />
      </Switch>
    </div>
  );
}
