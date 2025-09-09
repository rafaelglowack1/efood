import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from 'yup';

import { clearCart } from "../../../Store/reducers/cart";

import type { RootState } from "../../../Store";
import type { DeliveryFormValues } from "../FormularioEntrega";

import { Box, Campo } from "../FormularioEntrega/styles";
import { BoxDiv } from "./styles";
import { Btn } from "../style";
import { Error as ErrorForm } from "../FormularioEntrega/styles";

type KnownCartItem = { 
  id: number; 
  preco?: number; 
  price?: number; 
  quantity?: number };

type Props = { 
  delivery: DeliveryFormValues;
  onPagarConcluido: (data: string | number | null) => void;
  onVoltar: () => void;
};

type PaymentFormValues = {
  nome: string;
  cartao: string;
  cvv: string;
  mesVencimento: string;
  anoVencimento: string;
};

const Pagamento = ({ delivery, onPagarConcluido, onVoltar }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

   const form = useFormik<PaymentFormValues>({
    initialValues: {
      nome: "",
      cartao: "",
      cvv: "",
      mesVencimento: "",
      anoVencimento: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("Obrigatório").min(6, "Mínimo 6 caracteres"),
      cartao: yup.string().required("Obrigatório").length(16, "O cartão deve ter 16 dígitos"),
      cvv: yup.string().required("Obrigatório").length(3, "O CVV deve ter 3 dígitos"),
      mesVencimento: yup
        .string()
        .required("Obrigatório")
        .matches(/^(0[1-9]|1[0-2])$/, "Mês inválido (01–12)"),
      anoVencimento: yup.string().required("Obrigatório").matches(/^\d{4}$/, "Ano inválido (ex: 2025)"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        const products = cartItems.map((item) => ({
          id: item.id,
          price: (item as KnownCartItem).preco ?? (item as KnownCartItem).price ?? 0, 
        }));

        // Corpo como a API espera
        const body = {
          products,
          delivery: {
            receiver: delivery.receber,
            address: {
              description: delivery.endereco,
              city: delivery.cidade,
              zipCode: delivery.cep,
              number: Number(delivery.numero),
              complement: delivery.complemento ?? "",
            },
          },
          payment: {
            card: {
              name: values.nome,
              number: values.cartao,
              code: Number(values.cvv),
              expires: {
                month: Number(values.mesVencimento),
                year: Number(values.anoVencimento),
              },
            },
          },
        };

        const response = await fetch("https://ebac-fake-api.vercel.app/api/efood/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Checkout falhou: ${response.status} - ${JSON.stringify(data)}`);
        }

        // sucesso: limpa carrinho e envia orderId para o HeaderSobre
        dispatch(clearCart());
        onPagarConcluido(data.orderId);

      } catch (err) {
        console.error("Erro ao finalizar compra:", err);
        alert("Não foi possível concluir a compra. Verifique o console / network e tente novamente.");
      } finally {
        setSubmitting(false);
      }
    },
  });
  return(
  <>
    <h2 style={{ padding: "12px" }}>Pagamento</h2>
    <form
      onSubmit={form.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px" }}
    >
      <label >Nome no cartão</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="nome"
          value={form.values.nome}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
        {form.touched.nome && form.errors.nome && (
          <ErrorForm>{form.errors.nome as string}</ErrorForm>
          )}
      </div>
      <BoxDiv>
        <div>
          <label >Número do cartão</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="cartao"
          value={form.values.cartao}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
        {form.touched.cartao && form.errors.cartao && (
          <ErrorForm>{form.errors.cartao as string}</ErrorForm>
          )}
      </div>
        </div>
        <div>
          <label >CVV</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="cvv"
          value={form.values.cvv}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
        {form.touched.cvv && form.errors.cvv && (
          <ErrorForm>{form.errors.cvv as string}</ErrorForm>
          )}
      </div>
        </div>
      </BoxDiv>
      <Box>
        <div>
          <label >Mês de vencimento</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="mesVencimento"
          value={form.values.mesVencimento}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
        {form.touched.mesVencimento && form.errors.mesVencimento && (
          <ErrorForm>{form.errors.mesVencimento as string}</ErrorForm>
          )}
      </div>
        </div>
        <div>
          <label >Ano de vencimento</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="anoVencimento"
          value={form.values.anoVencimento}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
        {form.touched.anoVencimento && form.errors.anoVencimento && (
          <ErrorForm>{form.errors.anoVencimento as string}</ErrorForm>
          )}
      </div>
        </div>
      </Box>
      <Btn type="submit">Pagar</Btn>
      <Btn type="button" onClick={onVoltar}>Voltar</Btn>
    </form>
  </>
)};

export default Pagamento;
