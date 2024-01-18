import logoAzul from '../../assets/logo/logo-blue.svg';
import Footer from '../../components/Footer';
import MyLuck from '../../components/MyLuck';
import Slogan from '../../components/Slogan';
import Header from '../../components/Header';

export default function About() {
  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-white_background items-center"
        buttonText="Entrar"
        buttonHref="/login"
        logo={logoAzul}
        buttonColor="bg-blue_main py-2 px-4 rounded-lg text-blue_lightest"
      />

      <section className="flex flex-col p-4 pb-16 gap-8 bg-white_background">
        <h1 className="font-bold text-2xl text-blue_dark">
          Saiba como funcionamos e geramos sua sorte
        </h1>

        <article className="flex flex-col gap-4 w-full">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            atque quas inventore quod in reiciendis. Vero alias odio dolorem
            illum libero ab sed, recusandae, voluptates nobis voluptas, illo
            cumque!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            atque quas inventore quod in reiciendis. Vero alias odio dolorem
            illum libero ab sed, recusandae, voluptates nobis voluptas, illo
            cumque!
          </p>

          <div className="w-full h-44 bg-slate-300" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            atque quas inventore quod in reiciendis. Vero alias odio dolorem
            illum libero ab sed, recusandae, voluptates nobis voluptas, illo
            cumque!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            atque quas inventore quod in reiciendis. Vero alias odio dolorem
            illum libero ab sed, recusandae, voluptates nobis voluptas, illo
            cumque!
          </p>

          <div className="w-full h-44 bg-slate-300" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore
            atque quas inventore quod in reiciendis. Vero alias odio dolorem
            illum libero ab sed, recusandae, voluptates nobis voluptas, illo
            cumque!
          </p>
        </article>
      </section>
      <MyLuck />
      <Footer />
    </>
  );
}
