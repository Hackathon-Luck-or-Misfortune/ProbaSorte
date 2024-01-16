import Slogan from './components/Slogan';
import Footer from './components/Footer';
import MyLuck from './components/MyLuck';
import Header from './components/Header';
import Hero from './components/Hero';
import Instruction from './components/Instructions';
import Section from './components/Section';

function App() {
  return (
    <div className="page">
      <Slogan />
      <Header />
      <Hero />
      <Instruction />
      <Section />
      <MyLuck />
      <Footer />
    </div>
  );
}

export default App;
