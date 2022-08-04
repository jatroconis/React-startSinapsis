import { authApi } from "./api/auth.api";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { Formik, Form, Field } from "formik";
import { alertService } from "../core/alert-service";
const Login = () => {
  const navigate = useNavigate();
  const loginGoogle = () => {
    authApi.loginWithGoogle((auth) => {
      if (auth?.user) {
        sessionStorage.setItem("user", JSON.stringify(auth?.user));
        goHome();
      }
    });
  };
  const goHome = () => {
    navigate("/");
  };

  const values = { email: "", password: "" };

  const login = (user) => {
    authApi
      .login(user)
      .then((auth) => {
        sessionStorage.setItem("user", JSON.stringify(auth?.user));
        navigate("/");
      })
      .catch(() => alertService.error("Se ha presentado un error"));
  };
  return (
    <div className="d-flex align-items-center justify-content-center container-login">
      <div className="container-form">
        <h3>Bienvenid@, te extrañabamos</h3>
        <h6 className="text-center">Inicia sesion con tu email y contraseña</h6>
        <Formik initialValues={values} onSubmit={(formData) => login(formData)}>
          <Form className="row">
            <div className="col-12 mb-3">
              <div className="form-group">
                <label>Email</label>
                <Field
                  id="email"
                  type="text"
                  className="form-control"
                  name="email"
                />
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-group">
                <label>Contraseña</label>
                <Field
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                />
              </div>
            </div>
            <div className="d-grid gap-2 mt-2 mb-2">
              <button type="submit" className="btn btn-block btn-success">
                Iniciar sesion
              </button>
            </div>
          </Form>
        </Formik>
        <h6 className="text-center">O inicia sesion con tu cuenta de google</h6>
        <div className="text-center">
          <i
            onClick={() => loginGoogle()}
            className="bx bxl-google pointer"
          ></i>
        </div>
        <div className="text-center">
          <Link to={"/register"} className="pointer text-secondary">
            ¿No estras registrado aun?
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
