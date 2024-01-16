import brFeliz from '../../assets/images/br-feliz.png';

export default function Section() {
  return (
    <section className="flex flex-col bg-white_background py-8 px-4 gap-4">
      <h2 className="text-blue_dark  font-bold text-xl">Paixão na sorte</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="w-80 h-52 overflow-hidden">
        <img src={brFeliz} alt="brasileiro torcendo com jogo feito" />
      </div>
      <p>
        Lorem Ipsum has been the hahuq standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </p>
    </section>
  );
}
