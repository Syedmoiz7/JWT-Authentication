import './login.css'

function Login() {
    






    return (

        <div className='mainCont'>
            <div id="one">
                <h1>Login</h1>
            </div>
            <div>
                <form action="">
                    <div id="two">
                        <div class="username"><label for="un">Username</label> <br />
                            <div id="padd">
                                <input type="text" name="username" id="un" placeholder="Username" />
                            </div>
                        </div>
                        <div id="pass">
                            <label for="">Password</label>
                            <div id="paddtwo">
                                <input type="password" name="" id="password" placeholder="Password" />
                            </div>
                        </div>

                        <div id="butt">
                            Login
                        </div>

                        <div id="a">
                            <a href="">Register an account </a>
                        </div>

                    </div>
                </form>
            </div>
        </div>)
}

export default Login;