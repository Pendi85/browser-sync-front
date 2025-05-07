import './Login.css'
import { ReactSVG } from 'react-svg';
import wallet from '../assets/wallet.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'

function Login() {
    return (
        <>
            <div className="container">
                <h1>Login to your account</h1>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Mail Address" />
                        <span className="error">Username is required</span>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" />
                        <span className="error">Password is required</span>
                    </div>
                    <button type="submit">Submit</button>
                    <div>
                        <p>Don't have an account? <a className='link' href="/register">Register</a></p>
                        <p>Forgot your password? <a className='link' href="/reset">Reset it</a></p>
                    </div>
                </form>
                <div className="social-login">
                    <button className="wallet"><img src={wallet} alt="Wallet logo" /></button>
                    <button className="google"><img src={google} alt="Google logo" /></button>
                    <button className="apple"><img src={apple} alt="Apple logo" /></button>
                </div>
            </div>
        </>
    )
}

export default Login;