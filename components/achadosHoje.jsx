import { achadosHoje } from "../produtos/achadosDeHoje";
import PrimaryButton from "./primarybutton";

const AchadosHoje = () => {
  return (
    
      <section className=" gap-5 w-full flex flex-wrap justify-center sm:items-center pb-5 border border-gray-200 rounded-lg shadow-md  ">
      <h1 className="block w-full text-4xl text-center bg-yellow-300 rounded-t-md  p-4">Achadinhos de Hoje</h1>
        {achadosHoje.map(
          ({ id, urlImg, nome, descricao, alt, linkDeCompra, plataforma }) => {
            return (
              <div key={id} className="max-w-[250px] flex flex-col items-center border border-gray-200 shadow-md rounded-md duration-500 hover:scale-105  ">
                <a target="_blank" href={linkDeCompra} >
                  <img
                    src={urlImg}
                    className="h-[235px] rounded-t-md"
                    alt={alt}
                  />
                </a>
                <a target="_blank" href={linkDeCompra} className="p-3">
                <h4
                  className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${
                    nome.length > 30
                      ? "w-52 overflow-hidden text-ellipsis whitespace-nowrap"
                      : ""
                  }`}
                >
                  {nome}
                </h4>
                <p
                  className={`mb-3 font-normal text-gray-700 dark:text-gray-400  ${
                    descricao.length < 30
                      ? ""
                      : "w-52 overflow-hidden text-ellipsis whitespace-nowrap"
                  }`}
                >
                  {" "}
                  {descricao}
                </p>

                </a>



                {plataforma === "" ? (
                  " "
                ) : (
                    <>
                  <div className=" py-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {plataforma}
                    </span>
                  </div>
                          <PrimaryButton linkDeCompra={linkDeCompra} msgDoButton={"Ver Produto..."} />
                    </>

                )}
              </div>
            );
          }
        )}
      </section>
  );
};

export default AchadosHoje;
