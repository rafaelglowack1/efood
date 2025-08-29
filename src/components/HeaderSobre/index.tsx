import { useState } from "react";
import logo from "../../images/logo.svg";
import { BackgroundSobre, Box, Components, SideBar, Img, Overlay } from "./style";
import { Link } from "react-router-dom";
import Carrinho from "./Carrinho";
import FormularioEntrega from "./FormularioEntrega";
import Pagamento from "./Pagamentos";
import MensagemFinal from "./MensagemFinal";
import { Carrinho as ListaCarrinho } from "../../pratos";

type Props = {
  restaurante: string;
  tipo: string;
};

const HeaderSobre = ({ restaurante, tipo }: Props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const total = ListaCarrinho.reduce((acc, item) => acc + item.preco, 0);
  const toogleSidebar = () => setSideOpen(!sideOpen);

  return (
    <>
      <BackgroundSobre>
        <Box>
          <Components><Link to="/">Restaurantes</Link></Components>
          <Components><img src={logo} alt="Logo" /></Components>
          <Components onClick={toogleSidebar}>
            <span>{ListaCarrinho.length}</span> produto(s) no carrinho
          </Components>

          <Overlay open={sideOpen} onClick={toogleSidebar} />

          <SideBar open={sideOpen}>
            {!mostrarFormulario && !mostrarPagamento && !pedidoFinalizado && (
              <Carrinho total={total} onContinuar={() => setMostrarFormulario(true)} />
            )}

            {mostrarFormulario && !mostrarPagamento && !pedidoFinalizado && (
              <FormularioEntrega
                onFinalizar={() => setMostrarPagamento(true)}
                onVoltar={() => setMostrarFormulario(false)}
              />
            )}

            {mostrarPagamento && !pedidoFinalizado && (
              <Pagamento
                onPagar={() => {
                  setPedidoFinalizado(true);
                  setMostrarPagamento(false);
                  setMostrarFormulario(false);
                }}
                onVoltar={() => {
                  setMostrarPagamento(false);
                  setMostrarFormulario(true);
                }}
              />
            )}

            {pedidoFinalizado && (
              <MensagemFinal onFechar={() => {
                setSideOpen(false);
                setPedidoFinalizado(false);
              }} />
            )}
          </SideBar>
        </Box>
      </BackgroundSobre>

      <Img>
        <section>
          <div>{tipo}</div>
          <div>{restaurante}</div>
        </section>
      </Img>
    </>
  );
};

export default HeaderSobre;
