import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" Component={Home} />
      <Route path="/sobre" Component={About} />
    </Switch>
  );
}
