import { SecaoSobre, TextSobre, TitleSobre, BtnSobre, ContainerSobre } from "./styles"
import { Pratos } from "../../../pratos"
import HeaderSobre from "../../HeaderSobre"
import Detalhes from "../../Detalhes"
import { useState } from "react"

const Sobre = () => {
  const [ativo, setAtivo] = useState(false)
  const [pratoEnviado, setPratoEnviado] = useState({})
  const tipoSelecionado = localStorage.getItem("tipoSelecionado");
  const mostraInformacoes =() =>  setAtivo(!ativo)

  const pratosFiltrados = Pratos.filter(tp => tp.tipo === tipoSelecionado);
  const restaurante = pratosFiltrados[0]?.nome || "Restaurante";
  const tipo = tipoSelecionado || "Tipo";

  return(
  <>
  <HeaderSobre restaurante={restaurante} tipo={tipo} />
  <ContainerSobre>
    {Pratos.filter(tp => tp.tipo === tipoSelecionado)
    .map((prato, i) => {
        return (
      <SecaoSobre key={i}>
        <img src={prato.img} alt={prato.nome} />
        <TitleSobre>{prato.nome}</TitleSobre>
        <TextSobre>{prato.descricao}</TextSobre>
        <TextSobre>R$ {prato.preco.toFixed(2)}</TextSobre>
        <BtnSobre as="button" onClick={() => {
          setPratoEnviado(prato)
          mostraInformacoes()
        }}  >Adicionar</BtnSobre>
      </SecaoSobre>
        )
    })}
    <Detalhes open={ativo} eviarPrato={pratoEnviado} onClose={() => setAtivo(false)} />
  </ContainerSobre>
  </>
)}


export default Sobre