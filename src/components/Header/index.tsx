import { Imagem,Text } from "./style";
import logo from '../../images/logo.svg'

const Header = () => (
    <Imagem>
        <img src={logo} alt="" />
        <Text >Viva experiências gastronômicas <br/> no conforto da sua casa</Text>
    </Imagem>
)

export default Header