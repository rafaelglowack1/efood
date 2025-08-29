import { Secao, Text, Title, Botao, Tipo, TipoContainer, Container } from "./style"

import italiana from '../../images/italiana.png'
import pizza from '../../images/pizza.png'
import sushi from '../../images/sushi.png' 
import { Link } from "react-router-dom"


const Body = () => {

    return(
    <Container>
        {/* Italiana */}
        <Secao>
            <TipoContainer>
                <Tipo>
                    <p>Destaque da semana</p>
                </Tipo>
                <Tipo>
                    <p>Italiana</p>
                </Tipo>
                
            </TipoContainer>
            <img src={italiana} alt="italiana" />
            <Title>La Dolce Vita Trattoria</Title>
            <Text>A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!</Text>
            <Link to="/sobre"><Botao onClick={() => {
                localStorage.setItem("tipoSelecionado", "italiana");
            }}>Saiba mais</Botao></Link>

        </Secao>
        {/* brasileira */}
        <Secao>
            <TipoContainer>
                <Tipo>
                    <p>Brasileira</p>
                </Tipo>
            </TipoContainer>
            <img src={pizza} alt="pizza" />
            <Title>A Forno & Sabor Pizzaria</Title>
            <Text>A Forno & Sabor Pizzaria traz a verdadeira pizza artesanal para sua casa! Saboreie massas frescas, molhos especiais e combinações irresistíveis, assadas no ponto perfeito. <br/> Peça agora e sinta o sabor da tradição!</Text>
            <Link to="/sobre"><Botao onClick={() => {
                localStorage.setItem("tipoSelecionado", "brasileira");
            }}>Saiba mais</Botao></Link>
        </Secao>
        {/* Mexicana */}
        <Secao>
            <TipoContainer>
                <Tipo>
                    <p>Mexicana</p>
                </Tipo>
            </TipoContainer>
            <img src={pizza} alt="pizza" />
            <Title>A Forno & Sabor Pizzaria</Title>
            <Text>A Forno & Sabor Pizzaria traz a verdadeira pizza artesanal para sua casa! Saboreie massas frescas, molhos especiais e combinações irresistíveis, assadas no ponto perfeito. <br/> Peça agora e sinta o sabor da tradição!</Text>
            <Link to="/sobre"><Botao onClick={() => {
                localStorage.setItem("tipoSelecionado", "mexicana");
            }}>Saiba mais</Botao></Link>
        </Secao>
        {/* japonesa */}
        <Secao>
            <TipoContainer>
                <Tipo>
                    <p>Japonesa</p>
                </Tipo>
            </TipoContainer>
            <img src={sushi} alt="sushi" />
            <Title>Hioki Sushi</Title>
            <Text>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Text>
            <Link to="/sobre"><Botao onClick={() => {
                localStorage.setItem("tipoSelecionado", "japonesa");
            }}>Saiba mais</Botao></Link>
        </Secao>
    </Container>

)}
export default Body