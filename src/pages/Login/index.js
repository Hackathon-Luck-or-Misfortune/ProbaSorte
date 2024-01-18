import blueLogo from '../../assets/logo/logo-blue.svg';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Slogan from '../../components/Slogan';

export default function Login() {
  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-white items-center"
        buttonText="Cadastre-se"
        buttonHref="/register"
        logo={blueLogo}
        buttonColor="bg-blue_main py-2 px-4 rounded-lg text-blue_lightest"
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
        <form className="w-full flex flex-col gap-3 items-center">
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
            className="w-full text-white bg-blue_main rounded-lg py-4"
          >
            Entrar
          </button>
          <a href="/">Esqueci minha senha 😅</a>
        </form>
        <button
          type="button"
          className="w-full text-neutral-700 bg-neutral-200 rounded-lg py-4"
        >
          Entrar com o Google
        </button>
        <p className="text-center text-neutral-700">
          Ainda não tem conta?{' '}
          <a href="/register" className="block font-bold">
            Cadastre-se aqui.
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}
