import { produtosMagalu } from "../../produtos/produtosMagalu";
import Card from "@/components/card";
import Produtos from "@/components/produtos";

const CategoriaMagalu = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-6xl text-center p-3 bg-yellow-200 w-full inline">
        Produtos da Magalu {" "}
      </h1>
      <Produtos>
        {produtosMagalu.map((item) => {
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
          );
        })}
      </Produtos>
    </section>
  );
};

export default CategoriaMagalu;
