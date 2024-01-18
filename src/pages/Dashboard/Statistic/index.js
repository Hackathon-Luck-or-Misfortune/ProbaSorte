/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Footer from '../../../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import generateLuckByStatistics from '../../../actions/generateLuckByStatistics';

export default function Statistic() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function handleGenerateLucySequence() {
    try {
      setErrorMessage('');
      setIsLoading(true);
      const { numbers, error } = await generateLuckByStatistics();
      if (error) throw error;
      const luck = {
        id: uuid(),
        date: new Date(),
        luckType: 'Estatísticas',
        amulets: [],
        numbers,
      };
      const localLuck =
        JSON.parse(localStorage.getItem('@probasorte/lucks')) || null;
      if (localLuck) {
        localStorage.setItem(
          '@probasorte/lucks',
          JSON.stringify([luck, ...localLuck])
        );
      } else {
        localStorage.setItem('@probasorte/lucks', JSON.stringify([luck]));
      }
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <DashboardHeader />
      <div className="w-full px-4 flex flex-col gap-8 mb-16">
        <div className="w-full flex justify-between items-center">
          <Link to="/dashboard" className="text-blue_dark text-sm">
            ⬅ voltar
          </Link>
        </div>
        {errorMessage && (
          <span className="bg-red-200 rounded-lg text-center p-2 text-red-900">
            {errorMessage}
          </span>
        )}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-blue_dark">
            Gere sua sorte baseada apenas em estatísticas
          </h2>
          <p className="text-neutral-700 text-sm">
            Geraremos sua sequência utilizando histórico de jogos anteriores,
            aumentando suas chances no jogo, usando números com mais
            probabilidade de vencer.
          </p>

          <button
            type="button"
            onClick={handleGenerateLucySequence}
            disabled={isLoading}
            className="bg-orange text-white w-full py-4 mt-4 text-center rounded-lg disabled:bg-neutral-300"
          >
            Comprar jogo
          </button>
          <span className="block text-center text-blue_dark">
            <strong>Total:</strong> 1 sorte
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
