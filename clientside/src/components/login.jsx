import './login.css'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";

import axios from 'axios';

const baseUrl = 'http://localhost:5000'


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            let response = await axios.post(`${baseUrl}/login`, {
                email: email,
                password: password
            }, {
                withCredentials: true
            })

            console.log("login successfull");
            setResult("login successfull");
        } catch (e) {
            console.log("error: ", e);
        }

    }

    return (

        <div className='mainCont'>

            <div className="heading">
                <h1>Login</h1>
            </div>

            <div>
                <form onSubmit={loginHandler}>
                    <div className='form'>
                        <input type="email" name="email" className="inputs"
                            id="un" placeholder="Email"
                            onChange={(e) => { setEmail(e.target.value) }} />
                        <br />

                        <input type="password" name="password"
                            className="inputs" placeholder="Password"
                            onChange={(e) => { setPassword(e.target.value) }} />
                        <br />

                        <button type='submit' className='btn'>
                            Login
                        </button>

                        <p>Don't have an account? </p>
                        <Link to={'/signup'}>Signup</Link>

                    </div>
                </form>

                <p>{result}</p>
            </div>
        </div>)
}

export default Login;