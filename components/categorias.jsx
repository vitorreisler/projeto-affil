const Categorias = () => {
  const categoriasData = [
    {
      urlImg: "https://m.media-amazon.com/images/I/617-HLllfZL._AC_SL1000_.jpg",
      alt: "Amazon",
      tituloCategoria: "Amazon",
      descricaoCategoria: "",
      to: "/amazon",
    },
    {
      urlImg:
        "https://down-cvs-br.img.susercontent.com/br-11134207-7qukw-lh52iekd6ivfbc.webp",
      alt: "Shopee",
      tituloCategoria: "Shopee",
      descricaoCategoria: "",
      to: "/shopee",
    },
    {
      urlImg:
        "https://a-static.mlcdn.com.br/800x560/smart-tv-hd-led-32-samsung-t4300-wi-fi-hdr-2-hdmi-1-usb/magazineluiza/225608200/46a9481fcf16f6013036bcda7b4e9742.jpg",
      alt: "magalu",
      tituloCategoria: "magalu",
      descricaoCategoria: "",
      to: "/magalu",
    },
    {
      urlImg:
        "https://img.freepik.com/vetores-gratis/tecnologia-anti-gravidade-com-elementos_23-2148085009.jpg?w=740&t=st=1719004464~exp=1719005064~hmac=1a0a829c0ffdff35e38579c04c8a8e35d0e1714bf7c5cb27a1e61bb74bdbc175",
      alt: "Cursos",
      tituloCategoria: "Cursos",
      descricaoCategoria: "",
      to: "/cursos",
    },
    /*{
      urlImg:
        "https://http2.mlstatic.com/D_NQ_NP_2X_693684-MLB54835234994_042023-F.webp",
      alt: "Mercado Livre",
      tituloCategoria: "Mercado Livre",
      descricaoCategoria: "",
      to: "/mercado-livre",
    },*/
  ];
  return (
    <>
      <section className=" gap-5 grid  grid-cols-2  md:grid-cols-4 md:items-center pb-5   border border-gray-200 rounded-lg shadow-md w-full ">
        <h1 className="text-3xl col-span-2 text-center bg-yellow-300 p-4  md:col-span-4 rounded-t-md ">
          Achadinhos
        </h1>
        {categoriasData.map((item, i) => {
          return (
            <div
              key={i}
              className="text-center md:mx-auto shadow-md hover:shadow-lg relative max-w-[12rem] border border-solid border-gray-200 rounded-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="block overflow-hidden object-cover md:min-h-[200px]">
                <a href={item.to}>
                  <img
                    className=" m-auto rounded-t-2xl "
                    src={item.urlImg}
                    alt={item.alt}
                  />
                </a>
              </div>
              <div className="mb-7">
                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                  {item.tituloCategoria}
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                  {item.descricaoCategoria}
                </p>
                <a
                  href={item.to}
                  className="bg-yellow-300 shadow-sm rounded-md py-2 px-3 sm:px-5 text-xs text-black font-semibold duration-700 hover:bg-black hover:text-white"
                >
                  Ver categoria...
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Categorias;
