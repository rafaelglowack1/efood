import { Container, Div, Link, Lista, Img } from "./styles"

import logo from '../../images/logo.svg'
import instagram from '../../images/instagram.png'
import facebook from '../../images/fb.png'
import twitter from '../../images/twitter.png'

const Footer = () => (
   <Container>
        <Div>
            <Img><img src={logo} alt="EFOOD" /></Img>
            
        </Div>
        <Div>
            <Lista>
                <li>
                    <Link><img src={instagram} alt="instagram" /></Link>
                </li>
                <li>
                    <Link><img src={facebook} alt="facebook" /></Link>
                </li>
                <li>
                    <Link><img src={twitter} alt="twitter" /></Link>
                </li>
            </Lista>
        </Div>
        <Div>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
        </Div>
    
   </Container>
)
export default Footer