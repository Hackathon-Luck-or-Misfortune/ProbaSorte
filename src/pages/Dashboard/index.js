import blueLogo from '../../assets/logo/logo-blue.svg';
import avatarImg from '../../assets/images/Avatar.png';
import Footer from '../../components/Footer';
import Slogan from '../../components/Slogan';
import LuckCard from './components/LuckCard';

const Luckys = [
  {
    id: 1,
    date: '12 de Janeiro, 2024',
    luckType: 'Amuletos',
    numbers: [10, 15, 20, 40, 55, 21],
    amulets: [
      'Palavra 1',
      'Palavra 2',
      'Palavra 3',
      'Palavra 4',
      'Palavra 5',
      'Palavra 6',
    ],
  },
  {
    id: 2,
    date: '13 de Janeiro, 2024',
    luckType: 'Dados',
    numbers: [10, 15, 20, 40, 55, 21],
    amulets: [
      'Palavra 1',
      'Palavra 2',
      'Palavra 3',
      'Palavra 4',
      'Palavra 5',
      'Palavra 6',
    ],
  },
  {
    id: 3,
    date: '14 de Janeiro, 2024',
    luckType: 'Amuletos',
    numbers: [10, 15, 20, 40, 55, 21],
    amulets: [
      'Palavra 1',
      'Palavra 2',
      'Palavra 3',
      'Palavra 4',
      'Palavra 5',
      'Palavra 6',
    ],
  },
];

export default function Dashboard() {
  return (
    <>
      <Slogan />
      <div className="flex justify-between items-center px-4 py-4 bg-white">
        <a href="/" className="w-fit">
          <img src={blueLogo} alt="Logo azul da ProbaSorte" />
        </a>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="bg-blue_main w-4 h-4 flex items-center justify-center text-white p-1 rounded-lg"
          >
            +
          </button>
          <span className="text-blue_dark text-xs">
            <strong>Saldo: </strong>5 sortes
          </span>
          <img
            src={avatarImg}
            alt="Avatar do usuário"
            width="45"
            height="45"
            className="rounded-full w-10 ml-2"
          />
        </div>
      </div>
      <div className="w-full px-4 flex flex-col gap-8 mb-16">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-blue_dark">Seu histórico:</h3>
          <button
            type="button"
            className="bg-blue_main text-white px-4 py-2.5 rounded-lg"
          >
            + Gerar Sorte
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {Luckys.map((lucky) => (
            <LuckCard
              key={lucky.id}
              amulets={lucky.amulets}
              date={lucky.date}
              luckType={lucky.luckType}
              numbers={lucky.numbers}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
