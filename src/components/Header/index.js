import logoBranco from '../../assets/logo/logo-white.svg';
/* import logoAzul from '../../assets/logo/logo-blue.svg'; */

export default function Header() {
  /* precisamos criar uma forma de alternar as cores desse componente, talvez, via props */
  return (
    <div className="flex p-4 justify-between bg-blue_main">
      <img src={logoBranco} alt="logo" />
      <a href="/" className="bg-blue_lightest py-2 px-4 rounded-lg text-blue_main">Entrar</a>
    </div>
  );
}
