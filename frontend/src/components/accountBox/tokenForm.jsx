import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";

//Validacion de campos vacios
const validationSchema = yup.object({
  correo: yup.string().required("Campo requerido"),
  pass: yup.string().required("Campo requerido"),
});

//Componente funcional del Login
export function LoginForm(props) {
  //Comunica los componentes para luego  pasar de login al registro
  const { switchToSignup } = props;
  const { switchNewPassword } = props;
  const switchRecoverPassword = useContext(AccountContext);
  const [setSuccess] = useState(null);
  const [setError] = useState(null);

  //controlador del formulario se activa cuando se envia el formulario
  const onSubmit = async (values) => {
    const { token } = values;
    console.log(values);
    const response = await axios
      .post("http://localhost:4000/api/tienda/", {
        token: token,
      })
      .then((response) => {
        swal({
          title: "Exitoso",
          text: response?.data?.message,
          icon: "success",
          button: "Aceptar",
          timer: "1500",
        });
        formik.resetForm();
      })
      .catch((err) => {
        //  console.log(response);
        //if (err && err.response) setError(err.response.data.message);
        console.log(err);
        swal({
          title: "HA OCURRIDO UN ERROR",
          text: err.response.data.message,
          icon: "error",
          button: "Aceptar",
          timer: "1500",
        });
      });

    if (response && response.data) {
      console.log("Hola");
      setError(null);
      setSuccess(response?.data?.message);
    }
  };

  //Inicializa los valores del formulario, onsubmit envia la informacion al useFormik y se validan los campos con el validationSchema
  const formik = useFormik({
    initialValues: { token: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      {/*El onSubmit maneja el envio del formulario */}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          {/*se maneja el estado de las entradas con value={formik.values.correo} y onChange={formik.handleChange}*/}
          <Input
            type="text"
            name="token"
            id="token"
            placeholder="token"
            value={formik.values.token}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/*Si hay un error durante la validación formik.touched.correo && formik.errors.correo se lo mostrará al usuario.*/}
          <FieldError>
            {formik.touched.token && formik.errors.token
              ? formik.errors.token
              : ""}
          </FieldError>
        </FieldContainer>

        <Marginer direction="vertical" margin="1.6em" />
        {/*Si los campos estan llenos se inicia seccion con el boton de lo contrario el boton esta deshabilitado */}
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Enviar
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}

export default LoginForm;
