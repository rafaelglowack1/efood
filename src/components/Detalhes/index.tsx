import type { ItemCarrinho } from "../pages/Sobre"; 
import { Title, Text } from "../Body/style"
import { SecaoDetalhes, Card, BotaoComprar, Overlay } from "./styles"

type DetalhesProps = {
  open: boolean;
  eviarPrato: ItemCarrinho;
  onClose: () => void;
  setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
}

const Detalhes = ({ open, eviarPrato, onClose, setCarrinho }: DetalhesProps) => (
  <SecaoDetalhes open={open}>
    <Overlay onClick={onClose} />
    <Card>
      <img src={eviarPrato.img} alt={eviarPrato.nome} />
      <div>
        <Title>{eviarPrato.nome}</Title>
        <Text>{eviarPrato.descricao}</Text>
        <Text>Serve: de 3 a 3 pessoas</Text>
        <BotaoComprar
          type="button"
          onClick={() => {
            setCarrinho(prev => [...prev, eviarPrato]);
            onClose();
          }}
        >
          Adicionar ao carrinho - R$ {eviarPrato.preco.toFixed(2)}
        </BotaoComprar>
      </div>
    </Card>
  </SecaoDetalhes>
)

export default Detalhes
