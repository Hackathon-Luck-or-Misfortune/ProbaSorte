import logoFooter from '../../assets/logo/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-blue_dark px-4 py-8 ">
      <div className="flex flex-col gap-y-8">
        <div className="flex justify-between">
          <img src={logoFooter} alt="logo footer" />
          <span className="flex gap-4">
            <a className="text-blue_lightest" href="/">Sobre</a>
            <a className="text-blue_lightest" href="/">FAQ</a>
          </span>
        </div>
        <p className="text-blue_lightest text-center">Todos os direitos reservados</p>
        <p className="text-blue_lightest text-center">Apesar de usarmos dados e estatísticas com histórico e probabilidade de jogos anteriores, este site não garante nenhum resultado com as sugestões aqui geradas. Use por sua conta e risco.</p>
      </div>

    </footer>
  );
}
