import { FaAmazon } from "react-icons/fa";
import { produtosAmazon } from "../../produtos/produtosAmazon";
import Card from "../../components/card";
import Produtos from "../../components/produtos";

const CategoriaAmazon = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl text-center p-3 bg-yellow-200 w-full inline">
        Promoções de itens da Amazon <FaAmazon className="inline" />{" "}
      </h1>
      <Produtos>
        {
          produtosAmazon.map((item) => {
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

export default CategoriaAmazon;
