import { useContext } from 'react';
import MenuContext from '../../../../../context/menu/MenuContext';
import { verifyAddDish } from '../tools/verifyAddDish';

const ButtonAdd = ({ dish, dishInfo }) => {
    const { addDish, menu } = useContext(MenuContext);

    Object.defineProperty(dish, 'info', {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 'static'
    });

    dish.info = dishInfo;

    return (
        <button className="dish__buttonAdd"
            onClick={() => verifyAddDish(menu, addDish, dish)}
        >
            <i className="fas fa-plus-circle"></i>
            Agregar al menú
        </button >
    )
}

export default ButtonAdd