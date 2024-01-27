/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import blueLogo from '../../assets/logo/logo-blue.svg';
import Slogan from '../../components/Slogan';
import Footer from '../../components/Footer';
import { supabase } from '../../supabase/supabase-client';

export default function PassowordReset() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    }
    getSession();
  }, []);

  async function handlePasswordReset(ev) {
    ev.preventDefault();
    try {
      setIsLoading(true);
      setMessage(null);
      const form = ev.target;
      const formData = new FormData(ev.target);
      const password = formData.get('password').toString();
      const passwordConfirmation = formData
        .get('password-confirmation')
        .toString();

      // verifica se as senhas coincidem
      if (password !== passwordConfirmation) {
        throw new Error('Senhas informadas não coincidem.');
      }

      // altera a senha do usuário em sessão (?)
      const { error } = await supabase.auth.updateUser({
        password: passwordConfirmation,
      });
      if (error) throw error;

      // Mensagem de sucesso
      setMessage({
        message: 'Senha redefinida com sucesso. Faça seu login.',
        type: 'success',
      });
      form.reset();
    } catch (error) {
      setMessage({
        message: error.message,
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
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
            Definir nova senha
          </h1>
          <span className="text-neutral-800 text-base text-center">
            Defina uma nova senha para sua conta.
          </span>
        </div>
        {message && (
          <span
            className={`rounded-lg text-center p-2 ${
              message.type === 'success'
                ? 'bg-green-200 text-green-900'
                : 'bg-red-200 text-red-900'
            }`}
          >
            {message.message}
          </span>
        )}
        <form
          onSubmit={handlePasswordReset}
          className="w-full flex flex-col gap-3 items-center"
        >
          <input
            type="password"
            name="password"
            placeholder="Nova senha"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            required
          />
          <input
            type="password"
            name="password-confirmation"
            placeholder="Confirme sua senha"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="cursor-pointer w-full text-white bg-blue_main rounded-lg py-4 hover:opacity-75 transition-all disabled:opacity-60 disabled:cursor-default"
            disabled={isLoading}
          >
            Redefinir senha
          </button>
          <p className="text-xs text-neutral-700">
            Para sua segurança, precisamos de informações que só o{' '}
            <strong>proprietário desta conta saberia</strong>. Esta é a melhor
            forma com a qual podemos verificar que esta conta é sua e
            recuperá-la para você.
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
}
