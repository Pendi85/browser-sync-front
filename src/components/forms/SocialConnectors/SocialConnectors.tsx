import wallet from '../../../assets/wallet.svg';
import google from '../../../assets/google.svg';
import apple from '../../../assets/apple.svg';

import './SocialConnectors.css';

function SocialConnectors(props : any) {
    return (
        <>
            <div className="social-login">
                <button className="wallet"><img src={wallet} alt="Wallet logo" /></button>
                <button className="google"><img src={google} alt="Google logo" /></button>
                <button className="apple"><img src={apple} alt="Apple logo" /></button>
            </div>
        </>
    )
}

export default SocialConnectors;