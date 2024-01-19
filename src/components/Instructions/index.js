import { Link } from 'react-router-dom';
import instruction1 from '../../assets/images/instruction-1.svg';
import instruction2 from '../../assets/images/instruction-2.svg';
import instruction3 from '../../assets/images/instruction-3.svg';

export default function Instruction() {
  return (
    <section className="flex flex-col px-4 py-8 gap-4 bg-white_background items-center">
      <h2 className="text-bold text-blue_dark font-bold text-xl text-center">
        Como funciona?
      </h2>
      <p className="text-center w-64">
        Para encontrar seus números, siga os passos com atenção, o que você busca está na sua direção
      </p>
      <ul className="flex flex-col items-center gap-4">
        <li className="flex flex-col items-center gap-3">
          <div className="bg-orange p-4 w-fit rounded-lg">
            <img src={instruction1} alt="instrução sobre cadastro" />
          </div>
          <p className="text-xs">Passo 1</p>
          <p className="w-40 text-center">
            Faça o seu cadastro aqui no Probasorte. <Link to="/register" className="transition-all hover:opacity-75">Clique e entre na corrente da sorte</Link>
          </p>
        </li>
        <li className="flex flex-col items-center gap-3">
          <div className="bg-orange p-4 w-fit rounded-lg">
            <img src={instruction2} alt="instrução sobre cadastro" />
          </div>
          <p className="text-xs">Passo 2</p>
          <p className="w-40 text-center">Escolha entre gerar números com estatística ou com amuleto.
          </p>
        </li>
        <li className="flex flex-col items-center gap-3">
          <div className="bg-orange p-4 w-fit rounded-lg">
            <img src={instruction3} alt="instrução sobre cadastro" />
          </div>
          <p className="text-xs">Passo 3</p>
          <p className="w-40 text-center">
            Gere seus números e faça seu jogo na Mega Sena
          </p>
        </li>
      </ul>
    </section>
  );
}
