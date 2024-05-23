import Categorias from "../components/categorias";

export default function Home() {
  return (
    <>
      <img className="w-full" src="/images/banner2.png" alt="" />

      <section className="flex flex-col items-center justify-center mx-auto gap-4 max-w-7xl pt-5 px-6 flex-grow">
        <Categorias />
      </section>
    </>
  );
}
