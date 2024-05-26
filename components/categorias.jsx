import Image from "next/image";

const Categorias = () => {
    const categoriasData = [
        {
            urlImg:"https://impulse.net.br/wp-content/uploads/2017/07/101783-gestao-do-conhecimento-como-aplicar-na-empresa-e-seus-beneficios-1-e1499257304530.jpg",
            alt:"Hotmart",
            tituloCategoria:"Hotmart",
            descricaoCategoria:"Quer aprender ? Na Hotmart existe um curso para você!",
            to:"/hotmart",
        },
        {
            urlImg:"https://m.media-amazon.com/images/I/617-HLllfZL._AC_SL1000_.jpg",
            alt:"Amazon",
            tituloCategoria:"Amazon",
            descricaoCategoria:"Promoções da Amazon!",
            to:"/amazon",
        },
        {
            urlImg:"https://down-cvs-br.img.susercontent.com/br-11134207-7qukw-lh52iekd6ivfbc.webp",
            alt:"Shopee",
            tituloCategoria:"Shopee",
            descricaoCategoria:"Descontinhos na Shopee",
            to:"/shopee",
        },
        {
            urlImg:"http://construrezende.com/product_images/c/426/torneira-para-lavatorio-de-mesa-bica-alta-soul-cromada-deca-1228584-foto-3643c370-b9b2-421a-b5b8-20e661be67b9_%281%29__30926_zoom.jpg",
            alt:"Mercado Livre",
            tituloCategoria:"Mercado Livre",
            descricaoCategoria:"A melhor seleção de itens do Mercado Livre!",
            to:"/mercado-livre",
        },
    ]
  return (
    <section className=" gap-5 flex flex-wrap justify-center">
        {categoriasData.map((item,i) => {
            return (
                <div key={i} className="text-center shadow-lg relative max-w-[12rem] border border-solid border-gray-200 rounded-2xl transition-all duration-500 hover:scale-105">
                <div className="block overflow-hidden object-cover">
                  <img
                    className=" m-auto rounded-t-2xl "
                    src={item.urlImg}
                    alt={item.alt}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                   {item.tituloCategoria}
                  </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                    {item.descricaoCategoria}
                  </p>
                  <a
                    href={item.to}
                    className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold"
                  >
                    Ver mais...
                  </a>
                </div>
              </div>
        
            )
        })}

     
    </section>
  );
};

export default Categorias;
