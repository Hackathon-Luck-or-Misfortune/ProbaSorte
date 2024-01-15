import Slogan from './components/Slogan';
import Footer from './components/Footer';
import MyLuck from './components/MyLuck';
import Header from './components/Header';
import Hero from './components/Hero';
import Instruction from './components/Instructions';

function App() {
  return (
    <div className="page">
      <Slogan />
      <Header />
      <Hero />
      <Instruction />
      <MyLuck />
      <Footer />
    </div>
  );
}

export default App;
