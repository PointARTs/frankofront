import {Link, NavLink} from "react-router-dom";
import Logo from '../Assets/images/logo.png'


function Header() {

    return (
        <>
        <div className="nk-header nk-header-fixed is-light">
            <div className="container-lg wide-xl">
                <div className="nk-header-wrap">
                    <div className="nk-header-brand">
                        <Link to="/" className="logo-link">
                            <img className="logo-img" src={Logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="nk-header-menu">
                        <ul className="nk-menu nk-menu-main">

                            <li>
                                <NavLink strict className="nk-menu-item" to='/'>
                                    <a className="nk-menu-link">
                                        <span className="nk-menu-text">Головна</span>
                                    </a>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink exact className="nk-menu-item" to='/reg'>
                                    <a className="nk-menu-link">
                                        <span className="nk-menu-text">Створити анкету</span>
                                    </a>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>



        </>
    );
}

export default Header

