import { GiFireworkRocket } from "react-icons/gi";
import { produtosMegaPromocoes } from "../../produtos/produtosMegaPromocoes";


const CategoriaMegaPromocoes = () => {
  
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl text-center p-3 bg-yellow-300 w-full inline">
        Mega Promoções  <GiFireworkRocket className="inline" />{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 flex-wrap md:gap-6 pt-5  md:py-4">
        {/*gap-9 flex flex-wrap justify-center*/produtosMegaPromocoes.map((item) => {
          return (
            <div
              key={item.id}
              className=" text-center hover:trasition mx-5 relative my-3 max-w-[208px] md:max-w-[13rem] rounded-2xl transition-all duration-500 hover:scale-105 border-2 shadow-[0_0_2px_#DC143C,inset_0_0_2px_#DC143C,0_0_5px_#DC143C,0_0_15px_#FF4500] "
            >
              <div className="block overflow-hidden max-h-[200px]">
                <img
                  className=" m-auto rounded-t-2xl object-cover"
                  src={item.urlImg}
                  alt={item.alt}
                />
              </div>
              <div className="p-4 ">
                <h4 className="text-base font-semibold text-gray-500 mb-2 capitalize transition-all duration-500 hover:text-gray-800 ">
                  {item.nome}
                </h4>
                <p className={`text-sm font-normal ${item.descricao.length < 25 ? "h-20" : ""} hidden md:inline text-gray-500 transition-all duration-500 leading-5 mb-5 overflow-y-scroll scrollbar-hide`}>
                  {item.descricao}
                </p>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                  Categoria: {item.categoria}
                </p>
                <a
                  href={item.linkDeCompra}
                  target="_blank"
                  className="bg-indigo-600 block shadow-sm rounded-md md:rounded-full py-2 px-5 text-xs text-white font-semibold"
                >
                  Ver produto...
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriaMegaPromocoes;
