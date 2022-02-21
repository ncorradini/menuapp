import './Header.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const logout = () => {
        localStorage.removeItem("TOKEN");
        window.location.reload(true);
    }

    const navigate = useNavigate();

    return (
        <header className="navigation">
            <div className="container">
                <div className="logo">
                    <h2 onClick={() => navigate("/user")}>
                        Menu<span>App</span>
                    </h2>
                </div>
                <nav className="logout">
                    <button onClick={logout}>Cerrar Sesión</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
