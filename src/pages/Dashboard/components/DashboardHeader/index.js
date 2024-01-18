import { useContext } from 'react';
import { Link } from 'react-router-dom';
import blueLogo from '../../../../assets/logo/logo-blue.svg';
import Slogan from '../../../../components/Slogan';
import DashboardAvatar from '../DashboardAvatar';
import { BalanceContext } from '../../../../context/balance';

export default function DashboardHeader() {
  const { balance } = useContext(BalanceContext);
  return (
    <>
      <Slogan />
      <div className="flex w-full justify-between items-center px-4 py-4 bg-white">
        <Link to="/" className="w-fit">
          <img src={blueLogo} alt="Logo azul da ProbaSorte" />
        </Link>
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="bg-blue_main w-4 h-4 flex items-center justify-center text-white p-1 rounded-lg"
          >
            +
          </button>
          <span className="text-blue_dark text-xs w-fit shrink-0">
            <strong>Saldo: </strong>
            {balance} sorte{balance > 1 && 's'}
          </span>
          <DashboardAvatar />
        </div>
      </div>
    </>
  );
}
