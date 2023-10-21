import React from 'react'
import "./notFound.css";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate("/");
    }

  return (
    <div>
        <div className="page2">
            <div>
                <h1>404</h1>
            </div>
            <div>
                <h4>Oops! Page not Found!</h4>
            </div>
            <div>
                <p>The page you requested was not found.</p>
            </div>
            <div className="button">
                <input type="submit" value="Back to Home" onClick={handleButton}/>
            </div>
        </div>
    </div>
  )
}

export default NotFound