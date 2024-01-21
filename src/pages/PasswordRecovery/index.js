/* eslint-disable operator-linebreak */
import { useState } from 'react';
import Header from '../../components/Header';
import blueLogo from '../../assets/logo/logo-blue.svg';
import Slogan from '../../components/Slogan';
import Footer from '../../components/Footer';
import { supabase } from '../../supabase/supabase-client';

export default function PassowordRecovery() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handlePasswordRecovery(event) {
    event.preventDefault();
    try {
      const form = event.target;
      const formData = new FormData(event.target);
      const email = formData.get('email').toString();

      setIsLoading(true);
      setMessage(null);

      // Verifica se existe usuário com email informado
      const { error: errorEmail } = await supabase
        .from('profiles')
        .select('email')
        .eq('email', email)
        .single();
      if (errorEmail) throw Error('Email não encontrado em nossa base.');

      // Envia email de redefinição de senha para o email
      const { error: errorPassword } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${process.env.REACT_APP_SITE_URL}/password-reset`,
        });
      if (errorPassword) throw errorPassword;

      // Mensagem de sucesso
      setMessage({
        message: 'Um email de redifinição de senha foi enviado.',
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
            Recupere sua conta ProbaSorte
          </h1>
          <span className="text-neutral-800 text-base text-center">
            Nos diga seu email para redefinir sua senha
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
          onSubmit={handlePasswordRecovery}
          className="w-full flex flex-col gap-3 items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-4 bg-blue-100 rounded-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="cursor-pointer w-full text-white bg-blue_main rounded-lg py-4 hover:opacity-75 transition-all disabled:opacity-60 disabled:cursor-default"
            disabled={isLoading}
          >
            Continuar
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
