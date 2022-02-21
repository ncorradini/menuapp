import { useContext } from 'react';
import MenuContext from '../../../../../context/menu/MenuContext';

const ButtonDelete = ({ dish }) => {
    const { deleteDish } = useContext(MenuContext);

    return (
        <button className="dish__buttonDelete"
            onClick={() => deleteDish(dish)}
        >
            <i className="fas fa-trash-alt"></i>
            Eliminar
        </button>
    )
}

export default ButtonDelete