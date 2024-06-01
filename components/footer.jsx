const Footer = () => {
  return (
    <footer className=" w-full bg-white rounded-lg shadow dark:bg-gray-800">
      <div className=" flex flex-wrap-reverse justify-center  w-full mx-auto  max-w-screen-xl p-4 md:flex md:items-center  md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
         { `©${new Date().getFullYear()}`}
          <a href="https://visi-ofertas.vercel.app/" className="hover:underline">
            Visil ofertas
          </a>
          . Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/hotmart" className="hover:underline me-4 md:me-6">
              Hotmart
            </a>
          </li>
          <li>
            <a href="/amazon" className="hover:underline me-4 md:me-6">
              Amazon
            </a>
          </li>
          <li>
            <a href="/shopee" className="hover:underline me-4 md:me-6">
              Shopee
            </a>
          </li>
          <li>
            <a href="/mercado-livre" className="hover:underline">
              Mercado Livre{" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
