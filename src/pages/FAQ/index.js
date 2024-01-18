import Slogan from '../../components/Slogan';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MyLuck from '../../components/MyLuck';
import blueLogo from '../../assets/logo/logo-blue.svg';
import AccordionFAQ from '../../components/Accordion/Accordion';

export default function FAQ() {
  return (
    <>
      <Slogan />
      <Header
        theme="flex p-4 justify-between bg-white items-center"
        buttonText="Entrar"
        buttonHref="/login"
        logo={blueLogo}
        buttonColor="bg-blue_main py-2 px-4 rounded-lg text-blue_lightest transition-all hover:opacity-75"
      />
      <section className="px-4 pt-4 pb-8 flex flex-col gap-8">
        <h1 className="text-blue_dark text-2xl font-bold">Peguntas Frequentes - ProbaSorte</h1>
        <AccordionFAQ />
      </section>
      <MyLuck />
      <Footer className="absolute" />
    </>
  );
}
