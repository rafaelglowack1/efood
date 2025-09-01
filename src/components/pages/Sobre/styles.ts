import styled from "styled-components";
import { Secao, Text, Title, Botao, Container } from "../../Body/style"
import { cores } from "../../../styles";

export const SecaoSobre = styled(Secao)`
    background-color: ${cores.laranja};
    width: 306px;
    height: 338px;
    border: 8px solid ${cores.laranja};

    img{
        height: 160px;
    }

`
export const TextSobre = styled(Text)`
    color:${cores.bege};
    margin-bottom: 4px;
    font-size: 14px;
`
export const TitleSobre = styled(Title)`
    color:${cores.bege};
    margin-bottom: 2px;
    font-size: 16px;
`
export const BtnSobre = styled(Botao)`
    color:${cores.laranja};
    background-color: ${cores.bege};
    width: 95%;

`
export const ContainerSobre = styled(Container)`
    grid-template-columns: 1fr 1fr 1fr;
`