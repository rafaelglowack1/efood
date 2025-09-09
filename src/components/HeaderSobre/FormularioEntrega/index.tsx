import {useFormik } from 'formik';
import * as yup from 'yup'

import { Btn } from "../style";
import { Campo, Box, Error } from "./styles";
import React from 'react';

export interface DeliveryFormValues {
  receber: string;
  endereco: string;
  cidade: string;
  cep: string;
  numero: string;
  complemento?: string;
}
type Props = {
  onFinalizar: (values: DeliveryFormValues) => void;
  onVoltar: () => void;
  initialValues?: DeliveryFormValues;    
  onChangeValues?: (values: DeliveryFormValues) => void; 
};

const FormularioEntrega = ({ onVoltar,onFinalizar, initialValues, onChangeValues }: Props) => {
  const form = useFormik<DeliveryFormValues>({
    initialValues: initialValues ?? {
      receber: "",
      endereco: "",
      cidade: "",
      cep: "",
      numero: "",
      complemento: "",
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      receber: yup
        .string()
        .required("Obrigatório")
        .min(6, "Mínimo 6 caracteres")
        .matches(/^[A-Za-zÀ-ÿ\s]+$/, "Digite apenas letras"),
      endereco: yup.string().required("Obrigatório").min(6, "Mínimo 6 caracteres"),
      cidade: yup.string().required("Obrigatório").min(2, "Mínimo 2 caracteres"),
      cep: yup
        .string()
        .required("Obrigatório")
        .transform((value, originalValue) =>
          typeof originalValue === "string" ? originalValue.replace(/\D/g, "") : value
        )
        .length(8, "CEP deve ter 8 dígitos"),
      numero: yup.string().required("Obrigatório"),
      complemento: yup.string().nullable(),
    }),
    onSubmit: (values) => {
      onFinalizar(values);
    },
  });
  React.useEffect(() => {
  if (onChangeValues) {
    onChangeValues(form.values);
  }
}, [form.values, onChangeValues]);
  return(
  <>
    <h2 style={{ padding: "12px" }}>Entrega</h2>
    <form
      onSubmit={form.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px" }}
    > <label>Quem irá receber</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="receber"
          value={form.values.receber}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
        {form.touched.receber && form.errors.receber && (
          <Error>{form.errors.receber as string}</Error>
          )}
      </div>
      <label>Endereço</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="endereco"
          value={form.values.endereco}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
             {form.touched.endereco && form.errors.endereco && (
        <Error>{form.errors.endereco as string}</Error>
          )}
      </div>
      <label>Cidade</label>
      <div style={{ position: 'relative' }}>
        <Campo
          name="cidade"
          value={form.values.cidade}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
             {form.touched.cidade && form.errors.cidade && (
        <Error>{form.errors.cidade as string}</Error>
          )}
      </div>
      <Box>
        <div>

          <label>CEP</label>
        <div style={{ position: 'relative' }}>
          <Campo
            name="cep"
            value={form.values.cep}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
              />
             {form.touched.cep && form.errors.cep && (
          <Error>{form.errors.cep as string}</Error>
          )}
      </div>
        </div>
        <div>
          <label>Número</label>
       <div style={{ position: 'relative' }}>
        <Campo
          name="numero"
          value={form.values.numero}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
             />
             {form.touched.numero && form.errors.numero && (
        <Error>{form.errors.numero as string}</Error>
          )}
      </div>
        </div>
      </Box>
      <label>Complemento (opcional)</label>
      <Campo  
        name="complemento"
        value={form.values.complemento}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
     />
      <Btn style={{marginTop: '24px'}} type="submit" >Continuar com o pagamento</Btn>
      <Btn type="button" onClick={onVoltar}>Voltar para o Carrinho</Btn>
    </form>
  </>
)};

export default FormularioEntrega;


