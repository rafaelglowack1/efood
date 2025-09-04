import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalStyle } from "../../../styles"
import { SecaoSobre, TextSobre, TitleSobre, BtnSobre, ContainerSobre } from "./styles"
import HeaderSobre from "../../HeaderSobre"
import Detalhes from "../../Detalhes" // use o arquivo de tipos centralizado
import type { Restaurantes } from "../../Body"

// Tipo do item do carrinho
export type ItemCarrinho = {
  nome: string
  descricao: string
  preco: number
  img: string
  serve: string
}

const Sobre = () => {
  const { id } = useParams<{ id: string }>()
  const [dadosRestaurante, setDadosRestaurante] = useState<Restaurantes | null>(null)
  const [ativo, setAtivo] = useState(false)
  const [pratoEnviado, setPratoEnviado] = useState<ItemCarrinho | null>(null)
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])

  const mostraInformacoes = () => setAtivo(!ativo)

  useEffect(() => {
    if (!id) return

    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then(res => res.json())
      .then((dados: Restaurantes[]) => {
        console.log("Todos os restaurantes:", dados)
        const encontrado = dados.find(r => r.id === Number(id))
        console.log("Restaurante encontrado:", encontrado)
        setDadosRestaurante(encontrado || null)
      })
      .catch(console.error)
  }, [id])

  return (
    <>
      <GlobalStyle />
      <HeaderSobre
        capa={dadosRestaurante?.capa || ""}
        restaurante={dadosRestaurante?.titulo || ""}
        tipo={dadosRestaurante?.tipo || ""}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
      />
      <ContainerSobre>
        {dadosRestaurante?.cardapio.map((prato) => (
          <SecaoSobre key={prato.id}>
            <img src={prato.foto} alt={prato.nome} />
            <TitleSobre>{prato.nome}</TitleSobre>
            <TextSobre>{prato.descricao}</TextSobre>
            <BtnSobre
              as="button"
              onClick={() => {
                setPratoEnviado({
                  nome: prato.nome,
                  descricao: prato.descricao,
                  preco: prato.preco,
                  img: prato.foto,
                  serve: prato.porcao
                })
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
