import './DishList.scss';
import Dish from './Dish';

const DishList = ({ dishs, menu }) => {
    return (
        <div className="dishList">
            {dishs.map(dish =>
                <Dish
                    key={dish.id}
                    dish={dish}
                    menu={menu}
                />
            )}
        </div>
    );
};

export default DishList;
