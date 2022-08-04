import './Login.scss'
import { useNavigate } from "react-router-dom";

const Login = () => {

    let navigate = useNavigate();
    const routeChange = () => {
      let path = `/`;
      navigate(path);
    }

    return(
        <div className="d-flex align-items-center justify-content-center container-login">
            <div className='container-form'>
                <h3>Welcome, we miss you</h3>
                <h6 className='text-center'>Login with email and password</h6>
                <form className='row'>
                    <div className='col-12 mb-3'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col-12 mb-3'>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type="password" className='form-control' />
                        </div>
                    </div>
                    <div className='d-grid gap-2 mt-2 mb-2'>
                        <button onClick={routeChange} className='btn btn-block btn-success'>Login</button>
                    </div>
                </form>
                <h6 className='text-center'>Or with your google account</h6>
                <div className='text-center'>
                    <i className='bx bxl-google pointer'></i>
                </div>
                <div className='text-center'>
                    <p className='pointer text-secondary'>¿You are not registered yet?</p>
                </div>
            </div>
        </div>
    )
}
export default Login;