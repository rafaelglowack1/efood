import {Background, Text } from "./style";
import logo from '../../images/logo.svg'


const Header = () => (
    <Background>
        <img src={logo} alt="" />
        <Text >Viva experiências gastronômicas <br/> no conforto da sua casa</Text>
    </Background>
)

export default Header