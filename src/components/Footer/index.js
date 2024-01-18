import { Link } from 'react-router-dom';
import logoFooter from '../../assets/logo/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-blue_dark px-4 py-8 mt-auto">
      <div className="flex flex-col gap-y-8 items-center">
        <Link to="/"><img src={logoFooter} alt="logo footer" /></Link>
        <div className="flex flex-col gap-4">
          <span className="flex flex-row gap-8">
            <Link to="/sobre" className="text-blue_lightest transition-all hover:opacity-75">
              Sobre
            </Link>
            <Link to="/faq" className="text-blue_lightest transition-all hover:opacity-75">
              FAQ
            </Link>
            <a href="/ProbaSorte - Termos e Condições.pdf" target="_blank" className="text-blue_lightest transition-all hover:opacity-75">
              Termos e condições
            </a>
          </span>
        </div>
        <p className="text-blue_lightest text-center">
          Todos os direitos reservados
        </p>
        <p className="text-blue_lightest text-center">
          Apesar de usarmos dados e estatísticas com histórico e probabilidade
          de jogos anteriores, este site não garante nenhum resultado com as
          sugestões aqui geradas. Use por sua conta e risco.
        </p>
      </div>
    </footer>
  );
}
