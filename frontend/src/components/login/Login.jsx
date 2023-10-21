import React from 'react'
import "./login.css";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/");
    }
  return (
    <div>
        <nav className="nav">
            <Link to="/"><h3>Booking.com</h3></Link>
        </nav>
        <div className="page1">
            <div className="login_form">
                <h1>Login</h1>
                <form>
                    <input type="text" required placeholder='Email address' />
                    <input type="password" placeholder='Password' required />
                    <div><button onClick={handleLogin}>Login</button></div>
                    <div className="tag">
                        <div><a href="/">Forget your Password</a></div>
                        <div className="or">or</div>
                        <div>Not signed up <a href="/register">Register Here</a></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;