import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "../../../Store";
import { removeItem } from "../../../Store/reducers/cart";

import lixo from "../../../images/trash.png";
import { Btn, Caixa, Div, Preco, Trash } from "../style";

const Carrinho = ({ onContinuar }: { onContinuar: () => void }) => {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootState) => state.cart.items);

  const valorTotal = itens.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  return (
    <>
      <div style={{padding: '8px' }}>
        {itens.length === 0 ? (
          <h2 style={{margin: "20px"}}>O carrinho está vazio</h2>
        ) : (
          itens.map((item) => (
            <Caixa key={item.id}>
              <Div>
                <img src={item.foto} alt={item.nome} />
              </Div>
              <Div>
                <h3>{item.nome}</h3>
                <p style={{fontWeight: 400, fontSize: '16px'}}>
                  R$ {(item.preco * item.quantity).toFixed(2)}
                </p>
              </Div>
              <Trash onClick={() => dispatch(removeItem(item.id))}>
                <img src={lixo} alt="Remover" />
              </Trash>
            </Caixa>
          ))
        )}
      </div>

      {itens.length > 0 && (
        <div style={{padding: '8px' }}>
          <Preco>
            <p>Valor Total:</p>
            <p>R$ {valorTotal.toFixed(2)}</p>
          </Preco>

          <Btn onClick={onContinuar}>Continuar com a entrega</Btn>
        </div>
      )}
    </>
  );
};

export default Carrinho;
