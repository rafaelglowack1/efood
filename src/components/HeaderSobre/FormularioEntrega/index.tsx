import { Btn } from "../style";
import { Campo, Box } from "./styles";

type Props = {
  onFinalizar: () => void;
  onVoltar: () => void;
};

const FormularioEntrega = ({ onFinalizar, onVoltar }: Props) => (
  <>
    <h2 style={{ padding: "12px" }}>Dados para entrega</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onFinalizar();
      }}
      style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px" }}
    > <label>Quem irá receber</label>
      <Campo type="text"  required />
      <label>Endereço</label>
      <Campo type="text"  required />
      <label>Cidade</label>
      <Campo type="text"  required />
      <Box>
        <div>
          <label>CEP</label>
          <Campo type="number"  required />
        </div>
        <div>
          <label>Número</label>
          <Campo type="number"  required />
        </div>
      </Box>
      <label>Complemento (opcional)</label>
      <Campo type="text" />
      <Btn type="submit">Continuar com o pagamento</Btn>
      <Btn type="button" onClick={onVoltar}>Voltar para o Carrinho</Btn>
    </form>
  </>
);

export default FormularioEntrega;
