import './Header.css';
import './layout.css';
import './component.css';
import logoImg from '../images/logo.svg';

function Header(){
    return (
        <header className="Header">
                <div className='Header-inside'>
                    <div className="Header-title">
                        <span className="Header-title-text">My balance</span>
                        <span className="Header-title-spending">$921.48</span>
                    </div>
                    <div className="Header-icon">
                        <img src={logoImg} alt="logo"/>
                    </div>
            </div>
        </header>    
    );
}

export default Header;
