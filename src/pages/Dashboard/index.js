/* eslint-disable operator-linebreak */
import { useContext, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import ButtonGenerateLuck from './components/ButtonGenerateLuck';
import DashboardHeader from './components/DashboardHeader';
import LuckCard from './components/LuckCard';
import { getUserLucks } from '../../functions/getUserLucks';
import { SessionContext } from '../../context/session';

export default function Dashboard() {
  const [lucks, setLucks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(SessionContext);

  useEffect(() => {
    async function getLucks() {
      try {
        setIsLoading(true);
        if (user) {
          const { data, error } = await getUserLucks(user.profile);
          if (error) throw error;
          if (data) {
            setLucks(data);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getLucks();
  }, [user]);
  return (
    <>
      <DashboardHeader />
      <div className="w-full px-4 flex flex-col gap-8 mb-16">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-blue_dark">Seu histórico:</h3>
          <ButtonGenerateLuck />
        </div>
        <ul className="flex flex-col gap-4">
          {isLoading && (
            <li className="bg-neutral-200 text-neutral-900 text-center rounded-lg py-2">
              carregando...
            </li>
          )}
          {lucks && lucks.length >= 1 ? (
            lucks.map((luck) => (
              <LuckCard
                key={luck.id}
                amulets={luck.amulets}
                date={luck.created_at}
                luckType={luck.type}
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
