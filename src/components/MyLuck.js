export default function MyLuck() {
  return (
    <div className="bg-blue_main py-8 px-4 flex flex-col gap-4 items-center">
      <h2 className="text-center text-blue_lightest">
        Um jogo <b>gratuito por dia</b>,{' '}
        <span className="block">cadastre-se agora.</span>
      </h2>
      <a
        href="/register"
        className="bg-blue_lightest py-2 px-4 text-blue_main rounded-lg w-fit"
      >
        Quero minha sorte
      </a>
    </div>
  );
}
