import InputGroup from '../components/forms/InputGroup/InputGroup.tsx';
import SocialConnectors from '../components/forms/SocialConnectors/SocialConnectors.tsx';

import './Login.css';

function Login() {
    return (
        <>
            <div className="container fill-space vCenter stretch" style={{gap: 40, maxWidth: 600, alignSelf: "center"}}>
                <h1>Login to your account</h1>
                <form>
                    <InputGroup placeholder="Enter your email" error="Email is required" />
                    <InputGroup type="password" placeholder="Enter your password" error="Password is required" />
                    <button type="submit" style={{alignSelf: "center"}}>Submit</button>
                    <div>
                        <p>Don't have an account? <a className='link' href="/register">Register</a></p>
                        <p>Forgot your password? <a className='link' href="/reset">Reset it</a></p>
                    </div>
                    <SocialConnectors />
                </form>
            </div>
        </>
    )
}

export default Login;