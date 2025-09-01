import styled from "styled-components";
import { cores } from "../../styles";
export type Props = {
    open?: boolean
}

export const SecaoDetalhes = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); 
  display: ${({ open }) => (open ? "flex" : "none")}; 
  align-items: center;
  justify-content: center;
  z-index: 10;
`
export const Card = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.branco};
  padding: 32px;
  display: flex;
  border-radius: 2px;
  width: 1024px;
  max-width: 90%;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.48);
  position: relative;

  div{
    margin-left: 20px;
  }

    img {
        width: 280px;
        height: 280px;
        object-fit: cover;
        border-radius: 2px
    }
`

export const BotaoComprar = styled.button`
    background-color: ${cores.bege};
    color: ${cores.laranja};
    cursor: pointer;
    border-radius: 2px;
    font-weight: bold;
    border: none;
    padding: 8px;
    margin-left: 6px;
    position: absolute;
    bottom: 48px;

`
export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`