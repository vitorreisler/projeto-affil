import { BsBagCheckFill } from "react-icons/bs";
import { produtosMercadoLivre } from "../../produtos/produtosMercadoLivre";
import Card from "@/components/card";
import Produtos from "@/components/produtos";


const CategoriaMercadoLivre = () => {
 
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl text-center p-3 bg-yellow-200 w-full inline">
        Promoções de itens do Mercado Livre <BsBagCheckFill className="inline" />{" "}
      </h1>
      <Produtos>
        {
          produtosMercadoLivre.map((item) => {
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

export default CategoriaMercadoLivre;
