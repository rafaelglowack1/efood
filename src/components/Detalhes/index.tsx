import type { ItemCarrinho } from "../pages/Sobre"; 
import { Title } from "../Body/style"
import { SecaoDetalhes, Card, BotaoComprar, Overlay, TextDes } from "./styles"

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
        <TextDes>{eviarPrato.descricao}</TextDes>
        <TextDes>Serve: {eviarPrato.serve}</TextDes>
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
