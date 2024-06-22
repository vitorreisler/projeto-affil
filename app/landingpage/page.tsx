"use client";
import PrimaryButton from "@/components/primarybutton";
import Review from "@/components/review";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window.screen.width < 500) {
      setIsSmallScreen(window.screen.width < 500);
    }
  }, []);
  return (
    <section className="w-fullflex flex-col items-center justify-center mx-auto gap-4 max-w-7xl pt-5 px-6 flex-grow">
      <h1 className={`text-5xl text-center my-3`}>Os melhores achadinhos</h1>

      <section
        id="descricao-landingpage"
        className="flex flex-col w-[80%] items-center mx-auto gap-5 my-6 "
      >
        <PrimaryButton linkDeCompra={"https://chat.whatsapp.com/JUpRKRlhrpbFcnjnbh0o60"} msgDoButton={"ENTRAR NO GRUPO"} />

        {isSmallScreen ? (
          <p className="text-xl">
            Bem-vindo às melhores ofertas! 🛒💥 Encontre promoções exclusivas da
            Shopee, Amazon, Mercado Livre e Hotmart. Quer receber descontos
            incríveis primeiro? Entre no nosso grupo VIP do WhatsApp! 🚀📲
          </p>
        ) : (
          <p className="text-2xl">
            Já se perguntou por que algumas pessoas conseguem encontrar as
            melhores ofertas e economizar tanto, enquanto você, mesmo buscando
            promoções, não consegue o mesmo resultado? 🤔
            <br />
            Provavelmente, você já percebeu que encontrar bons descontos não é
            tão simples quanto parece. Ofertas que desaparecem rápido, produtos
            que não estão em promoção, e a sensação de estar sempre perdendo as
            melhores oportunidades... tudo isso pode ser frustrante para quem
            tenta economizar. 😓 
			<br />
			Você se vê constantemente gastando mais do que
            gostaria, com pouca confiança nas suas compras e sempre com medo de
            perder uma promoção incrível. Soa familiar? 😟 E se eu dissesse que
            é possível transformar suas compras, encontrar ofertas consistentes
            sem perder horas procurando, e garantir os produtos mais desejados
            de forma estratégica e inteligente, você acreditaria? 🛍️✨
			<br />
			 É isso
            que nossa comunidade oferece! Uma forma de você economizar,
            aproveitar as melhores promoções da Amazon, Shopee e Mercado Livre,
            e ainda receber dicas e conselhos exclusivos. 🎉📈
          </p>
        )}
      </section>
      <section id="reviews-landingpage" className="w-full my-6 text-center">
        <section
          id="beneficios-grupo-landingpage"
          className="flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400 text-center">
              Dentro do grupo terá
            </h5>

            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Cupons de oferta em primeira mão
                </span>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Cupons de descontos em categorias de produtos
                </span>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Lista semanal dos mais vendidos da Amazon
                </span>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Produtos que mais bombam na shopee
                </span>
              </li>
              <li className="flex  justify-between">
                <img
                  src={"/images/mercadoLivreIcon.png"}
                  alt="mercado-livre "
                />
                <img
                  className="rounded-lg"
                  src={"/images/shopeeIcon.png"}
                  alt="shopee "
                />
                <img
                  className="rounded-lg"
                  src={"/images/amazonIcon.png"}
                  alt="amazon "
                />
              </li>
            </ul>
            <PrimaryButton linkDeCompra={"https://chat.whatsapp.com/JUpRKRlhrpbFcnjnbh0o60"} msgDoButton={"ENTRAR NO GRUPO"} />
          </div>
        </section>
      </section>
      <Review />
    </section>
  );
}
