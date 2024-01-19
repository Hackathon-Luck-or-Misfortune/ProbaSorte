import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SessionContext } from '../../context/session';
import Slogan from '../../components/Slogan';
import Hero from '../../components/Hero';
import Instruction from '../../components/Instructions';
import Section from '../../components/Section';
import MyLuck from '../../components/MyLuck';
import Footer from '../../components/Footer';

export default function Home() {
  const { session } = useContext(SessionContext);

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Slogan />
      <Hero />
      <Instruction />
      <Section />
      <MyLuck />
      <Footer />
    </>
  );
}
