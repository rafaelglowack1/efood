// Detalhes.tsx
import { Carrinho } from "../../pratos";
import { Title, Text } from "../Body/style"
import { SecaoDetalhes, Card, BotaoComprar, BotaoCancelar } from "./styles"

type DetalhesProps = {
  open: boolean,
  eviarPrato: {
    nome?: string;
    descricao?: string;
    preco?: number;
    img?: string;
  },
  onClose: () => void;
}

const Detalhes = ({ open, eviarPrato,onClose }: DetalhesProps) => (
  <SecaoDetalhes open={open}>
    <Card>
      <img src={eviarPrato.img} alt="" />
      <Title>{eviarPrato.nome}</Title>
      <Text>{eviarPrato.descricao}</Text>
      <Text>R${eviarPrato.preco?.toFixed(2)}</Text>
      <BotaoComprar type="button" onClick={() => {
        // colocar eviarPrato no carrinho
        Carrinho.push(eviarPrato);
        onClose()
      }}>Adicionar ao carrinho</BotaoComprar>
      <BotaoCancelar type="button" onClick={onClose}>Cancelar</BotaoCancelar>

    </Card>
  </SecaoDetalhes>
)

export default Detalhes

