import { Link } from 'react-router-dom';
import whiteLogo from '../../assets/logo/logo-white.svg';
import Header from '../Header';

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center bg-blue_main bg-hero-img bg-bottom bg-no-repeat px-4 pt-20 pb-8 gap-y-4">
      <Header
        theme="flex p-4 justify-between bg-transparent items-center absolute top-0 left-0 w-full"
        buttonText="Entrar"
        buttonHref="/login"
        logo={whiteLogo}
        buttonColor="bg-blue_lightest py-2 px-4 rounded-lg text-blue_main"
      />
      <h1 className="text-blue_lightest text-2xl text-center font-bold w-60">
        Sua sorte e estatísticas juntas
      </h1>
      <p className="text-blue_lightest w-full text-center">
        Cadastre-se agora e receba agora a sequência que pode te fazer um
        vencedor
      </p>
      <Link
        to="/register"
        className="bg-orange py-2 px-4 text-blue_lightest rounded-lg w-fit"
      >
        Quero minha sorte
      </Link>
    </div>
  );
}
