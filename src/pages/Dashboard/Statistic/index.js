/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Footer from '../../../components/Footer';
import DashboardHeader from '../components/DashboardHeader';
import generateLuckByStatistics from '../../../actions/generateLuckByStatistics';
import { BalanceContext } from '../../../context/balance';
import { SessionContext } from '../../../context/session';
import { createUserLuck } from '../../../functions/createUserLuck';
import { updateUserBalance } from '../../../functions/updateUserBalance';

export default function Statistic() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(SessionContext);
  const { setBalance, balance } = useContext(BalanceContext);

  async function handleGenerateLucySequence() {
    const coust = 1;

    try {
      setErrorMessage('');
      setIsLoading(true);

      if (!user) {
        throw new Error('Não existe usuário logado');
      }

      // Gera números da sorte com base nas estatísticas
      const { numbers, error } = await generateLuckByStatistics();
      if (error) throw error;

      // Cria a Sorte com todos os itens obrigatórios
      const luck = {
        user_id: user.profile.id,
        numbers,
        type: 'Estatísticas',
      };

      // Cria luck no banco de daddos
      const { error: errorUserLuck } = await createUserLuck(luck);
      if (errorUserLuck) throw errorUserLuck;

      // Faz o débito da transação no saldo do usuário
      const newBalance = balance - coust;
      const { error: errorUserBalance } = await updateUserBalance(
        user.profile,
        newBalance
      );
      if (errorUserBalance) throw errorUserBalance;

      // atualiza balancecontext
      setBalance(newBalance);

      // Se tudo certo, redireciona para dashboard
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
            Utilizando seus dados, sua sequência se formará
            <span className="block">
              Para as suas chances no jogo aumentar,
              números com mais probabilidades de vencer, irão te ajudar.
            </span>
          </p>

          <button
            type="button"
            onClick={handleGenerateLucySequence}
            disabled={isLoading || balance <= 0}
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
