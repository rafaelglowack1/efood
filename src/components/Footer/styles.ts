import styled from "styled-components";
import fundo from '../../images/fundo.png'
import { cores } from "../../styles";

export const Container = styled.div`
    margin-top: 120px;   
    width: 100%;
    height: 384px;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const Div = styled.div`
    width: 480px;
    margin: 60px auto;

    p{
        color:${cores.laranja};
        font-size: 12px;
        text-align: center;
    }
`
export const Img = styled.div`
    img{
        display: block;
        margin: 0 auto;
        padding: 60px 0 30px 0; 
    }
`
export const Lista = styled.ul`
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 8px; 

  li {
    list-style: none;
    
  }
`;

export const Link = styled.a`
    cursor: pointer;
    img{
        width: 40px
    }
`
