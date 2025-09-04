
import { Title } from "../Body/style"
import { SecaoDetalhes, Card, BotaoComprar, Overlay, TextDes } from "./styles"
import { useDispatch } from "react-redux";
import { addItem } from "../../Store/reducers/cart";
import type { Cardapio } from "../Body";

type DetalhesProps = {
  open: boolean;
  eviarPrato: Cardapio;
  onClose: () => void;
}

const Detalhes = ({ open, eviarPrato, onClose, }: DetalhesProps) => {

  const dispatch = useDispatch()

  return(
  <SecaoDetalhes open={open}>
    <Overlay onClick={onClose} />
    <Card>
      <img src={eviarPrato.foto} alt={eviarPrato.nome} />
      <div>
        <Title>{eviarPrato.nome}</Title>
        <TextDes>{eviarPrato.descricao}</TextDes>
        <TextDes>Serve: {eviarPrato.porcao}</TextDes>
        <BotaoComprar
          type="button"
          onClick={() => {
            dispatch(addItem(eviarPrato))
            onClose();
          }}
        >
          Adicionar ao carrinho - R$ {eviarPrato.preco.toFixed(2)}
        </BotaoComprar>
      </div>
    </Card>
  </SecaoDetalhes>
)}

export default Detalhes
