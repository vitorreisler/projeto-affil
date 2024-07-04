const PrimaryButton = ({linkDeCompra, msgDoButton}) => {
    return ( 
        <a
          target="_blank"
          href={linkDeCompra}
          className="inline-flex items-center px-3 py-2 my-3 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"
        >
          {msgDoButton}
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
     );
}
 
export default PrimaryButton;