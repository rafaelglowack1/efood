import { Btn } from "../style";
import { Box, Campo } from "../FormularioEntrega/styles";
import { BoxDiv } from "./styles";
type Props = {
  onPagar: () => void;
  onVoltar: () => void;
};

const Pagamento = ({ onPagar, onVoltar }: Props) => (
  <>
    <h2 style={{ padding: "12px" }}>Pagamento</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onPagar();
      }}
      style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px" }}
    >
      <label >Nome no cartão</label>
      <Campo type="text"  required />
      <BoxDiv>
        <div>
          <label >Número do cartão</label>
          <Campo type="text" required />
        </div>
        <div>
          <label >CVV</label>
          <Campo type="text" required />
        </div>
      </BoxDiv>
      <Box>
        <div>
          <label >Mês de vencimento</label>
          <Campo type="text"  required />
        </div>
        <div>
          <label >Ano de vencimento</label>
          <Campo type="text"  required />
        </div>
      </Box>
      <Btn type="submit">Pagar</Btn>
      <Btn type="button" onClick={onVoltar}>Voltar</Btn>
    </form>
  </>
);

export default Pagamento;
