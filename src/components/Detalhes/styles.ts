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
  border-radius: 2px;
  width: 400px;
  max-width: 90%;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.48);

    img {
        width: 100%;
        height: 210px;
        object-fit: cover;
        border-radius: 2px
    }
`

export const BotaoComprar = styled.button`
    background-color: ${cores.branco};
    cursor: pointer;
    border-radius: 2px;
    border: none;
    color: green;
    padding: 8px;
    margin-right: 12px;

`
export const BotaoCancelar = styled(BotaoComprar)`
  color: red;
`
