import styled from "styled-components";
import { cores } from "../../styles";

export const Secao = styled.div`
    width: 472px;
    background-color: #fff;
    color: ${cores.laranja};
    margin-top: 40px;
    border: 1px solid ${cores.laranja};
    border-radius: 2px;
    height: 400px;
    position: relative;

    img {
        width: 100%;
        height: 210px;
        object-fit: cover;
    }

`
export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    padding: 6px 6px 16px 6px;
    margin-left: 6px;
`
export const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 18px 8px;
`
export const Botao = styled.a`
    diplay: block;
    background-color: ${cores.laranja};
    color: ${cores.branco};
    font-size: 16px;
    border: none;
    padding: 6px;
    font-weight: bold;
    border-radius: 2px;
    margin: 12px 0 0 8px;
    position: absolute;
    bottom: 8px;

`
export const TipoContainer = styled.div`
    display: flex;
    position: absolute;
    top: 12px;
    right: 12px;


`
export const Tipo = styled.div`
    margin-left: 12px;
    width: auto;
    background-color: ${cores.laranja};
    color: ${cores.branco};
    font-weight: bold;
    text-align: center;
    border-radius: 2px;
    font-size: 18px;
    
    p{
        padding: 2px 8px;
    }
`
export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
`