import brFeliz from '../../assets/images/br-feliz.png';

export default function Section() {
  return (
    <section className="flex flex-col bg-white_background py-8 px-4 gap-4">
      <h2 className="text-blue_dark  font-bold text-xl">Paixão na sorte</h2>
      <p>
        Há diversos exemplos de pessoas que mudaram suas vidas ganhando prêmios em apostas. O Brasil não está de fora, as pessoas acreditam que, com sorte, podem vivenciar o mesmo após fazer uma única jogada.
      </p>
      <img
        src={brFeliz}
        alt="brasileiro torcendo com jogo feito"
        className="w-full"
      />
      <p>
        Existem diversos motivos para o brasileiro escolher aquele número e fazer aquela aposta, um deles é a emoção de se arriscar, muitos gostam desse entusiasmo. Veem que o jogo pode ser uma forma de escape, escolher seus números e aguardar com expectativa pelos resultados. É aí, onde mora a emoção.
      </p>
      <p>Tem aqueles jogadores que apostam nas suas mandingas e amuletos e utilizam algumas práticas comuns para poder encontrar a sua sorte, alguns fecham os olhos antes de escolher algum número para poder 'enxergar' melhor; outros, um tanto quanto mais religiosos, acreditam que ao fazer uma reza ou pedidos antes terão em suas mãos os números escolhidos; há também aqueles que devem estar usando aquela roupa da sorte na hora de fazer o jogo. E não podemos deixar de mencionar os jogadores que apostam no famoso número da sorte! São tantas crenças e superstições, mas todos, não importa o jogador, estão focados em um só motivo: mudar a sua vida se tornando milionário!</p>
      <p>Além de fazer jogos focados em mudar de vida, muitas loterias apoiam causas sociais, ao jogar na loteria, os jogadores apoiam também causas que podem acarretar um impacto significativo no país.</p>
    </section>
  );
}
