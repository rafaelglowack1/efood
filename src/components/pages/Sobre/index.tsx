import { SecaoSobre, TextSobre, TitleSobre, BtnSobre, ContainerSobre } from "./styles"
import { Pratos } from "../../../pratos"
import HeaderSobre from "../../HeaderSobre"
import Detalhes from "../../Detalhes"
import { useState } from "react"
import { GlobalStyle } from "../../../styles"

// Tipo do item do carrinho
export type ItemCarrinho = {
  nome: string;
  descricao: string;
  preco: number;
  img: string;
};

const Sobre = () => {
  const [ativo, setAtivo] = useState(false)
  const [pratoEnviado, setPratoEnviado] = useState<ItemCarrinho | null>(null)
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])

  const tipoSelecionado = localStorage.getItem("tipoSelecionado");
  const mostraInformacoes = () => setAtivo(!ativo)

  const pratosFiltrados = Pratos.filter(tp => tp.tipo === tipoSelecionado);
  const restaurante = pratosFiltrados[0]?.nome || "Restaurante";
  const tipo = tipoSelecionado || "Tipo";

  return (
    <>
      <GlobalStyle />
      <HeaderSobre
        restaurante={restaurante}
        tipo={tipo}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
      />
      <ContainerSobre>
        {pratosFiltrados.map((prato, i) => (
          <SecaoSobre key={i}>
            <img src={prato.img} alt={prato.nome} />
            <TitleSobre>{prato.nome}</TitleSobre>
            <TextSobre>{prato.descricao}</TextSobre>
            <BtnSobre
              as="button"
              onClick={() => {
                setPratoEnviado(prato)
                mostraInformacoes()
              }}
            >
              Adicionar
            </BtnSobre>
          </SecaoSobre>
        ))}

        {pratoEnviado && (
          <Detalhes
            open={ativo}
            eviarPrato={pratoEnviado}
            onClose={() => setAtivo(false)}
            setCarrinho={setCarrinho}
          />
        )}
      </ContainerSobre>
    </>
  )
}

export default Sobre
