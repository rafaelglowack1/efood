import { Secao, Text, Title, Botao, Tipo, TipoContainer, Container, Header, Avaliacoes } from "./style"
import estrela from "../../images/estrela.png"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export interface Cardapio {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}
export interface Restaurantes {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Cardapio[]

}

const Body = () => {
  const [dadosRestaurantes, setDadosRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((resposta) => resposta.json())
      .then((dados: Restaurantes[]) => {
        setDadosRestaurantes(dados)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Container>
      {dadosRestaurantes.map((rest) => (
        <Secao key={rest.id}>
          <TipoContainer>
            {rest.destacado && (
              <Tipo>
                <p>Destaque da semana</p>
              </Tipo>
            )}
            <Tipo>
              <p>{rest.tipo}</p>
            </Tipo>
          </TipoContainer>
          <img src={rest.capa} alt={rest.tipo} />
          <Header>
            <Title>{rest.titulo}</Title>
            <Avaliacoes>
                <p>{rest.avaliacao}</p>
                <img src={estrela} alt="" />
                
            </Avaliacoes>
          </Header>
          <Text>{rest.descricao}</Text>
          <Link to={`/sobre/${rest.id}`}>
            <Botao
              onClick={() => {
                localStorage.setItem("tipoSelecionado", `${rest.tipo}`)
              }}
            >
              Saiba mais
            </Botao>
          </Link>
        </Secao>
      ))}
    </Container>
  )
}

export default Body

