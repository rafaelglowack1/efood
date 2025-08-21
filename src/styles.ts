import { createGlobalStyle } from "styled-components"

export const cores = {
  laranja: "#e66767",
  branco: "#fff8f2"
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  body{
    background-color: ${cores.branco}
  }
`


