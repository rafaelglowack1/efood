import styled from "styled-components";
import fundo from '../../images/fundo.png'
import { cores } from "../../styles";

export const Imagem = styled.div`
    width: 100%;
    height: 384px;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    img {
        display: block;
        margin: 0 auto;
        padding: 40px 0 58px;
        width: 125px;
    }
`
export const Text = styled.p`
    font-size: 36px;
    font-weight: 900;
    color: ${cores.laranja};
    text-align: center;
    padding-top: 80px;
`
