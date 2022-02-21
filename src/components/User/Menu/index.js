import './Menu.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import MenuContext from '../../../context/menu/MenuContext';
import DishList from '../DishList';
import Features from './Features';

const Menu = () => {
    const navigate = useNavigate();
    const { menu } = useContext(MenuContext);

    return (
        <section className="menu">
            <h2 className="menu__title">Menú</h2>
            <nav className="menu__buttonContainer">
                <button
                    className="menu__buttonContainer-btn"
                    onClick={() => navigate('/user/searcher')}
                >
                    <i className="fas fa-plus-circle"></i>
                    Agregar plato
                </button>
            </nav>
            <div className="menu__container">
                {menu.length <= 0
                    ? <p className="menu__notDish">Aún no has agregado ningún plato a tu menú</p>
                    : <DishList dishs={menu} menu={true} />
                }
                <Features />
            </div>
        </section>
    );
};

export default Menu;
