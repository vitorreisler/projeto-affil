import { SiShopee } from "react-icons/si";


const CategoriaShopee = () => {
  const produtosShopee = [
    {
      id: "1",
      urlImg:
        "https://m.media-amazon.com/images/I/81ZvbEt1aAL._AC_SL1500_.jpg",
      nome: "Kindle 11ª Geração",
      descricao: "Mais leve, com resolução de 300 ppi e o dobro de armazenamento - Cor Preta",
      alt: "Kindle 11 geração",
      linkDeCompra: "https://amzn.to/4ar5WJt",
    },
    {
      id: "1",
      urlImg:
        "https://down-br.img.susercontent.com/file/sg-11134201-23010-0x1c686oopmvcb",
      nome: "Conjunto 10 em 1",
      descricao: "Contém: 4 tipos de colheres, 1 concha, 1 pegador, 1 fue",
      alt: "Kit cozinha",
      linkDeCompra: "abcdef",
    },
    
  ];
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl text-center p-3 bg-yellow-200 w-full inline">
        Promoções de itens da Shopee <SiShopee className="inline" />{" "}
      </h1>
      <div className=" gap-9 flex flex-wrap justify-center py-4">
        {produtosShopee.map((item, i) => {
          return (
            <div
              key={i}
              className="text-center  relative max-w-[12rem] border-2 shadow-[0_0_2px_#DC143C,inset_0_0_2px_#DC143C,0_0_5px_#DC143C,0_0_15px_#FF4500] rounded-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="block overflow-hidden object-cover">
                <img
                  className=" m-auto rounded-t-2xl "
                  src={item.urlImg}
                  alt={item.alt}
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                  {item.nome}
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                  {item.descricao}
                </p>
                <a
                  href={item.linkDeCompra}
                  target="_blank"
                  className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
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

export default CategoriaShopee;
