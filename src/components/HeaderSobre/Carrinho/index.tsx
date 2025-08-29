import { Carrinho as ListaCarrinho } from "../../../pratos";
import lixo from "../../../images/trash.png";
import { Btn, Caixa, Div, Preco, Trash } from "../style";

type Props = {
  total: number;
  onContinuar: () => void;
};

const Carrinho = ({ total, onContinuar }: Props) => (
  <>
    <div>
      {ListaCarrinho.map((carr, i) => (
        <Caixa key={i}>
          <Div>
            <img src={carr.img} alt="" />
          </Div>
          <Div>
            <h3>{carr.nome}</h3>
            <p>R$ {carr.preco.toFixed(2)}</p>
          </Div>
          <Trash>
            <img src={lixo} alt="Remover" />
          </Trash>
        </Caixa>
      ))}
    </div>
    <Preco>
      <p>Valor Total:</p>
      <p>R$ {total.toFixed(2)}</p>
    </Preco>
    <Btn onClick={onContinuar}>Continuar com a entrega</Btn>
  </>
);

export default Carrinho;
