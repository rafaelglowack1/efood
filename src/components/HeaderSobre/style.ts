import styled from "styled-components";
import { Background } from "../Header/style";
import { cores } from "../../styles";

interface ImgProps {
  capa: string
}
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

  padding: 4px;

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 10;

`
export const Img = styled.div<ImgProps>`
  width: 100%;
  height: 240px;
  position: relative;
  background-image: ${({ capa }) => `url(${capa})`};
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
  position: relative;
  width: 100%;
  margin: 20px auto 0px;
  border-radius: 2px;
  height: auto;
  display: flex;
  background-color: ${cores.bege};
  color: ${cores.laranja};
`;
export const Div = styled.div`
    
    h3{
      width: 180px;
      margin: 20px 0;
    }

    p{
      margin: 12px 0 12px 0;
      font-size: 14px;
    }
    

    img {
      width: 100px;
      display: block;
      height: 100px;
      border-radius: 2px; 
      padding: 12px;
    }

`
export const Trash = styled.div`
  width: 50px;
  display: block;
  position: absolute;
  top: 50px;
  right: 0;

  img{
    width: 20px;
    cursor: pointer;

    
  }
`
export const Btn = styled.button`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  width: 100%;
  display: block;
  margin: 2px auto 0 0;
  font-size: 16px;
  font-weight: bold;
  border: none;
  padding: 6px;
  border-radius: 2px;
  cursor: pointer;
`
export const Preco = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto 12px;
  padding: 12px;

`