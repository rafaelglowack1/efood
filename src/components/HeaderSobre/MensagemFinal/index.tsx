import { Btn } from "../style";
import { Paragrafo } from "./style";
import type { ItemCarrinho } from "../../pages/Sobre";

type Props = {
  onFechar: () => void;
  setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
};

const MensagemFinal = ({ onFechar, setCarrinho }: Props) => (
  <div>
    <h2 style={{ margin: "20px" }}>Pedido realizado - {'{'}ORDER_Id{'}'}</h2>
    <Paragrafo>
      Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
    </Paragrafo>
    <Paragrafo>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
    </Paragrafo>
    <Paragrafo>
      Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </Paragrafo>
    <Paragrafo>
      Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
    </Paragrafo>

    <Btn
      onClick={() => {
        setCarrinho([]); // esvazia o carrinho corretamente
        onFechar();
      }}
    >
      Concluir
    </Btn>
  </div>
);

export default MensagemFinal;
