import axios from 'axios';
import { useEffect, useState } from "react";
import { API_KEY } from '../../../../pages/User/tools/const';
import Modal from '../../Menu/Modal';
// Tools
import ButtonAdd from './buttons/ButtonAdd';
import ButtonDelete from './buttons/ButtonDelete';
import ButtonViewDetails from './buttons/ButtonViewDetails';
import ListFeatures from './tools/ListFeatures';

const Dish = ({ dish, menu }) => {
    const [dishInfo, setDishInfo] = useState(null);
    const [viewDetails, setViewDetails] = useState(false);

    useEffect(() => {
        if (!menu) {
            axios.get(`https://api.spoonacular.com/recipes/${dish.id}/information?apiKey=${API_KEY}&includeNutrition=false`)
                .then(response => {
                    const data = response.data;
                    setDishInfo(data);
                })
                .catch(error => console.log(error));
        }
    }, [dish.id])

    return (
        <div className="dish">
            <img className="dish__img" src={dish.image} />
            <h2 className="dish__title">{dish.title}</h2>

            {/* Info View */}
            {dishInfo && <ListFeatures Info={dishInfo} />}
            {menu && <ListFeatures Info={dish.info} />}

            {/* Action buttons */}
            {menu
                ?
                <div className="dish__buttonsContainer">
                    <ButtonViewDetails setViewDetails={setViewDetails} />
                    <ButtonDelete dish={dish} />
                </div>
                :
                <ButtonAdd dish={dish} dishInfo={dishInfo} />
            }

            {/* View Details */}
            {menu &&
                <Modal
                    viewDetails={viewDetails}
                    setViewDetails={setViewDetails}
                >
                    <h4>{dish.title}</h4>
                    <ul>
                        <li>Health Score: {dish.info.healthScore}</li>
                        <li>Listo en: {dish.info.readyInMinutes}m</li>
                        <li>Precio: ${dish.info.pricePerServing}</li>
                    </ul>
                </Modal>
            }
        </div>
    )
}

export default Dish