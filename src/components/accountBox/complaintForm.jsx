import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { useRouter } from "next/router";

//Validacion de campos vacios
const validationSchema = yup.object({
  descripcion: yup.string().required("Campo requerido"),
});

const theme = createTheme();

export function Complaint(props) {
  const [setSuccess] = useState(null);
  const [setError] = useState(null);
  const router = useRouter();

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  //Inicializa los valores del formulario, onsubmit envia la informacion al useFormik y se validan los campos con el validationSchema
  const formik = useFormik({
    initialValues: { pass: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Realizar Denuncia
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              textarea
              margin="normal"
              required
              fullWidth
              type="textarea"
              name="descripcion"
              id="descripcion"
              label="Descripción"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextareaAutosize
              maxRows={4}
              aria-label="Maxima altura"
              placeholder="Maximo 4 lineas"
              defaultValue=""
              style={{ width: 200 }}
              margin="normal"
              required
              type="textarea"
              name="descripcion"
              id="descripcion"
              label="Descripción"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FieldError>
              {formik.touched.descripcion && formik.errors.descripcion
                ? formik.errors.descripcion
                : ""}
            </FieldError>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Complaint;
