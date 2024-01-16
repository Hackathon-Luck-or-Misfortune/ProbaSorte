import whiteLogo from '../../assets/logo/logo-white.svg';
import Slogan from '../../components/Slogan';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Instruction from '../../components/Instructions';
import Section from '../../components/Section';
import MyLuck from '../../components/MyLuck';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-blue_main items-center"
        buttonText="Entrar"
        buttonHref="/login"
        logo={whiteLogo}
        buttonColor="bg-blue_lightest py-2 px-4 rounded-lg text-blue_main"
      />
      <Hero />
      <Instruction />
      <Section />
      <MyLuck />
      <Footer />
    </>
  );
}
