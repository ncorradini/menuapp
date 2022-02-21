import { useReducer } from 'react';
import MenuContext from './MenuContext';
import MenuReducer from './MenuReducer';

const MenuState = ({ children }) => {
    const initialState = {
        menu: [],
        features: {
            health_score: 0,
            ready_minutes: 0,
            price: 0
        }
    }

    const [state, dispatch] = useReducer(MenuReducer, initialState);

    const addDish = dish => {
        dispatch({ type: 'ADD_DISH', payload: dish });
    }

    const deleteDish = dish => {
        dispatch({ type: 'DELETE_DISH', payload: dish });
    }

    return (
        <MenuContext.Provider
            value={{
                menu: state.menu,
                features: state.features,
                addDish,
                deleteDish
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}

export default MenuState;