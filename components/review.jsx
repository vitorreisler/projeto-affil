import { useEffect, useState } from "react";

const Review = () => {
  const reviews = [
    {
      imgPerfil:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
      titulo: "Aprovado!",
      comentario:
        "Compro e aprovo, quem não gosta de comprar com uns descontos né..",
      nota: 5,
    },
    {
      imgPerfil:
        "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
      titulo: "Adoro os produtos",
      comentario: "Já comprei 2 livros e meu Fire Stick TV no precinho aqui.",
      nota: 5,
    },
    {
      imgPerfil:
        "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      titulo: "Melhores achadinhos",
      comentario:
        "Vejo algo no shopee e venho ver se tem cupon de desconto aqui!!!",
      nota: 5,
    },
    {
      imgPerfil:
        "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      titulo: "Bons itens para viagens",
      comentario:
        "Não sou de comprar muito, mas quando vejo algo interessante já venho ver se o preço é bom",
      nota: 5,
    },
    {
      imgPerfil:
        "https://images.pexels.com/photos/8517921/pexels-photo-8517921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      titulo: "Cozinha elegante",
      comentario:
        "Deixei de passar horas cortando e picando coisas com os produtos daqui",
      nota: 5,
    },
    {
      imgPerfil:
        "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      titulo: "Ótima compra",
      comentario:
        "Minhas viagens de busão nunca mais foram as mesmas depois que comprei os fones aqui",
      nota: 5,
    },
  ];

  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
    setRandomReviews(shuffledReviews.slice(0, 3));
  }, []);

  return (
    <>
      <section className="w-full bg-slate-100 flex flex-col md:justify-between overflow-x-scroll scrollbar-hide shadow-lg pb-5 mb-7">
      <h1 className="text-4xl block w-full bg-yellow-300 p-4 text-center mb-5 rounded-t-md flex-grow">O Que Nossos Clientes Dizem</h1>
        <div className="flex justify-evenly">
          {randomReviews.map((review, i) => (
            <div
              key={i}
              className="block max-w-[320px] p-6 bg-white border border-gray-200 md:rounded-lg shadow-md  dark:bg-gray-800 dark:border-gray-700 "
            >
              <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                <img
                  className="w-10 h-10 rounded-full"
                  src={review.imgPerfil}
                  alt="Rounded avatar"
                />
                <h5 className="mb-2 text-xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                  {review.titulo}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {review.comentario}
              </p>
              <div className="flex items-center py-3">
                {[...Array(5)].map((star, index) => {
                  return (
                    <svg
                      key={index}
                      className={`w-4 h-4 ms-1 ${
                        index < review.nota
                          ? "text-yellow-300"
                          : "text-gray-300 dark:text-gray-500"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
