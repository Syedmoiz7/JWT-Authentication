import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import './signup.css';
import axios from 'axios';


const baseUrl = 'http://localhost:5000'


function Signup() {

    const [name, setName] = useState("")
    // const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [result, setResult] = useState("")

    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            let response = axios.post(`${baseUrl}/signup`, {
                firstName: name,
                // lastName: lastName,
                email: email,
                password: password
            })

            console.log("signup successfull")
            setResult("signup successful")
        }

        catch (e) {
            console.log("error ", e);
        }

    }

    return (
        <div className="mainContainer">
            <div className="heading">
                <h1>Sign Up</h1>
            </div>

            <form onSubmit={signupHandler}>
                <div className="formSignup">
                    <input type="text" className="inputs" name="name" placeholder="Name"
                        onChange={(e) => { setName(e.target.value) }} />
                    <br />

                    <input type="email" className="inputs" name="email" placeholder="Email"
                        onChange={(e) => { setEmail(e.target.value) }} />
                    <br />

                    <input type="password" className="inputs" name="password" placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }} />
                    <br />

                    <input type="password" className="inputs" name="password"
                        placeholder="Confirm Password" />
                    <br />

                    <button type="submit" className='btn'>Sign Up</button>

                    <p>Already have an account?</p>

                    <Link to={'/'}>Login</Link>


                </div>

            </form>

        </div>)
}

export default Signup;