import Footer from '../../components/Footer';
import ButtonGenerateLuck from './components/ButtonGenerateLuck';
import DashboardHeader from './components/DashboardHeader';
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
  {
    id: 4,
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
  {
    id: 5,
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
  {
    id: 6,
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
  {
    id: 7,
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
  {
    id: 8,
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
      <DashboardHeader />
      <div className="w-full px-4 flex flex-col gap-8 mb-16">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-blue_dark">Seu histórico:</h3>
          <ButtonGenerateLuck />
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
