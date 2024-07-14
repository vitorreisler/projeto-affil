"use client";
import { useEffect, useState } from "react";
import Categorias from "../components/categorias";
import Review from "../components/review";
import AchadosHoje from "../components/achadosHoje";


export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if(window.screen.width < 500){
    setIsSmallScreen(window.screen.width < 500)
  }
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <img
          className="w-full"
          src="/images/banner-sm.png"
          alt="Banner pequeno"
        />
      ) : (
        <img className="w-full" src="/images/banner1.png" alt="Banner grande" />
      )}

      <section className="flex flex-col items-center justify-center mx-auto gap-4 max-w-7xl pt-5 px-3 flex-grow">
        <AchadosHoje />
        <Categorias />
        <Review />
      </section>
    </>
  );
}
