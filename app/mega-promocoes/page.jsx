import { GiFireworkRocket } from "react-icons/gi";
import { produtosMegaPromocoes } from "../../produtos/produtosMegaPromocoes";
import Card from "@/components/card";
import Produtos from "@/components/produtos";


const CategoriaMegaPromocoes = () => {
  
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl text-center p-3 bg-yellow-300 w-full inline">
        Mega Promoções  <GiFireworkRocket className="inline" />{" "}
      </h1>
      <Produtos>
        {
          produtosMegaPromocoes.map((item) => {
            return (
              <Card
              key={item.id}
              urlImg={item.urlImg}
              titulo={item.nome}
              descricao={item.descricao}
              categoria={item.categoria}
              linkDeCompra={item.linkDeCompra}
              alt={item.alt}
            />
            )
          } )
        }
      </Produtos>
    </section>
  );
};

export default CategoriaMegaPromocoes;
