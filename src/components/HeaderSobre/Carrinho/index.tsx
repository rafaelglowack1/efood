import lixo from "../../../images/trash.png";
import { Btn, Caixa, Div, Preco, Trash } from "../style";
import type { ItemCarrinho } from "../../pages/Sobre";

type Props = {
  itens: ItemCarrinho[];
  setItens: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
  onContinuar: () => void;
};

const Carrinho = ({ itens, setItens, onContinuar }: Props) => {
  const removerItem = (index: number) => {
    setItens(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        {itens.map((carr, i) => (
          <Caixa key={i}>
            <Div>
              <img src={carr.img} alt={carr.nome} />
            </Div>
            <Div>
              <h3>{carr.nome}</h3>
              <p>R$ {carr.preco.toFixed(2)}</p>
            </Div>
            <Trash onClick={() => removerItem(i)}>
              <img src={lixo} alt="Remover" />
            </Trash>
          </Caixa>
        ))}
      </div>

      <Preco>
        <p>Valor Total:</p>
        <p>R$ {itens.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}</p>
      </Preco>

      <Btn onClick={onContinuar}>Continuar com a entrega</Btn>
    </>
  );
};

export default Carrinho;
