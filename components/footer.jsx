const FooterA = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
         { `©${new Date().getFullYear()}`}
          <a href="https://flowbite.com/" className="hover:underline">
            Visil ofertas
          </a>
          . Todos os direitos reservados.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Hotmart
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Amazon
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Shopee
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Mercado Livre{" "}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterA;
