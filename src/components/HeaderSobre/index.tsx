import { useState } from "react";
import logo from "../../images/logo.svg";
import { BackgroundSobre, Box, Components, SideBar, Img, Overlay } from "./style";
import { Link } from "react-router-dom";
import Carrinho from "./Carrinho";
import FormularioEntrega from "./FormularioEntrega";
import Pagamento from "./Pagamentos";
import MensagemFinal from "./MensagemFinal";
import type { ItemCarrinho } from "../pages/Sobre";

type Props = {
  capa: string
  restaurante: string;
  tipo: string;
  carrinho: ItemCarrinho[];
  setCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[]>>;
};

const HeaderSobre = ({ restaurante, tipo, carrinho, setCarrinho, capa }: Props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarPagamento, setMostrarPagamento] = useState(false);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const toggleSidebar = () => setSideOpen(!sideOpen);

  return (
    <>
      <BackgroundSobre>
        <Box>
          <Components><Link to="/">Restaurantes</Link></Components>
          <Components><img src={logo} alt="Logo" /></Components>
          <Components onClick={toggleSidebar}>
            <span>{carrinho.length}</span> produto(s) no carrinho
          </Components>

          <Overlay open={sideOpen} onClick={toggleSidebar} />

          <SideBar open={sideOpen}>
            {!mostrarFormulario && !mostrarPagamento && !pedidoFinalizado && (
              <Carrinho
                itens={carrinho}
                setItens={setCarrinho}
                onContinuar={() => setMostrarFormulario(true)}
              />
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
              <MensagemFinal
                setCarrinho={setCarrinho}
                onFechar={() => {
                  setSideOpen(false);
                  setPedidoFinalizado(false);
                }}
              />
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
