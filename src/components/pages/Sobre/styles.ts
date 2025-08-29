import styled from "styled-components";
import { Secao, Text, Title, Botao, Container } from "../../Body/style"
import { cores } from "../../../styles";

export const SecaoSobre = styled(Secao)`
    background-color: ${cores.laranja};
    width: 308px;

`
export const TextSobre = styled(Text)`
    color:${cores.branco};
    margin-bottom: 4px;
    font-size: 18px;
`
export const TitleSobre = styled(Title)`
    color:${cores.branco};
    margin-bottom: 2px;
    font-size: 20px;
`
export const BtnSobre = styled(Botao)`
    color:${cores.laranja};
    background-color: ${cores.branco};

`
export const ContainerSobre = styled(Container)`
    grid-template-columns: 1fr 1fr 1fr;
`