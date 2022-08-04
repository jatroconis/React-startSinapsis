import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { authApi } from "./api/auth.api";

const Register = () => {
  const values = { email: "", password: "" };
  return (
    <div className="d-flex align-items-center justify-content-center container-login">
      <div className="container-form">
        <h3>Estas a poco pasos</h3>
        <h6 className="text-center">Digita tu email y tu contraseña</h6>
        <Formik
          initialValues={values}
          onSubmit={(formData) => authApi.register(formData)}
        >
          <Form className="row">
            <div className="col-12 mb-3">
              <div className="form-group">
                <label>Email</label>
                <Field
                  id="email"
                  type="text"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-group">
                <label>Password</label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-12 row mb-3">
              <div className="col-6">
                <Link to={"/login"} className="btn btn-danger">
                  Volver
                </Link>
              </div>
              <div className="col-6 text-end">
                <button type="submit" className="btn btn-success">
                  Registrarse
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Register;
