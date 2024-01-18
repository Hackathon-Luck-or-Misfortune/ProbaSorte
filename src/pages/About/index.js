import logoAzul from '../../assets/logo/logo-blue.svg';
import braFeliz from '../../assets/images/bra.png';
import Footer from '../../components/Footer';
import MyLuck from '../../components/MyLuck';
import Slogan from '../../components/Slogan';
import Header from '../../components/Header';

export default function About() {
  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-white_background items-center"
        buttonText="Entrar"
        buttonHref="/login"
        logo={logoAzul}
        buttonColor="bg-blue_main py-2 px-4 rounded-lg text-blue_lightest transition-all hover:opacity-75"
      />

      <section className="flex flex-col p-4 pb-16 gap-8 bg-white_background">
        <h1 className="font-bold text-2xl text-blue_dark">
          O ProbaSorte é onde você pode encontrar os seus números da sorte.
        </h1>

        <article className="flex flex-col gap-4 w-full">
          <h2 className="font-bold text-blue_dark text-xl">Como funciona:</h2>
          <p className="">
            Aqui, nós não dependemos exclusivamente da sorte! Através de análise de estatísticas, estudos de padrões históricos, probabilidades, oferecemos uma abordagem mais estratégica de jogo.Utilizamos algoritmos avançado para gerar combinações selecionadas de números, aumentando as suas chances de acertar os resultados da Mega Sena!🔮
          </p>
          <div className="flex justify-center">
            <img src={braFeliz} alt="brasileira feliz com resultado da loteria" className="aspect-auto rounded-full max-w-80" />
          </div>
          <h2 className="font-bold text-blue_dark text-xl">Nossos Recursos:</h2>
          <p>
            Analisando cuidadosamente os resultados anteriores da Mega Sena, o ProbaSorte identifica padrões e números mais frequentes, selecionando assim, sequências mais notáveis.
          </p>
          <p>
            Com algoritmos inteligentes, o ProbaSorte gera combinações de números, aqueles que têm maior probabilidade de serem sorteados, aumentando as suas chances de acertar.
          </p>
          <p>ProbaSorte foi desenvolvido com uma interface intuitiva, tornando o processo do usuário simples e acessível ✨</p>

        </article>
      </section>
      <MyLuck />
      <Footer />
    </>
  );
}
