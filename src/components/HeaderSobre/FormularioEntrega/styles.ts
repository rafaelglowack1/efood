import styled from "styled-components";
import { cores } from "../../../styles";

export const Campo = styled.input`
    margin: 0 auto;
    width: 100%;
    padding: 12px 0;
    background-color: ${cores.bege};
    margin-top: -4px;
    border: none;
    border-radius: 2px;
    font-weight: bold;
    font-size: 14px;
    text-indent: 12px;
    direction: ltr; 
}

`
export const Box = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 0 14px 0 0 ;

    div{
        label{
        display: block;
        margin-bottom: 12px;
    }
    }

`
export const Error = styled.div`
    color : #9e0000ff;
    width: 98%;
    font-weight: bold;
    position: absolute;
    text-align: end;
`