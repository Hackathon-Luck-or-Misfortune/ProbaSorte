import { useNavigate, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import blueLogo from '../../assets/logo/logo-blue.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IconGoogleColor from '../../components/Icons/IconGoogleColor';
import Slogan from '../../components/Slogan';
import { supabase } from '../../supabase/supabase-client';
import { SessionContext } from '../../context/session';

export default function Login() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLoginWithGoogle() {
    setErrorMessage('');
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
      if (!data) throw new Error('Falha ao criar usuário...');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setErrorMessage('');
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.get('email').toString(),
        password: formData.get('password').toString(),
      });
      if (error) throw error;
      window.location.reload(false);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-white items-center"
        buttonText="Cadastre-se"
        buttonHref="/register"
        logo={blueLogo}
        buttonColor="bg-blue_main py-2 px-4 rounded-lg text-blue_lightest transition-all hover:opacity-75"
      />
      <div className="w-full flex flex-col px-4 py-8 pb-16 gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-center text-xl font-bold text-blue_dark">
            Faça seu login
          </h1>
          <span className="text-neutral-800 text-base text-center">
            Entre e encontre sua sorte hoje
          </span>
        </div>
        {errorMessage && (
          <span className="bg-red-200 rounded-lg text-center p-2 text-red-900">
            {errorMessage}
          </span>
        )}
        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col gap-3 items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full text-white bg-blue_main rounded-lg py-4 hover:opacity-75 transition-all"
            disabled={isLoading}
          >
            Entrar
          </button>
          <a
            href="/password-recovery"
            className="hover:opacity-75 transition-all"
          >
            Esqueci minha senha 😅
          </a>
        </form>
        <button
          type="button"
          onClick={handleLoginWithGoogle}
          disabled={isLoading}
          className="w-full flex gap-2 justify-center items-center text-neutral-700 bg-neutral-200 rounded-lg py-4 hover:opacity-75 transition-all"
        >
          <IconGoogleColor size={26} />
          Entrar com o Google
        </button>
        <p className="text-center text-neutral-700">
          Se ainda não tem conta, não deixe por esperar, se aqui você clicar, o
          seu destino se transformará 🪄{' '}
          <a
            href="/register"
            className="block font-bold hover:opacity-75 transition-all"
          >
            ✨Cadastre-se✨.
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}
