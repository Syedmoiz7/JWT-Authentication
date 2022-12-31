import { useState } from "react";
import axios from 'axios';


const baseUrl = 'http://localhost:5000'


function Signup() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [result, setResult] = useState("")

    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            let response = axios.post(`${baseUrl}/signup`, {
                firstName: name,
                lastName: lastName,
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
        <div>
            <form onSubmit={signupHandler}>
                <label>Name</label>
                <input type="text" name="name" id="" placeholder="Enter your Name"
                    onChange={(e) => { setName(e.target.value) }} />

                <label>Last Name</label>
                <input type="text" name="last name" id="" placeholder="Enter your Name" 
                onChange={(e) => {setLastName(e.target.value)}} />

                <label>Email</label>
                <input type="email" name="email" id="" placeholder="Enter your Name"
                onChange={(e) => {setEmail(e.target.value)}} />

                <label>Password</label>
                <input type="password" name="password" id="" placeholder="Enter your Name"
                onChange={(e) => {setPassword(e.target.value)}} />
            </form>
        </div>)
}

export default Signup;