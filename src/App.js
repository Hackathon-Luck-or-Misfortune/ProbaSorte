import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
