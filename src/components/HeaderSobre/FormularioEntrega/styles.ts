import styled from "styled-components";
import { cores } from "../../../styles";

export const Campo = styled.input`
    margin: 0 auto;
    width: 96%;
    padding: 12px 6px;
    background-color: ${cores.branco};
    margin-top: -4px;
    border: none;
    border-radius: 2px;
`
export const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 0 6px;

    div{
        label{
        display: block;
        margin-bottom: 12px;
    }
    }

`