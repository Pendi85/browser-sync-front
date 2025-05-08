import { useNavigate } from 'react-router-dom';
import React from 'react';


function LoginExt() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container fill-space vCenter stretch" style={{gap:'20px', maxWidth: "200px", alignSelf: "center"}}>
                <a onClick={() => navigate('/login')}>Sign in</a>
                <a onClick={() => navigate('/register')}>Register an account</a>
            </div>
        </>
    )
}

export default LoginExt;