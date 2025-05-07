import { useNavigate } from 'react-router-dom';
import './LoginExt.css'

function LoginExt() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <a onClick={() => navigate('/login')}>Sign in</a>
                <a onClick={() => navigate('/register')}>Register an account</a>
            </div>
        </>
    )
}

export default LoginExt;