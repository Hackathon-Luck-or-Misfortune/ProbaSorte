import blueLogo from '../../../../assets/logo/logo-blue.svg';
import Slogan from '../../../../components/Slogan';
import DashboardAvatar from '../DashboardAvatar';

export default function DashboardHeader() {
  return (
    <>
      <Slogan />
      <div className="flex w-full justify-between items-center px-4 py-4 bg-white">
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
          <span className="text-blue_dark text-xs w-fit shrink-0">
            <strong>Saldo: </strong>5 sortes
          </span>
          <DashboardAvatar />
        </div>
      </div>
    </>
  );
}
