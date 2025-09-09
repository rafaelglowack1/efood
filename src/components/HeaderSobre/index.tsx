import { useState } from "react";
import logo from "../../images/logo.svg";
import { BackgroundSobre, Box, Components, SideBar, Img, Overlay } from "./style";
import { Link } from "react-router-dom";
import Carrinho from "./Carrinho";
import FormularioEntrega from "./FormularioEntrega";
import type { DeliveryFormValues } from "./FormularioEntrega";
import Pagamento from "./Pagamentos";
import MensagemFinal from "./MensagemFinal";
import type { RootState } from "../../Store"; // ajuste se necessário
import { useSelector } from "react-redux";

type Props = {
  capa: string;
  restaurante: string;
  tipo: string;
};

const HeaderSobre = ({ restaurante, tipo, capa }: Props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const [deliveryData, setDeliveryData] = useState<DeliveryFormValues | null>(null);
  const [orderId, setOrderId] = useState<string | number | null>(null);

  const toggleSidebar = () => setSideOpen(!sideOpen);

  const itensCarrinho = useSelector((state: RootState) => state.cart.items);

    // recebe os valores do formulário de entrega (child -> parent)
  const handleFinalizarEntrega=  (values: DeliveryFormValues) => {
    setOrderId(orderId);
    setDeliveryData(values);
    setMostrarFormulario(false);
    setMostrarPagamento(true);
  }

  // chamado quando o pagamento for concluído com sucesso
  const handlePagamentoConcluido = () => {
    setPedidoFinalizado(true);
    setMostrarPagamento(false);
    setMostrarFormulario(false);
  }

  return (
    <>
      <BackgroundSobre>
        <Box>
          <Components>
            <Link to="/">Restaurantes</Link>
          </Components>

          <Components>
            <img src={logo} alt="Logo" />
          </Components>

          <Components onClick={toggleSidebar}>
            <span>{itensCarrinho.length}</span> produto(s) no carrinho
          </Components>

          <Overlay open={sideOpen} onClick={toggleSidebar} />

          <SideBar open={sideOpen}>
            {/* Carrinho */}
            {!mostrarFormulario && !mostrarPagamento && !pedidoFinalizado && (
              <Carrinho
                onContinuar={() => setMostrarFormulario(true)}
              />
            )}

            {/* Formulário de entrega */}
            {mostrarFormulario && !mostrarPagamento && !pedidoFinalizado && (
              <FormularioEntrega
                onFinalizar={handleFinalizarEntrega}
                onVoltar={() => setMostrarFormulario(false)}
              />
            )}

            {/* Pagamento */}
            {mostrarPagamento && !pedidoFinalizado && deliveryData && (
              <Pagamento
                delivery={deliveryData}
                onPagarConcluido={handlePagamentoConcluido}
                onVoltar={() => {
                  setMostrarPagamento(false);
                  setMostrarFormulario(true);
                }}
              />
            )}


            {/* Mensagem final */}
            {pedidoFinalizado && (
              <MensagemFinal orderId={orderId} />
            )}
          </SideBar>
        </Box>
      </BackgroundSobre>

      <Img capa={capa}>
        <section>
          <div>{tipo}</div>
          <div>{restaurante}</div>
        </section>
      </Img>
    </>
  );
};

export default HeaderSobre;
