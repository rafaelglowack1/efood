import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Btn } from "../style";
import { Paragrafo } from "./style";

import { clearCart } from "../../../Store/reducers/cart";

type Props = {
  orderId: string | number | null;
};

const MensagemFinal = ({ orderId }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const concluirPedido = () => {

    dispatch(clearCart()); 
    navigate("/"); 
  };

  return (
    <div>
      <h2 style={{ margin: "20px" }}>Pedido realizado - {orderId}</h2>
      <Paragrafo>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</Paragrafo>
      <Paragrafo>Nossos entregadores não estão autorizados a realizar cobranças extras.</Paragrafo>
      <Paragrafo>Lembre-se de higienizar as mãos após receber o pedido, garantindo sua segurança.</Paragrafo>
      <Paragrafo>Esperamos que desfrute de uma deliciosa experiência gastronômica. Bom apetite!</Paragrafo>

      <Btn onClick={concluirPedido}>Concluir</Btn>
    </div>
  );
};

export default MensagemFinal;

