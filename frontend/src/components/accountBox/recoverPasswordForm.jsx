import {  useFormik } from "formik";
import React, { useContext,useState} from "react";
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
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";


//Validacion de campos vacios
const validationSchema = yup.object({
  correo : yup.string().email("Por favor ingrese un correo válido").required("El correo es requerido"),

})


//Componente funcional del Login
export function RecoverPassword(props) {
   //Comunica los componentes para luego  pasar de login al registro
   const { switchToSignin} = useContext(AccountContext);
   const { switchRecoverPassword } = useContext(AccountContext);
   const [setSuccess] =useState(null);
   const [ setError] = useState(null);
 
   //controlador del formulario se activa cuando se envia el formulario
   const onSubmit = async (values) => {
     const {correo} = values;
     console.log(values);
     const response = await axios
       .post("http://localhost:4000/api/tienda/restablecerpassemail", {correo: correo})
       .then(response => {swal({
         title: "EXITOSO",
         text: response?.data?.msg,
         icon: "success",
         button: "Aceptar",
         timer: "1500"
         
     });formik.resetForm(); })
       .catch((err) => {
         console.log(err)
           swal({
             title: "HA OCURRIDO UN ERROR",
             text: err.response.data.msg,
             icon: "error",
             button: "Aceptar",
             timer: "1500"
         });
       });
 
     if (response && response.data) {
       console.log("Hola")
       setError(null);
       setSuccess(response?.data?.msg);
     }
  };


  //Inicializa los valores del formulario, onsubmit envia la informacion al useFormik y se validan los campos con el validationSchema
  const formik = useFormik({initialValues :{correo: ""}, validateOnBlur: true, onSubmit, validationSchema: validationSchema});

return (
    <BoxContainer>
      {/*El onSubmit maneja el envio del formulario */}
    <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
        {/*se maneja el estado de las entradas con value={formik.values.correo} y onChange={formik.handleChange}*/}
        <Input type="email"  name="correo" id="correo" placeholder="Email" value={formik.values.correo} onChange={formik.handleChange}  onBlur={formik.handleBlur}/> 
        {/*Si hay un error durante la validación formik.touched.correo && formik.errors.correo se lo mostrará al usuario.*/}
        <FieldError>{formik.touched.correo && formik.errors.correo ? formik.errors.correo:""}</FieldError>
        </FieldContainer>
    <Marginer direction="vertical" margin="1.6em" />
      {/*Si los campos estan llenos se inicia seccion con el boton de lo contrario el boton esta deshabilitado */}
    <SubmitButton type="submit" disabled={!formik.isValid}>Enviar Correo</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    </FormContainer>
   
    
    <MutedLink href="#">
    ¿No tienes una cuenta?{" "}
        {/* Para pasar a Registrarse*/}
        <BoldLink href="#" onClick={switchToSignin}>Login

        </BoldLink>
    </MutedLink>
    </BoxContainer>
    );
};

