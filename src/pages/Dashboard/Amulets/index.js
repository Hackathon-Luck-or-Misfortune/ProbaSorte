/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import IconPlus from '../../../components/Icons/IconPlus';
import IconTrash from '../../../components/Icons/IconTrash';
import DashboardHeader from '../components/DashboardHeader';
import generateLuckByAmulets from '../../../actions/generateLuckByAmulets';
import { SessionContext } from '../../../context/session';
import { createUserLuck } from '../../../functions/createUserLuck';
import { updateUserBalance } from '../../../functions/updateUserBalance';
import { BalanceContext } from '../../../context/balance';

export default function Amulets() {
  const [amulets, setAmulets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { user } = useContext(SessionContext);
  const { setBalance, balance } = useContext(BalanceContext);
  const navigate = useNavigate();

  function handleSubmitAmulets(form) {
    form.preventDefault();
    try {
      setErrorMessage('');
      setIsLoading(true);
      const formData = new FormData(form.target);
      const amuletsExists = amulets.filter(
        (am) => am === formData.get('amulet').toString()
      );
      if (!formData.get('amulet')) {
        throw new Error('Preencha com um Amuleto');
      }
      if (amuletsExists.length > 0) {
        throw new Error('Você já adicionou este Amuleto');
      }
      if (amulets.length >= 6) {
        throw new Error('Você já tem 6 Amuletos!');
      }
      if (!amulets.length > 0) {
        setAmulets([formData.get('amulet').toString()]);
      } else {
        setAmulets((state) => [...state, formData.get('amulet').toString()]);
      }
      form.target.reset();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleTrashAmulet(amulet) {
    try {
      setErrorMessage('');
      setIsLoading(true);
      if (amulets.length <= 1) {
        setAmulets([]);
        return;
      }
      setAmulets((state) => state.filter((am) => am !== amulet));
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleBuyLuckByAmulets() {
    const coust = 1;
    try {
      setErrorMessage('');
      setIsLoading(true);

      if (!user) {
        throw new Error('Não existe usuário logado');
      }

      // Verifica se usuário adicionou 6 amuletos
      if (amulets.length <= 5) {
        throw new Error('Complete 6 Amuletos');
      }

      // Gera números da sorte com base nos amuletos
      const numbersOfLuck = generateLuckByAmulets(amulets);

      // Cria a Sorte com todos os itens obrigatórios
      const luck = {
        user_id: user.profile.id,
        numbers: numbersOfLuck,
        amulets,
        type: 'Amuletos',
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
          <a href="/dashboard" className="text-blue_dark text-sm">
            ⬅ voltar
          </a>
          <span className="font-bold text-blue_dark">
            {amulets.length} selecionado{amulets.length > 1 && 's'}
          </span>
        </div>
        {errorMessage && (
          <span className="bg-red-200 rounded-lg text-center p-2 text-red-900">
            {errorMessage}
          </span>
        )}
        <p>Basta enviar 6 palavras que te dão sorte como amuletos e clicar em <b>comprar jogo</b></p>
        <form onSubmit={handleSubmitAmulets} className="w-full flex">
          <input
            type="text"
            name="amulet"
            placeholder="Qual seu amuleto?"
            className="w-full p-4 bg-blue-100 rounded-l-lg placeholder:text-blue-900 text-blue-950 outline-none border border-transparent focus:border-blue-500"
          />
          <button
            type="submit"
            className="p-4 bg-blue_main rounded-r-lg"
            disabled={isLoading}
          >
            <IconPlus size={16} className="fill-white" />
          </button>
        </form>
        <div>
          <span className="text-blue_dark font-bold block mb-2">
            Adicionados
          </span>
          <ul className="flex flex-col gap-2">
            {amulets.length > 0 ? (
              amulets.map((amulet, index) => (
                <li key={amulet} className="flex">
                  <div className="w-full p-4 bg-green_light rounded-l-lg text-green_dark flex gap-2.5 items-center">
                    <span className="text-slate-600 text-xs">{index + 1}</span>
                    <span>{amulet}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleTrashAmulet(amulet)}
                    className="p-4 bg-red-500 rounded-r-lg"
                  >
                    <IconTrash size={16} className="fill-white" />
                  </button>
                </li>
              ))
            ) : (
              <span className="block text-xs text-center">
                Adicione seus amuletos
              </span>
            )}
          </ul>
          <button
            type="button"
            onClick={handleBuyLuckByAmulets}
            disabled={amulets.length <= 5}
            className="bg-orange text-white w-full py-4 text-center mt-8 rounded-lg disabled:bg-neutral-300"
          >
            Comprar jogo
          </button>
          <span className="block text-center text-blue_dark mt-2">
            <strong>Total:</strong> 1 sorte
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
