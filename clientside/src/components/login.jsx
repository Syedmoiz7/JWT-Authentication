import './login.css'
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Login() {



    return (

        <div className='mainCont'>
            <div className="heading">
                <h1>Login</h1>
            </div>
            <div>
                <form action="">
                    <div className='form'>
                        <div class="username">
                            <div id="padd">
                                <input type="email" name="email" className="inputs"
                                    id="un" placeholder="Email" />
                            </div>
                        </div>
                        <div id="pass">
                            <div id="paddtwo">
                                <input type="password" name="password" id="password"
                                    className="inputs" placeholder="Password" />
                            </div>
                        </div>

                        <button type='submit' className='btn'>
                            Login
                        </button>

                        <p>Don't have an account? </p>

                         <Link to={'/signup'}>Signup</Link>

                    </div>
                </form>
            </div>
        </div>)
}

export default Login;