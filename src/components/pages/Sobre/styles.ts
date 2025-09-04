import styled from "styled-components";
import { Secao, Text, Title, Botao, Container } from "../../Body/style"
import { cores } from "../../../styles";

export const SecaoSobre = styled(Secao)`
    background-color: ${cores.laranja};
    margin: 40px 20px 0 0 ;
    width: 320px;
    height: autopx;
    border: 8px solid ${cores.laranja};
    border-radius: 2px;

    img{
        height: 160px;
        border-radius: 2px;
    }

`
export const TextSobre = styled(Text)`
    color:${cores.bege};
    padding-bottom: 20px;
    font-size: 14px;
`
export const TitleSobre = styled(Title)`
    color:${cores.bege};
    font-size: 16px;
`
export const BtnSobre = styled(Botao)`
    color:${cores.laranja};
    background-color: ${cores.bege};
    width: 100%;
    margin-left: 0;
    bottom: 4px;

`
export const ContainerSobre = styled(Container)`
    grid-template-columns: 1fr 1fr 1fr;
`