export default function Hero() {
  return (
    <div className="flex flex-col items-center bg-blue_main bg-bottom bg-no-repeat px-4 py-8 gap-y-4">
      <h1 className="text-blue_lightest text-2xl text-center font-bold w-60">Sua sorte e estatísticas juntas</h1>
      <p className="text-blue_lightest w-3/5 text-center">Cadastre-se agora e receba agora a sequência que pode te fazer um vencedor</p>
      <a href="/" className="bg-orange py-2 px-4 text-blue_lightest rounded-lg w-fit">Quero minha sorte</a>
    </div>
  );
}
