import styled from "styled-components";
import FundoPerfil from "../../images/fundoperfil.png"
import { Background } from "../Header/style";
import { cores } from "../../styles";

interface SidebarProps {
  open: boolean;
}

export const BackgroundSobre = styled(Background)`
    height: 140px;
    
`
export const Box = styled.div`
  margin: 0 auto;
  display: flex;
  width: 1024px; 
  justify-content: space-between;
  font-weight: bold;          
`
export const Components = styled.div`
  display: flex;
  align-items: center; 
  cursor: pointer;
  color: ${cores.laranja};
    margin: 0 20px 0  0 ;

  span{
    margin-right: 8px;  
  }

  a{
    text-decoration: none;
    color: ${cores.laranja};
  }
`
export const SideBar = styled.div<SidebarProps>`
  width: 450px;
  height: 100vh;
  background-color: ${cores.laranja};
  color: ${cores.bege};
  position: fixed;
  top: 0;
  right: 0;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 10;

`
export const Img = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  background-image: url(${FundoPerfil});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0; /* top:0, right:0, bottom:0, left:0 */
    background: rgba(0, 0, 0, 0.5); /* preto 50% */
  }

  section {
    width: 1024px;
    margin: 0 auto;
    

    div {
      color: ${cores.bege};
      font-size: 20px;
      padding-top: 20px;
      z-index: 1;
      position: absolute;
    }

    div:nth-child(2) {
      font-size: 28px;
      font-weight: bold;
      color: ${cores.branco};
      bottom: 12px;
    }
  }
`
export const Overlay = styled.div<SidebarProps>`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 5; 
`
export const Caixa = styled.div`
  width: 90%;
  margin: 20px auto 0px;
  border-radius: 4px;
  height: 124px;
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.laranja};
`;
export const Div = styled.div`
    h3{
      width: 180px;
      text-align: center;
      margin: 20px 12px ;
      padding: 6px;
    }

    p{
      text-align: center;
      margin: 12px 0 12px 0;
    }
    

    img {
      width: 100px;
      display: block;
      height: 100px;
      border-radius: 4px; 
      padding: 12px;
    }

`
export const Trash = styled.div`
  width: 50px;
  display: block;
  margin: 40px 0 0 12px;

  img{
    width: 26px;
    cursor: pointer;

    
  }
`
export const Btn = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  width: 90%;
  display: block;
  margin: 10px auto;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
`
export const Preco = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto 12px;
  padding: 12px;

`