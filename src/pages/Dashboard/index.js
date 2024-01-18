/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import ButtonGenerateLuck from './components/ButtonGenerateLuck';
import DashboardHeader from './components/DashboardHeader';
import LuckCard from './components/LuckCard';

export default function Dashboard() {
  const [lucks, setLucks] = useState([]);

  useEffect(() => {
    setLucks(JSON.parse(localStorage.getItem('@probasorte/lucks') || '[]'));
  }, []);

  return (
    <>
      <DashboardHeader />
      <div className="w-full px-4 flex flex-col gap-8 mb-16">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-blue_dark">Seu histórico:</h3>
          <ButtonGenerateLuck />
        </div>
        <ul className="flex flex-col gap-4">
          {lucks.length > 0 ? (
            lucks.map((luck) => (
              <LuckCard
                key={luck.id}
                amulets={luck.amulets}
                date={luck.date}
                luckType={luck.luckType}
                numbers={luck.numbers}
              />
            ))
          ) : (
            <li className="bg-neutral-200 text-neutral-900 text-center rounded-lg py-2">
              Ainda não tem histórico
            </li>
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}
