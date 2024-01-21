import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { supabase } from '../../supabase/supabase-client';
import blueLogo from '../../assets/logo/logo-blue.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IconGoogleColor from '../../components/Icons/IconGoogleColor';
import Slogan from '../../components/Slogan';
import { SessionContext } from '../../context/session';

export default function Register() {
  const navigate = useNavigate();
  const { session } = useContext(SessionContext);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // login com o Google pode não funcionar em navegadores que não sejam o google chrome
  // resolver esse bug no futuro
  async function handleRegisterWithGoogle() {
    setErrorMessage('');
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: '/dashboard',
        },
      });
      if (error) throw error;
      if (!data) throw new Error('Falha ao criar usuário...');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegisterWithEmail(event) {
    event.preventDefault();
    setErrorMessage('');
    setIsLoading(true);
    const formData = new FormData(event.target);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.get('email').toString(),
        password: formData.get('password').toString(),
        options: {
          data: {
            name: formData.get('name').toString(),
            full_name: formData.get('name').toString(),
            email: formData.get('email').toString(),
          },
        },
      });
      if (error) throw error;
      if (!data) throw new Error('Falha ao criar usuário...');
      const { error: profileUpdateError } = await supabase
        .from('profiles')
        .update({
          state: formData.get('state').toString(),
          city: formData.get('city').toString(),
        })
        .eq('id', data.user.id);
      if (profileUpdateError) throw profileUpdateError;
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
        buttonText="Entrar"
        buttonHref="/login"
        logo={blueLogo}
        buttonColor="bg-blue_main py-2 px-4 rounded-lg text-blue_lightest hover:opacity-75 transition-all"
      />
      <div className="w-full flex flex-col px-4 py-8 pb-16 gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-center text-xl font-bold text-blue_dark">
            Cadastre-se
          </h1>
          <span className="text-neutral-800 text-base text-center">
            Cadastre-se aqui e encontre sua sorte hoje
          </span>
        </div>
        {errorMessage && (
          <span className="bg-red-200 rounded-lg text-center p-2 text-red-900">
            {errorMessage}
          </span>
        )}
        <form
          onSubmit={handleRegisterWithEmail}
          className="w-full flex flex-col gap-3 items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            required
          />
          <fieldset className="flex gap-4">
            <input
              type="text"
              name="state"
              placeholder="Estado"
              className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            />
            <input
              type="text"
              name="city"
              placeholder="Cidade"
              className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            />
          </fieldset>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full text-white bg-blue_main rounded-lg py-4 hover:opacity-75 transition-all"
            disabled={isLoading}
          >
            Criar conta
          </button>
        </form>
        <button
          type="button"
          onClick={handleRegisterWithGoogle}
          className="w-full flex gap-2 justify-center items-center text-neutral-700 bg-neutral-200 rounded-lg py-4 hover:opacity-75 transition-all"
        >
          <IconGoogleColor size={26} />
          Cadastrar com o Google
        </button>
        <span className="text-center text-neutral-700">
          Quem já tem conta, todos os males espanta.
          <Link to="/login" className="block">
            Por{' '}
            <span className="font-bold hover:opacity-75 transition-all">
              aqui
            </span>
            , você pode fazer o seu login!
          </Link>
        </span>
      </div>
      <Footer />
    </>
  );
}
