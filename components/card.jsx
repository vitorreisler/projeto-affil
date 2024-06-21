const Card = ({ titulo, descricao, categoria, urlImg, linkDeCompra, alt }) => {
  return (
    <section className=" my-3  max-w-[sm] sm:max-w-[15rem] md:max-w-[17rem] bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105  hover:ease-in-out hover:duration-700 dark:bg-gray-800 dark:border-gray-700">
      <a target="_blank" href={linkDeCompra} className=" ">
        <img
          className=" w-full sm:max-h-[200px] md:max-h-[250px] object-contain rounded-t-lg "
          src={urlImg}
          alt={alt}
        />
      </a>
      <div className="p-5">
        <a target="_blank" href={linkDeCompra} className="">
          <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${titulo.length > 30 ? ("w-52 overflow-hidden text-ellipsis whitespace-nowrap") : ("")}`}>
            {titulo}
          </h5>
        </a>
        <p
          className={`mb-3 font-normal text-gray-700 dark:text-gray-400  ${
            descricao.length < 30
              ? ("")
              : ("w-52 overflow-hidden text-ellipsis whitespace-nowrap")
          }`}
        >
          {descricao}
        </p>
        {categoria === "" ? (
          " "
        ) : (
          <div className=" pt-2 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {categoria}
            </span>
          </div>
        )}
        <a
          target="_blank"
          href={linkDeCompra}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"
        >
          Ver mais...
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Card;
